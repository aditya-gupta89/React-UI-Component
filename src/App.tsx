import AppClass from "./app.module.scss";
import Card from "./components/card";
import Page from "./components/error/500";

function App() {
  return (
    <div className={AppClass.app}>
      <Page />
    </div>
  );
}

export default App;
