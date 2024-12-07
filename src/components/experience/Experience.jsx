import './Experience.scss';
import ImpactLogo from '../../assets/ImpactAnalyticsLogo.jfif';
import Hitbullseye from '../../assets/HitbullseyeLogo.jfif';
import PrescientaiLogo from '../../assets/PrescientaiLogo.jfif';
import GDSCLogo from '../../assets/GDSCLOGO.png';

const ExperienceConstant = [
  {
    id: 1,
    companyName: 'Impact Analytics',
    role: 'Software Engineer',
    companyLogo: ImpactLogo,
    companyLink: '',
    startingYear: 'Aug-2024',
    endYear: 'current',
  },
  {
    id: 2,
    companyName: 'Prescientai',
    role: 'Software Engineer',
    companyLogo: PrescientaiLogo,
    companyLink: 'https://prescientai.in/',
    startingYear: 'Aug-2024',
    endYear: 'current',
  },
  {
    id: 3,
    companyName: 'Hitbullseye',
    role: 'Teaching Assistant',
    companyLogo: Hitbullseye,
    companyLink: 'https://www.hitbullseye.com/',
    startingYear: 'Aug-2024',
    endYear: 'current',
  },

  {
    id: 4,
    companyName: 'Google Developer Student Club',
    role: 'DSA Mentor',
    companyLogo: GDSCLogo,
    companyLink: '',
    startingYear: 'Aug-2024',
    endYear: 'current',
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="container experience-container"
      style={{ marginTop: '3rem' }}
    >
      <h2>Experience</h2>
      <div className="experience_container_ele_wrapper">
        {ExperienceConstant.map((experience) => (
          <div className="card" key={experience.id}>
            <div className="logo-container">
              <img
                src={experience.companyLogo}
                alt={`${experience.companyName} logo`}
                className="logo"
              />
            </div>
            <div className="details">
              <h3 className="company-name">{experience.companyName}</h3>
              <p className="role">{experience.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
