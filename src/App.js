import Clock from "./Clock";
import Greeting from "./Greeting";
import Toggle from "./Toggle";

function App() {
  return (
    <>
    <Clock />
    <Toggle />
    <Greeting isLoggedIn={true} />
    </>
  );
}

export default App;
