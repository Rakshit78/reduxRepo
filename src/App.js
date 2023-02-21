import "./styles.css";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCard } from "../actions/cardAction";
function App({ card, deleteCard }) {
  // console.log(card);
  // const deleteName = useDispatch();
  const handleClick = (name) => {
    console.log(name);
    // deleteName({ type: "delete", name: name });
    deleteCard(name);
  };
  return (
    <div className="App">
      {card.map((res) => {
        // console.log(res);
        return (
          <h1 key={res.name} onClick={() => handleClick(res.name)}>
            {res.name}
          </h1>
        );
      })}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
const mapStateToProps = (state) => {
  // console.log(state.card);
  return {
    card: state.cards
  };
};
const matStateToDispatch = (dispatch) => {
  return {
    deleteCard: (name) => dispatch(deleteCard(name))
  };
};
export default connect(mapStateToProps, matStateToDispatch)(App);
