import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValue) => this.props.createStream(formValue);

  render() {
    return (
      <div>
        <h2>Create Stream</h2>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, {
  createStream,
})(StreamCreate);
