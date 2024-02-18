const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === "user/updateName") {
    // Save the username to local storage
    localStorage.setItem("username", store.getState().user.username);
  }

  return result;
};

export default localStorageMiddleware;
