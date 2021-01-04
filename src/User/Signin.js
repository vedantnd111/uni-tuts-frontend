import React, { useState, Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { signInFetch, authenticate, isAuthenticated } from '../auth';
import { isActive } from '../helpers/Active';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Paper from 'material-ui/core/Paper';
import '../auth.css';
import book1 from '../core/book1.jpg';

const SignIn = ({ history }) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectReferrer: false
    });

    const { email, password, error, loading, redirectReferrer } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }


    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signInFetch({ email, password })
            .then((data) => {
                // console.log(`data ${data} and data.error ${data.error}`);
                if (data.error || data.error === null) {
                    setValues({ ...values, error: data.error, loading: false });
                }
                else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            redirectReferrer: true
                        })
                    });
                }

            })
    };

    const showLoading = () => loading && <div className="alert alert-danger">
        <h2>loading...</h2>
    </div>;


    const redirectUser = () => {
        if (redirectReferrer) {
            return <Redirect to="/" />
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />
        }
    };

    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            <h5> {error}</h5>
        </div>
    };

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        // paperContainer: {
        //     height: 1356,
        //     backgroundImage: `url(${book1})`
        // }
    }));

    // export default function SignUp() {
    const classes = useStyles();


    return (
        // <div className="jumbotron" style={{backgroundImage:`url(${book1})`,width:"100%",height:"100%"}}>
        <div>

            <Container component="main" maxWidth="xs" className="bg-white" >
                <CssBaseline />
                <div className={classes.paper}>
                    {showError(error)}
                    {showLoading(loading)}
                    {redirectUser()}
                    <div class="col-sm-8 d-flex align-items-center justify-content-center" style={{ border: "2px" }}>
                    <ul class="nav nav-tabs mb-1" id="pills-tab" role="tablist">
                        <li class="nav-item"> <Link className="nav-link text-dark" style={isActive(history, "/signin")} id="pills-signin-tab" data-toggle="pill" to="/signin" role="tab" aria-controls="pills-signin" aria-selected="true">Sign In</Link> </li>
                        <li class="nav-item"> <Link className="nav-link text-dark" style={isActive(history, "/signup")} id="pills-signup-tab" data-toggle="pill" to="/signup" role="tab" aria-controls="pills-signup" aria-selected="false">Sign Up</Link> </li>
                    </ul>
                    </div>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component="h1" variant="h5" className="black-text" style={{ fontWeight: "700" }}>
                        Sign In
    </Typography>
                    <form className={classes.form} noValidate>
                        <div className="row bg-white textfield">
                            <i className="material-icons" style={{ padding: "9px" }}>email</i>
                            <input
                                variant="outlined"
                                margin="normal"
                                className="col form-control"
                                required
                                fullWidth
                                placeholder="Email"
                                id="email"
                                label="Email Address"
                                onChange={handleChange("email")}
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                        </div>
                        <div className="row bg-white textfield">
                            <i className="material-icons" style={{ padding: "9px" }}>vpn_key</i>
                            <input name="password"
                                label="Password"
                                type="password"
                                className="col form-control"
                                placeholder="Password"
                                id="password"
                                variant="outlined"
                                margin="normal"
                                onChange={handleChange("password")}
                                required
                                fullWidth
                                autoComplete="current-password" />
                        </div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={clickSubmit}
                        >
                            Sign In
      </Button>
                        <Grid container>
                            <Grid item xs>
                                {/* <Link href="#" variant="body2">
                                Forgot password?
          </Link> */}
                            </Grid>

                            <Link to="/signup" className="white-text auth-btn" style={{ fontSize: "15px", margin: "4px" }}>
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </form>
                </div>
                {/* <Box mt={8}>
                <Copyright />
            </Box> */}
            </Container>

        </div>
    );
}
export default SignIn;

