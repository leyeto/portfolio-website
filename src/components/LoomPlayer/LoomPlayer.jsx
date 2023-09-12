import Video from "../../assets/videos/eRedBookLoomDemoVideo.mp4";
import ReactPlayer from "react-player";
import "./LoomPlayer.scss";

const LoomPlayer = () => {
  return (
    <div className="loom-player">
      <h2>Main Project</h2>
      <ReactPlayer url={Video} controls={true} volume={0} />
    </div>
  );
};

export default LoomPlayer;
