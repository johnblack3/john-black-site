import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      image: 'src/assets/safewalk-psu-project.jpg',
      title: 'Safe Walk',
      description: 'App that expands the existing Penn State Safe Walk Service by streamlining companion requests, providing live GPS tracking, and integrating user profiles with certifications. Developed for HackPSU using React, Node.js, and the Google Map API.',
      link: 'https://github.com/johnblack3/safewalk-hackpsu-sp23'
    },
    {
      image: 'src/assets/conversate-project.PNG',
      title: 'Conversate',
      description: 'Google Chrome extension that uses a Microsoft Azure AI/NLP API (TextAnalyticsClient) to improve information accessibility by summarizing websites and providing analysis of dialects. Built using Azure, Python, Javascript, HTML, and CSS.',
      link: 'https://github.com/johnblack3/conversate'
    },
    {
      image: 'src/assets/videobot-project.png',
      title: 'VideoBot',
      description: 'Python script that generates custom videos with captions and voiceovers via REST APIs, achieving millions of online views.',
      link: 'https://github.com/johnblack3/videobot'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project" key={index}>
            {/* Left Side: Image */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-image" />
            </a>
            {/* Right Side: Title, Description, and Link */}
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
