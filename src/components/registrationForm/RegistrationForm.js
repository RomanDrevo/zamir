import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchItems, signUp} from "../../store/actions/registerActions";
import {withRouter} from "react-router-dom";


class RegistrationForm extends Component {

  state = {
    email: null,
    password: null,
    firstName: null,
    lastName: null,
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSignUp = (e) => {
    e.preventDefault();
    const {signUp} = this.props;
    const {email, password, firstName, lastName} = this.state;

    signUp({email, password, firstName, lastName})
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isRegisterSuccess) {
      props.history('/')
    }
    return null;
  }



  render() {
    const {} = this.props;
    return (
        <form>
          <input name="email" placeholder="email" type="email" onChange={this.handleChange} />
          <input name="password" placeholder="password" type="password" onChange={this.handleChange}  />
          <input name="firstName" placeholder="First Name" type="string" onChange={this.handleChange} />
          <input name="lastName" placeholder="Last Name" type="string" onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>Sign Up</button>
        </form>
    );
  }
}


function mapStateToProps(state) {
  return {
    isRegisterSuccess: state.currData.isRegisterSuccess,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: data => dispatch(signUp(data))
  };
}


export default withRouter(connect(null, mapDispatchToProps)(RegistrationForm));
