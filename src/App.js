import Clock from "./Clock";
import LoginControl from "./LoginControl";
import NumberList from "./NumberList";
import Toggle from "./Toggle";

function App() {
  return (
    <>
    <Clock />
    <Toggle />
    <LoginControl />
    <NumberList numbers={[1, 2, 3, 4, 5]} />
    </>
  );
}

export default App;
