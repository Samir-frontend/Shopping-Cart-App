import "../styles/Hero.css";
import heroBg from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>
            Shop Smart.
            <br />
            Shop Better.
          </h1>

          <p>
            Discover premium products with the best quality,
            amazing prices and a modern shopping experience.
          </p>

          <a href="#products">
            <button>Explore Products</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;