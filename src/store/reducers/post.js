import { LOAD_POSTS, REMOVE_POST, ADD_POST, TOGGLE_BOOKED } from "../types"

const initialState = {
  allPosts: [],
  bookedPosts: [],
  loading: true
}

const bookedFilter = (arr) => {
  return arr.filter((i) => i.booked)
}

const postRemove = (arr, id) => {
  return arr.filter((p) => p.id !== id)
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: bookedFilter(action.payload),
        loading: false
      }

    case TOGGLE_BOOKED:
      const allPosts = state.allPosts.map((post) => {
        if (post.id === action.payload) post.booked = !post.booked
        return post
      })
      return {
        ...state,
        allPosts,
        bookedPosts: bookedFilter(allPosts)
      }

    case REMOVE_POST:
      return {
        ...state,
        allPosts: postRemove(state.allPosts, action.payload),
        bookedPosts: postRemove(state.bookedPosts, action.payload)
      }

    case ADD_POST:
      return {
        ...state,
        allPosts: [{ ...action.payload }, ...state.allPosts]
      }

    default:
      return state
  }
}
