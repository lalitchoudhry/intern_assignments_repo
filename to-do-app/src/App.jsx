// STATE
import authReducer from "./state";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// PAGES IMPORTS
import Home from "./pages/Home";

const store = configureStore({
  reducer: authReducer,
});

function App() {
  return (
    <Provider store={store}>
      <main className="w-full h-screen">
        <Home />
      </main>
    </Provider>
  );
}

export default App;
