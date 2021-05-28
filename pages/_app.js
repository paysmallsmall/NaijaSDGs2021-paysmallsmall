import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import LayoutWrapper from "../layouts/LayoutWrapper";
import { wrapper } from "../store/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <PersistGate
      persistor={
        // @ts-ignore
        store.__persistor
      }
      loading={<div>Loading</div>}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
