import { forumThreads as initialThreads } from "@/Data/Dummy";

export const initialForumState = {
  threads: initialThreads,
  searchTerm: "",
  sortBy: "terbaru",
};

export function forumReducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "ADD_THREAD":
      return {
        ...state,
        threads: [action.payload, ...state.threads],
      };
    default:
      throw new Error(`Aksi tidak dikenal: ${action.type}`);
  }
}
