export const initialQuizState = {
  status: "idle",
  questions: [],
  currentQuestionIndex: 0,
  answers: {},
  timeLeft: 0,
  markedForReview: [],
};

export function quizReducer(state, action) {
  switch (action.type) {
    case "START_QUIZ":
      return {
        ...initialQuizState,
        questions: action.payload.questions,
        timeLeft: action.payload.timeLimit,
        status: "active",
      };
    case "ANSWER_QUESTION":
      return {
        ...state,
        answers: {
          ...state.answers,
          [state.currentQuestionIndex]: action.payload.answer,
        },
      };
    case "NEXT_QUESTION":
      if (state.currentQuestionIndex >= state.questions.length - 1) {
        return { ...state, status: "finished" };
      }
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case "PREV_QUESTION":
      if (state.currentQuestionIndex <= 0) {
        return state;
      }
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1,
      };

    case "JUMP_TO_QUESTION":
      return {
        ...state,
        currentQuestionIndex: action.payload.index,
      };

    case "TOGGLE_MARK_FOR_REVIEW":
      const questionIndex = state.currentQuestionIndex;
      const isMarked = state.markedForReview.includes(questionIndex);
      return {
        ...state,
        markedForReview: isMarked
          ? state.markedForReview.filter((i) => i !== questionIndex)
          : [...state.markedForReview, questionIndex],
      };

    case "TICK_TIMER":
      if (state.timeLeft <= 1) {
        return { ...state, timeLeft: 0, status: "finished" };
      }
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
      };
    case "SUBMIT_QUIZ":
      return {
        ...state,
        status: "finished",
      };
    default:
      throw new Error(`Aksi tidak dikenal: ${action.type}`);
  }
}
