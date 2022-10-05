import "./Wakatime.scss";

const Wakatime = () => {
  return (
    <div className="wakatime">
      <div className="wakatime__divider">
        <h2 className="wakatime__code-activity">Wakatime Coding Activity</h2>
        <p className="wakatime__code-heading">Wakatime for the last years</p>
        <figure className="wakatime__activity-fig">
          <embed
            className="wakatime__activity-em"
            src="https://wakatime.com/share/@6b62278f-1f06-4dce-90a0-e447c9e59880/0deb259b-5513-41e6-b392-062f4eb2309f.svg"
          ></embed>
        </figure>
      </div>
      <div className="wakatime__divider">
        <p className="wakatime__code-heading">
          Wakatime code languages for the last 30 days
        </p>
        <figure className="wakatime__languages">
          <embed
            className="wakatime__languages-em"
            src="https://wakatime.com/share/@6b62278f-1f06-4dce-90a0-e447c9e59880/799e7616-c258-4ed2-995b-d0bbf6248ff5.svg"
          ></embed>
        </figure>
      </div>
    </div>
  );
};

export default Wakatime;
