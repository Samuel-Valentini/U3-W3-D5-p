import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import { persistedStore, store } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import Home from "./components/Home";

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistedStore}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
