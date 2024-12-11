import { Provider } from "react-redux"
import Body from "./components/Body"
import  appStore from "./utils/appStore";
import Header from "./components/Header"
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
        <Body />
      </BrowserRouter>
    </Provider>
  );

}

export default App;
