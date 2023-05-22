import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import themeSlice from "../theme/themeSlice";
import countSlice from "./slices/countSlice";
const store = configureStore({
  reducer: { appTheme: themeSlice, count: countSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const ReduxProvider = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export { ReduxProvider };
