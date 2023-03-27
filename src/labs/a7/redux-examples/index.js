import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import { configureStore } from '@reduxjs/toolkit';
import Todos from "./todos-component";import {Provider} from "react-redux";

const store = configureStore({
    reducer: {hello, todos}
});

// I don't understand why we need a Provider. The hello function is imported into
// the HelloReduxExampleComponent and that is rendered in this function,
// so what is the provider doing?

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;