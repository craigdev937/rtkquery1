import React from "react";
import "./App.css";
import { Main } from "../containers/Main";
import { Provider } from "react-redux";
import { RootReducer } from "../global/RootReducer";

export const App = (): JSX.Element => {
    return (
        <Provider store={RootReducer}>
            <React.Fragment>
                <Main />
            </React.Fragment>
        </Provider>
    );
};



// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { TodoAPI } from "../global/TodoAPI";

// export const App = (): JSX.Element => {
//     return (
//         <ApiProvider api={TodoAPI}>
//             <React.StrictMode>
//                 <Main />
//             </React.StrictMode>
//         </ApiProvider>
//     );
// };









