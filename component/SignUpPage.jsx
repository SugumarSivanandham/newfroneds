import React from 'react';
import './SignUpPage.css';

class SignUpPage extends React.Component {
  render() {
    return (
      <div className="form1">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email id" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <input type="submit" value="Sign Up" />
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    );
  }
}

export default SignUpPage;
