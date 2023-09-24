import { useLocation } from "react-router-dom";

export const useNavbarVisibility = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/Login";
  const isSignupPage = location.pathname === "/Signup";

  // Determine the initial visibility based on the initial path
  const initialVisibility = isSignupPage ? "login" : "signup";

  return {
    isLoginPage,
    isSignupPage,
    initialVisibility,
  };
};