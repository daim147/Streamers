import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchStream(this.props.match.params.id));
  }
  actions = () => (
    <React.Fragment>
      <button
        onClick={() =>
          this.props.dispatch(deleteStream(this.props.match.params.id))
        }
        className="ui button negative"
      >
        Delete
      </button>
      <Link to="/" className="ui button primary">
        Cancel
      </Link>
    </React.Fragment>
  );
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete the stream? ";
    }

    return `Are you sure you want to delete the stream with Title : ${this.props.stream.Title} `;
  }
  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.actions()}
          onDissmiss={() => history.push("/")}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

export default connect(mapStateToProps)(StreamDelete);
