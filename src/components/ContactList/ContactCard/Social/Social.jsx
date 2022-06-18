import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";

import s from "./social.module.scss";
import Linkedin from "./SocialLogo/Linkedin";
import Mail from "./SocialLogo/Mail";
import Github from "./SocialLogo/Github";
import Copy from "./SocialLogo/Copy";

const Social = ({ social: { github, linkedin, mail } }) => {
  const notify = () => toast("Email copied to clipboard.");

  return (
    <>
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
          <a href={`mailto:${mail}`} rel="noopener noreferrer" target="_blank">
            <Mail className={s.icon} width="25" height="25" fill="black" />
          </a>
        </li>
        <li className={s.item}>
          <CopyToClipboard text={mail}>
            <div className="copy-area">
              <button className={s.button} type="button" onClick={notify}>
                <Copy className={s.icon} width="25" height="25" fill="black" />
              </button>
            </div>
          </CopyToClipboard>
        </li>
      </ul>
    </>
  );
};

export default Social;
