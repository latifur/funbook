export const LOAD_MORE = Response => {
  return {
    type: "LOAD_MORE"
  };
};

export const LIKE = res => {
  return {
    type: "LIKE",
    payload: {
      id: res
    }
  };
};

export const POST_COMMENT = (id, text) => {
  return {
    type: "POST_COMMENT",
    payload: {
      id: id,
      text: text
    }
  };
};
