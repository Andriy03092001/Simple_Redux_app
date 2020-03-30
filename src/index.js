import { createStore } from "redux";

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS": {
      return state + 1;
    }

    case "MINUS": {
      return state - 1;
    }

    default:
      return state;
  }
}

const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
  document.getElementById("counter").innerHTML = store.getState();
})


var btn1 = document.getElementById("btnPlus");
var btn2 = document.getElementById("btnMinus");

btn1.addEventListener("click", () => {
  store.dispatch({ type: "PLUS" }); //Тут ми визвали дію PLUS
})

btn2.addEventListener("click", () => {
  store.dispatch({ type: "MINUS" }); //Тут ми визвали дію PLUS
})

// console.log(store.getState());
store.dispatch({ type: "PLUS" }); //Тут ми визвали дію PLUS
store.dispatch({ type: "PLUS" }); //Тут ми визвали дію PLUS
store.dispatch({ type: "PLUS" }); //Тут ми визвали дію PLUS
// console.log(store.getState());
store.dispatch({ type: "MINUS" });
// console.log(store.getState());
//npm install redux react-redux
