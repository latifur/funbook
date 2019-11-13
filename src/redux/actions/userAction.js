export const TRY_LOGIN = (userEmail, userPassword) => {
  return {
    type: "TRY_LOGIN",
    payload: {
      userEmail: userEmail,
      userPassword: userPassword
    }
  };
};

export const LOG_OUT = () => {
  return {
    type: "LOG_OUT"
  };
};
