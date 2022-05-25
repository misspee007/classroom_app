import "../stylesheets/home.css";
import heroImg from "../assets/education.svg";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-section-content">
          <h1>Learn on your class schedule</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            provident suscipit saepe. Inventore non voluptatem minus assumenda
            nihil ex maxime!
          </p>
        </div>
        <img src={heroImg} alt="girl with two books" className="hero-img" />
      </section>
    </>
  );
};

export default Home;
