import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Rajat Petkar </span>
        from <span className={s.purple}> Deoli, Maharastra.</span>
        <br />
        Software engineer with expertise in cross-platform development{' '}
        <br />
        using React.
        <br />
        <br />
        Currently I am persuiving Dipoma in Information Technology
        <br />
        From Goverment Polytechnic Nagpur
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
