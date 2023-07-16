import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";
import Video from "../../assets/videos/eRedBookLoomDemoVideo.mp4";

import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster,
} from "@vidstack/react";

const LoomPlayer = () => {
  return (
    <>
      <MediaPlayer
        title="Sprite Fight"
        src={Video}
        poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=980"
        thumbnails="https://media-files.vidstack.io/sprite-fight/thumbnails.vtt"
        aspectRatio={16 / 9}
        crossorigin=""
      >
        <MediaOutlet>
          <MediaPoster alt="Girl walks into sprite gnomes around her friend on a campfire in danger!" />
          <track
            src="https://media-files.vidstack.io/sprite-fight/subs/english.vtt"
            label="English"
            srcLang="en-US"
            kind="subtitles"
            default
          />
          <track
            src="https://media-files.vidstack.io/sprite-fight/chapters.vtt"
            srcLang="en-US"
            kind="chapters"
            default
          />
        </MediaOutlet>
        <MediaCommunitySkin />
      </MediaPlayer>
    </>
  );
};

export default LoomPlayer;
