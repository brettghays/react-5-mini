import { createStore } from "redux";

//import reducer
import counter from "./ducks/counter";

export default createStore( 
    counter,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);