import intro from "../../../assets/images/vdio.mp4";
const IntroVideo = () => {
  return (
    <div>
      <video src={intro} autoPlay loop muted></video>
    </div>
  );
};

export default IntroVideo;
