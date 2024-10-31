import { useLocation } from "react-router-dom";

export const useNavbarVisibility = () => {
  const location = useLocation();

  const isHomepage = location.pathname === "/";
  const isLoginPage = location.pathname === "/Login";
  const isSignupPage = location.pathname === "/Signup";
  const isSearch = location.pathname === '/SearchHome';
  const isWorkoutPage = location.pathname === '/Workout';
  // Determine the initial visibility based on the initial path
  const initialVisibility = isSignupPage ? "login" : "signup";
  
  return {
    isHomepage,
    isLoginPage,
    isSignupPage,
    isSearch,
    isWorkoutPage,
    initialVisibility,
  };
};