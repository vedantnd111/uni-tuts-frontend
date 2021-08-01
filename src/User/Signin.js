import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { signInFetch, authenticate, isAuthenticated } from '../auth';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ShowError from '../helpers/ShowError';
import '../auth.css';
import SlideBar from '../components/SlideBar';
// import book1 from '../core/book1.jpg';

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
                console.log(`data ${data} and data.error ${data.error}`);
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

    const showLoading = () => loading && <div className="container mt-2 alert alert-warning">
        <h6 style={{ textAlign: "center", fontWeight: "700" }}>loading...</h6>
    </div>;


    const redirectUser = () => {
        if (redirectReferrer) {
            return <Redirect to="/" />
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />
        }
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
            <ShowError error={error} />
            {showLoading(loading)}
            {redirectUser()}
            <Container component="main" maxWidth="xs" className="bg-white" >
                <CssBaseline />
                <div className={classes.paper}>
                    <SlideBar history={history} />
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

