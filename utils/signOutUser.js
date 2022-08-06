const signOutUser = () => {
  return localStorage.setItem({ token: "" });
};

export default signOutUser;
