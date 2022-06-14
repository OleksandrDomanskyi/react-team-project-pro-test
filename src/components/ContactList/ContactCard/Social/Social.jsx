import Icon from "../../../../shared/components/Icon";
import s from "./social.module.scss";

const Social = ({ social: { github, linkedin, mail } }) => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <a href={github} rel="noopener noreferrer" target="_blank">
          <Icon
            className={s.icon}
            name="icon-github"
            width="25"
            height="25"
            color={"#000"}
          />
        </a>
      </li>
      <li className={s.item}>
        <a href={linkedin} rel="noopener noreferrer" target="_blank">
          <Icon
            className={s.icon}
            name="icon-linkedin"
            width="25"
            height="25"
            color={"#000"}
          />
        </a>
      </li>
      <li className={s.item}>
        <a href={mail} rel="noopener noreferrer" target="_blank">
          <Icon
            className={s.icon}
            name="icon-mail"
            width="25"
            height="25"
            color={"#000"}
          />
        </a>
      </li>
    </ul>
  );
};

export default Social;
