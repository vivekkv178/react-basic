import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/index";
import routes from "./routes/routes";
import AppRoute from "./hoc/AppRoute";
import "./App.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            {routes.map((route, i) => (
              <AppRoute key={i} {...route} component={route.component} />
            ))}
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
