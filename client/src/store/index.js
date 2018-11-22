import {createStore} from "redux";
import reducers from "../reducers";

const store = createStore(reducers);

export default store;

// function render() {
//   ReactDOM.render(
//     [...]
//   );
// }

// store.subscribe(render);