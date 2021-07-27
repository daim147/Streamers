import React from "react";
import { connect } from "react-redux";
import { fetchStream, updateStream } from "../../actions";
import StreamForm from "./StreamForm";
import _ from "lodash";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchStream(this.props.match.params.id));
  }

  onSubmit = (formaValues) =>
    this.props.dispatch(updateStream(this.props.streams.id, formaValues));
  render() {
    if (!this.props.streams) return <h2>Loading</h2>;
    return (
      <div>
        <h2>Edit Stream</h2>
        <StreamForm
          initialValues={_.pick(this.props.streams, "Title", "Description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  streams: state.streams[ownProps.match.params.id],
});
export default connect(mapStateToProps)(StreamEdit);
