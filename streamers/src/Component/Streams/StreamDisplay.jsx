import React from "react";
import FlvJs from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }
  componentWillUnmount() {
    this.flvPlayer.destroy();
  }

  buildPlayer() {
    if (!this.props.stream) {
      return;
    }
    const { id } = this.props.match.params;
    this.flvPlayer = FlvJs.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <video ref={this.videoRef} controls style={{ width: "100%" }}></video>
        <h1>{this.props.stream.Title}</h1>
        <h3>{this.props.stream.Description}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

export default connect(mapStateToProps, {
  fetchStream,
})(StreamDisplay);
