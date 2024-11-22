import "./Hero.css";
import HeroImg from "../../assets/headphone.svg";
function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousand podcast episodes</h1>
      </div>
      <div className="hero-Img">
        <img src={HeroImg} className="hero-logo" alt="heroImg" />
      </div>
    </div>
  );
}

export default Hero;
