import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import createHistory from "history/createBrowserHistory";
/* eslint-disable import/no-named-as-default */
import App from "./App";
import configureStore from "./store";

const basename = process.env.REACT_APP_ROUTER_BASENAME || "";
const history = createHistory({ basename });

const store = configureStore({}, history);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <IntlProvider locale="en">
    <Provider store={store}>
      <App history={history} />
    </Provider>
  </IntlProvider>,
  rootElement
);

if (module.hot) {
  module.hot.accept("./App", () => {
    // eslint-disable-next-line global-require
    const NextApp = require("./App").default;
    ReactDOM.render(
      <IntlProvider locale="en">
        <Provider store={store}>
          <NextApp history={history} />
        </Provider>
      </IntlProvider>,
      rootElement
    );
  });
}
