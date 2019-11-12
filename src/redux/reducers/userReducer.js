import { UserInfo } from "../data/users";

const initialState = {
  user: UserInfo,
  loginStatus: false,
  CurrentUserEmail: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TRY_LOGIN": {
      const findUser = state.user.find(
        res => res.email == action.payload.userEmail
      );
      if (findUser.phone == action.payload.userPassword) console.log(findUser);
      return state;
    }
    default: {
      return state;
    }
  }
};
