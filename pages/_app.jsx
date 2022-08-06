import React from "react";
import { makeStore as store, prisistedStored, wrapper } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// Css files
import "styles/globals.scss";

import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Provider store={store()}>
        <PersistGate Loading={null} persistor={prisistedStored}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}

export default wrapper.withRedux(MyApp);
