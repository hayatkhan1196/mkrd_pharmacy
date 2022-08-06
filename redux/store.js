import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./index";
import { watcherSaga } from "./sagas/rootSaga";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const config = { key: "main-root", storage };
const persistedReducer = persistReducer(config, rootReducer);
let prisistedStored;
export const makeStore = (context) => {
  // Create the middleware
  const sagaMiddleware = createSagaMiddleware();
  // create store with middleware:
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  // Run sagas on server
  store.sagaTask = sagaMiddleware.run(watcherSaga);
  const persistStored = persistStore(store);
  prisistedStored = persistStored;

  // return the store:
  return store;
};

export { prisistedStored };
export const wrapper = createWrapper(makeStore, { debug: true });
