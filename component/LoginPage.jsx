import React from 'react';
import './SignUpPage.css';

class LoginPage extends React.Component {

  render() {
    return (
      <div className="form1">
        <h1>Login</h1>
        <form>
          
          <input type="emailid" placeholder="Email id" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Login" />
        </form>
        <p className="Signup-link">
        Don't have an account? <a href="/Signup">SignUp</a>
        </p>
      </div>
    );
  }
}

export default LoginPage;
