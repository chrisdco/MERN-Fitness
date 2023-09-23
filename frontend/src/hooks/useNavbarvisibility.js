import { useLocation } from "react-router-dom";

export const useNavbarVisibility = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/Login";
  const isSignupPage = location.pathname === "/Signup";

  return {
    isLoginPage,
    isSignupPage,
  };
};
