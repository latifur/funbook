import { UserInfo } from "../data/users";

const initialState = {
  user: UserInfo,
  loginStatus: false,
  currentUser: [],
  CurrentUserEmail: "latifursizar@gmail.com",
  CurrentUserName: "Latifur"
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TRY_LOGIN": {
      const findUser = state.user.find(
        res => res.email == action.payload.userEmail
      );
      if (!findUser) {
        alert("Email Doesnot match to any Account", findUser);
      } else {
        if (findUser.phone == action.payload.userPassword) {
          console.log("this is findUser", findUser);
          state = {
            user: state.user,
            loginStatus: true,
            currentUser: [findUser],
            CurrentUserEmail: findUser.email,
            CurrentUserName: findUser.username
          };
        } else {
          alert("Password Does not match");
        }
      }

      return state;
    }
    case "LOG_OUT": {
      state = {
        user: state.user,
        loginStatus: false,
        currentUser: [],
        CurrentUserEmail: "latifursizar@gmail.com",
        CurrentUserName: "Latifur"
      };
      return state;
    }
    default: {
      if (state.loginStatus) {
        const findCurrentUser = state.user.filter(
          res => res.email == state.CurrentUserEmail
        );
        state.currentUser = findCurrentUser;
      }
      state = state;
      console.log(state.currentUser);
      return state;
    }
  }
};
