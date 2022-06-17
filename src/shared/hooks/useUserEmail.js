import { useSelector, shallowEqual } from "react-redux";

import { isUserEmail } from "../../redux/auth/auth-selectors";

const useEmail = () => {
  const isEmail = useSelector(isUserEmail, shallowEqual);

  return isEmail;
};

export default useEmail;
