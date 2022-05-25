import "../stylesheets/home.css";
import heroImg from "../assets/education.svg";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-section-content">
          <h1>Learn on your class schedule</h1>
          <p>
            Learn at your own pace. No more cramming for a test.  No more wasting time on homework. 
          </p>
        </div>
        <img src={heroImg} alt="girl with two books" className="hero-img" />
      </section>
    </>
  );
};

export default Home;
