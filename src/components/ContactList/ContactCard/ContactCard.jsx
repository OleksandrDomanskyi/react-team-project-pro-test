import PropTypes from "prop-types";

import s from "./contactCard.module.scss";
import Social from "./Social/Social";
import defaultIMG from "../../../images/team/default.jpg";

const ContactCard = ({ img = defaultIMG, name, role, social }) => {
  return (
    <div className={s.item}>
      <img className={s.image} src={img} alt="" width="280" height="280" />
      <ul className={s.list}>
        <li className={s.name}>{name}</li>
        <li className={s.role}>{role}</li>
        <li className={s.social}>
          <Social social={social} />
        </li>
      </ul>
    </div>
  );
};

export default ContactCard;

ContactCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  social: PropTypes.shape({
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
  }),
};
