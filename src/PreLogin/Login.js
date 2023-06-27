import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Logo from '../assets/images/logo.png';
import Logo2 from '../assets/images/logo-2.png';
import { status, eventActions, eventCategories } from '../_constants';
import { commonFunctions, GA } from '../_utilities';
import { connect } from 'react-redux';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import '../assets/login.css';
import {constant, constantErr} from '../Constant'
import { authActions } from '../_actions';
import { alert } from '../_utilities';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        nandini
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      isSubmitted: false
    }
  }

  handleStateChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
   
    // this.setState({
    //   isSubmitted: true
    // });
    const errorData = this.validate(true);
    if (errorData.isValid) {
      const { username, password,active } = this.state;
      const sendData = {
        "USERMASTER": {
        Ip:"",
        UserName:username,
        Password:password
      }
    };
    // console.log("AAAAAAAAAAA",sendData)
      this.props.dispatch(authActions.login(sendData));
    }
  };

  validate = (isSubmitted) => {
    const { t } = this.props;
    const validObj = {
      isValid: true,
      message: ""
    };
    let isValid = true;
    const retData = {
      username: validObj,
      password: validObj,
      isValid
    };
    if (isSubmitted) {
      const { username, password } = this.state;
      if (!username) {
        retData.username = {
          isValid: false,
          message:  alert.error("User Name is required")
        };
        isValid = false;
      }
      if (!password) {
        retData.password = {
          isValid: false,
          message:alert.error("Password  is required")
        };
        isValid = false;
      }
    }
    retData.isValid = isValid;
    return retData;
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.user_login_status !== this.props.user_login_status && this.props.user_login_status === status.SUCCESS) {
  //       localStorage.setItem("userData", JSON.stringify(this.props.user));
  //       this.props.history.push('/postlogin/dashboard');
  //   }
  // }

  render() {
    const { username, password, isSubmitted } = this.state;
    const { user_login_status } = this.props;
    const errorData = this.validate(isSubmitted);

   
    return (
      <>


        <div className="login-wrapper">
          <div className='mb-20 mt-3 ml-2'>
            <img src={Logo2} alt="" width="10%" />
          </div>
          <div id="formContent" className='mt-5' style={{ textAlign: 'center' }} >
            <Box className='mb-2'>
              <img src={Logo} alt="" style={{ width: "200px", textAlign: 'center' }} />
            </Box>
            <Container component="main" maxWidth="xs">

              <div className="paper">
                <form className="form" noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    value={username}
                    onChange={this.handleStateChange}
                  />
                  <span className="text-danger">
                    {errorData.username.message}
                  </span>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={this.handleStateChange}
                  />
                  <span className="text-danger">
                    {errorData.password.message}
                  </span>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="submit"
                    onClick={this.handleSubmit}
                    disabled={user_login_status === status.IN_PROGRESS}
                  >
                    Sign In
                  </Button>
                </form>
              </div>
            </Container>
          </div>
          <Box mt={6}>
            <Copyright />
          </Box>

        </div>
        <div className='submit_footer'>
          <div className='submit_footer_text'>
            < div className='submit_footer_img'>
              <EmailIcon />
              <p>dilipe9@gmail.com</p>
            </div>
            <div className='submit_footer_img'>
              <LocalPhoneIcon />
              <p>7597788711</p>
            </div>
          </div>
          <div className='submit_footer_date'>
            <p>2023 {'Copyright © '}Mayank Softwares Soltuion</p>
          </div>
        </div>
      </>
    )
  }
}

function mapStateToProps(state) {
  const { user_login_status, user } = state.procurement;
  return {
    user_login_status,
    user
  };
}

const connectedLogin = connect(mapStateToProps)(Login);
export default (connectedLogin);
