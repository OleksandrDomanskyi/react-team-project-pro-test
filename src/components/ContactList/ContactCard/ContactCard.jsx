import s from "./contactCard.module.scss";
import PropTypes from "prop-types";

const ContactCard = ({ img, name, role }) => {
  return (
    <div>
      <img className="" src={img} alt="" width="" height="" />
      <h2>{name}</h2>
      <h3>{role}</h3>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default ContactCard;
