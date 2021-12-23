import Clock from "./Clock";
import EssayForm from "./EssayForm";
import LoginControl from "./LoginControl";
import NameForm from "./NameForm";
import NumberList from "./NumberList";
import Toggle from "./Toggle";

function App() {
  return (
    <>
    <Clock />
    <Toggle />
    <LoginControl />
    <NumberList numbers={[1, 2, 3, 4, 5]} />
    <NameForm />
    <EssayForm />
    </>
  );
}

export default App;
