// increment likes
// Action creator
export function increment(index) {
  //Action
  return {
    type: "INCREMENT_LIKES",
    index,
  };
}
// add comment
export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment,
  };
}

// remove comment

export function removeComment(postId, index) {
  return {
    type: "REMOVE_COMMENT",
    postId,
    index,
  };
}
