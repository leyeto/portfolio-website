import Video from "../../assets/videos/eRedBookLoomDemoVideo.mp4";
import ReactPlayer from "react-player";
import "./LoomPlayer.scss";

const LoomPlayer = () => {
  return (
    <div className="loom-player">
      <ReactPlayer url={Video} controls={true} />
    </div>
  );
};

export default LoomPlayer;
