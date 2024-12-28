import './Skills.css';

const Skills = () => {
  const skillsdata = [
    {
      image: '',
      title: 'Python',
      description: 'I have experience with Python in many applications',
      link: ''
    },
    {
      title: 'JavaScript',
      description: 'I have experience with JavaScript in many applications',
    },
    {
      title: 'Java',
      description: 'I have experience with Java in many applications',
    },
    {
      title: 'C',
      description: 'I have experience with C in many applications',
    },
    {
      title: 'HTL/CSS',
      description: 'I have experience with Python in many applications',
    },
    {
      title: 'SQL',
      description: 'I have experience with JavaScript in many applications',
    },
    {
      title: 'Flutter',
      description: 'I have experience with Java in many applications',
    },
    {
      title: 'Agile',
      description: 'I have experience with C in many applications',
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsdata.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-info">
              <h3>{skill.title}</h3>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
