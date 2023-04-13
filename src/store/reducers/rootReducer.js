import { NEWS_ACTION } from "../actions/actionTypes"

export function baseUrl() {
  // return "http://localhost:3000"
  // return "https://whis-news-server.foxhub.space"
  return "https://whisnews.abdullah-alam.xyz"
}

export function newsReducer(state = [], action) {
  switch (action.type) {
    case NEWS_ACTION:
      return action.payload.data
    default:
      return state
  }
}
