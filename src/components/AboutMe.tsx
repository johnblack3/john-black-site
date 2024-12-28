import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="about-content">
        <div>
        <h2>John Black</h2>
        <div className="about-text">
          <p>
            Hello! My name is John Black. I'm a senior studying Computer Science at Penn State with
            a passion for building efficient software solutions.
          </p>
          <p>
            Outside of work, I enjoy weightlifting, nutrition, and continuous learning.
          </p>
        </div>
        </div>
        <img src="src/assets/Graduation Speech.png" alt="Graduation Speech" className="about-image" />
      </div>
    </section>
  );
};

export default AboutMe;
