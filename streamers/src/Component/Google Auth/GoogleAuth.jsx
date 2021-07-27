import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";

export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "404024286812-btbs6j3tmedsst5u3aumusnpisodo4f7.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          console.log("I AM BEIGN CALLLED");

          this.change(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.change); //?listen will be call whenever th isSignedIn will change but not first bcz first time when component will mount run auth is set and isSigned is in auth object but after being set when ever isSigned will change the listen will render the change funtion (and automatically pass auth.isSigned value  )
        });
    });
  }

  change = (isSigned) => {
    console.log(isSigned, "HEllO BEING RENDERES");
    if (isSigned) this.props.signIn(this.auth.currentUser.get().getId());
    if (!isSigned) this.props.signOut();
  };

  renderStates() {
    if (this.props.isSigned === null) {
      return;
    } else if (this.props.isSigned) {
      return (
        <button onClick={this.auth.signOut} className="ui red google button">
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.auth.signIn} className="ui blue google button">
          <i className="google icon"></i>
          Sign In with Google
        </button>
      );
    }
  }
  render() {
    // console.log(this.state.isSigned, this.auth);
    return <div>{this.renderStates()}</div>;
  }
}
const mapStateToProps = (state) => ({
  isSigned: state.auth.isSigned,
});
export default connect(mapStateToProps, {
  signIn,
  signOut,
})(GoogleAuth);
