import React, { useState, useEffect } from 'react';
import { signUpFetch } from '../auth';
import { fetchStandard } from './apiUser';
import ShowError from '../helpers/ShowError';
import { Link } from 'react-router-dom';
import SlideBar from '../components/SlideBar'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../auth.css';


const Signup = ({history}) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        // success: false,
        standards: [],
        standard: ''

    });

    const { name, email, password, error, success, standard, standards } = values;

    const init = () => {
        fetchStandard()
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                }
                else {
                    setValues({ ...values, standards: data });
                }
            })
            .catch()
    };

    useEffect(() => {
        init();
    }, []);


    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, });
        signUpFetch({ name, email, password, standard })
            .then((data) => {
                if (data.error) {
                    // console.log("data.error ", data.error);
                    setValues({ ...values, error: data.error, success: false });
                }
                else {

                    setValues({
                        name: '',
                        email: '',
                        password: '',
                        error: '',
                        success: true,
                        standards: [],
                        standard: ''
                    });
                    console.log("its flushed");
                }

            })
    };
    function showSuccess(success) {
        return <div className="container alert alert-info mt-2" style={{ display: success ? '' : 'none' }}>
            <h5 style={{ textAlign: "center" }}>A verification link has been sent to your email</h5>
        </div>
    }

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
    }));

    // export default function SignUp() {
    const classes = useStyles();

    return (
        <div className="container-fluid">

            <ShowError error={error} />
            {showSuccess(success)}
            <Container component="main" maxWidth="xs" className="contain bg-white" style={{ borderRadius: "10px", paddingBottom: "5px" }}>
                <CssBaseline />
                <div className={classes.paper}>
                    <SlideBar history={history} />
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className="black-text" style={{ fontWeight: "700" }}>
                        Sign up
        </Typography>
                    <form className={classes.form} noValidate>
                        <div className="row bg-white textfield">
                            <i className="material-icons signup-icon" style={{ padding: "9px" }}>account_circle</i>
                            <input
                                variant="outlined"
                                margin="normal"
                                className="col form-control"
                                required
                                fullWidth
                                placeholder="Name"
                                id="name"
                                value={name}
                                label="Name"
                                name="name"
                                autoComplete="name"
                                onChange={handleChange("name")}
                                autoFocus
                            />
                        </div>
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
                                value={email}
                                label="Email Address"
                                onChange={handleChange("email")}
                                name="email"
                                autoComplete="email"
                            />
                        </div>
                        <div className="row bg-white textfield">
                            <i className="material-icons" style={{ padding: "9px" }}>vpn_key</i>
                            <input name="password"
                                label="Password"
                                value={password}
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
                        <div className="row bg-white textfield">
                            <i className="material-icons" style={{ padding: "9px" }}>class</i>
                            <select className="col form-control" onChange={handleChange('standard')} value={standard} style={{ padding: "3px" }} >
                                <option>please select standard</option>

                                {standards &&
                                    standards.map((c, i) => (
                                        <option key={i} value={c._id}>{c.name}</option>
                                    )
                                    )}
                            </select>
                        </div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={clickSubmit}
                        >
                            Sign Up
          </Button>
                        <Grid container>
                            <Grid item xs>
                                {/* <Link href="#" variant="body2">
                                    Forgot password?
              </Link> */}
                            </Grid>

                            <Link to="/signin" className="white-text auth-btn" style={{ fontSize: "15px", margin: "4px" }}>
                                Already have an account? Sign In
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
export default Signup;