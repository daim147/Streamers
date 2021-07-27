import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamLists extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderEditDeleteButton = (stream) => {
    if (this.props.currentUser === stream.userId) {
      return (
        <div className="right floated content">
          <Link to={`/stream/edit/${stream.id}`} className="ui primary button">
            Edit
          </Link>
          <Link
            to={`/stream/delete/${stream.id}`}
            className="ui negative button"
          >
            Delete
          </Link>
        </div>
      );
    }
  };
  renderList = () => {
    return this.props.streams.map((stream) => (
      <div className="item" key={stream.id}>
        {this.renderEditDeleteButton(stream)}
        <i className="large middle aligned icon camera"></i>
        <div className="content">
          <Link to={`/stream/display/${stream.id}`} className="header">
            {stream.Title}
          </Link>
          <div className="description">{stream.Description}</div>
        </div>
      </div>
    ));
  };
  renderCreateStreamButton = () => {
    if (this.props.isSigned) {
      return (
        <div
          style={{
            textAlign: "right",
            padding: "20px 0",
          }}
          className="ui"
        >
          <Link to="/stream/create" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  };
  render() {
    return (
      <div className="ui celled list">
        <h2>Streams List</h2>
        {this.renderList()}
        {this.renderCreateStreamButton()}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  streams: Object.values(state.streams),
  currentUser: state.auth.userId,
  isSigned: state.auth.isSigned,
});
export default connect(mapStateToProps, {
  fetchStreams,
})(StreamLists);
