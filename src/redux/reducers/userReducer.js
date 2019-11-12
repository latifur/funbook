import { UserInfo } from "../data/users";

const initialState = {
  user: UserInfo,
  loginStatus: false,
  CurrentUserEmail: "",
  CurrentUserName: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TRY_LOGIN": {
      const findUser = state.user.find(
        res => res.email == action.payload.userEmail
      );
      if (!findUser) {
        alert("Email Doesnot match to any Account");
      } else {
        if (findUser.phone == action.payload.userPassword) {
          state = {
            user: state.UserInfo,
            loginStatus: true,
            CurrentUserEmail: findUser.email,
            CurrentUserName: findUser.username
          };
        } else {
          alert("Password Does not match");
        }
      }

      return state;
    }
    default: {
      return state;
    }
  }
};
