import s from "./social.module.scss";
import Linkedin from "./SocialLogo/Linkedin";
import Mail from "./SocialLogo/Mail";
import Github from "./SocialLogo/Github";

const Social = ({ social: { github, linkedin, mail } }) => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <a href={github} rel="noopener noreferrer" target="_blank">
          <Github className={s.icon} width="25" height="25" fill="black" />
        </a>
      </li>
      <li className={s.item}>
        <a href={linkedin} rel="noopener noreferrer" target="_blank">
          <Linkedin className={s.icon} width="25" height="25" fill="black" />
        </a>
      </li>
      <li className={s.item}>
        <a href={mail} rel="noopener noreferrer" target="_blank">
          <Mail className={s.icon} width="25" height="25" fill="black" />
        </a>
      </li>
    </ul>
  );
};

export default Social;
