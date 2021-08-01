// import CookiesServer from "cookies";
import Cookies from "js-cookie";
// import CookiesServer from "next-cookies";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import {
  // persistReducer,
  persistCombineReducers,
  persistStore,
} from "redux-persist";
import { CookieStorage } from "redux-persist-cookie-storage";
import rootReducer, { rootReducerCombined } from "./reducers";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// create a makeStore function
const makeStore = (context) => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return createStore(rootReducerCombined, bindMiddleware([]));
    // const { req } = context;
    // const cookieJar = new NodeCookiesWrapper(new CookiesServer(req));

    // const persistConfig = {
    //   key: "pinch",
    //   storage: new CookieStorage(cookieJar /*, options */),
    //   stateReconciler(inboundState, originalState) {
    //     // Ignore state from cookies, only use preloadedState from window object
    //     return originalState;
    //   },
    // };

    // let preloadedState;
    // const getState = async () => {
    //   try {
    //     preloadedState = await getStoredState(persistConfig);
    //     console.log("preloadedState", preloadedState);
    //   } catch (error) {
    //     preloadedState = {};
    //   }
    // };
    // getState();

    // const persistedReducer = persistCombineReducers(persistConfig, rootReducer);
    // return createStore(persistedReducer, preloadedState);
  } else {
    const persistConfig = {
      key: "pinch",
      storage: new CookieStorage(Cookies /*, options */),
      whitelist: ["auth", "cart"],
    };
    const persistedReducer = persistCombineReducers(persistConfig, rootReducer);

    const store = createStore(persistedReducer, bindMiddleware([]));

    store.__persistor = persistStore(store, {});

    return store;
  }
};

const reducersds = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.auth) nextState.auth = state.auth; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

// export an assembled wrapper
export const wrapper = createWrapper(makeStore);
