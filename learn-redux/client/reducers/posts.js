// A reducer takes in two things:

// 1. The action (info about what happened)
// 2. a copy of the current state

export default function posts(state = [], action) {
  console.log(state, action);
  return state;
}
