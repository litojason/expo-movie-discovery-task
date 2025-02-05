import { Provider } from "react-redux";

import { store } from "../application/store/store";
import MainStack from "../presentation/navigation/MainStack";
import ThemeProvider from "../presentation/provider/ThemeProvider";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainStack />
      </ThemeProvider>
    </Provider>
  );
}
