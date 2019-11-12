import { Data } from "../data/photos";
const initialState = {
  Posts: [],
  lastLoadedPostNumber: 0
};

export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_MORE": {
      const showingPost = Data.slice(
        state.lastLoadedPostNumber,
        state.lastLoadedPostNumber + 5
      );

      const newState = {
        Posts: [...state.Posts, ...showingPost],
        lastLoadedPostNumber: state.lastLoadedPostNumber + 5
      };
      console.log("state has been updated");
      state = newState;
      return state;
    }
    case "LIKE": {
      const findPost = state.Posts.find(
        result => result.id == action.payload.id
      );
      console.log("from reducer", findPost);
      findPost.like = findPost.like + 1;
      state = {
        Posts: state.Posts,
        lastLoadedPostNumber: state.lastLoadedPostNumber
      };
      return state;
    }
    case "POST_COMMENT": {
      const findPost = state.Posts.find(
        result => result.id == action.payload.id
      );
      findPost.comment = [action.payload.text, ...findPost.comment];
      state = {
        Posts: state.Posts,
        lastLoadedPostNumber: state.lastLoadedPostNumber
      };

      console.log("from reducer", findPost);
      return state;
    }
    default: {
      const showingPost = Data.slice(state.lastLoadedPostNumber, 5);

      const newState = {
        Posts: showingPost,
        lastLoadedPostNumber: 5
      };
      state = newState;
      return state;
    }
  }
};
