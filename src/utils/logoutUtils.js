import { logout } from "../features/user/userSlice"; // Import the logout action from your userSlice
// Import the logout action from your userSlice

export const handleLogout = (dispatch) => {
  const isConfirmed = window.confirm("Are you sure you want to logout?");
  if (isConfirmed) {
    // Dispatch the logout action
    dispatch(logout());
  }
};
