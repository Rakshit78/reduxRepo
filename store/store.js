import { createStore } from "redux";
const intialstate = {
  cards: [{ name: "rakshit" }, { name: "bhanu" }, { name: "singh" }]
};
const reducer = (state = intialstate, action) => {
  console.log(
    action.name,
    state.cards.filter((res) => res.name !== action.name)
  );
  if (action.type === "delete") {
    const filteredCard = state.cards.filter((res) => res.name !== action.name);
    return { ...state, cards: filteredCard };
  }
  return state;
};
export const store = createStore(reducer);
