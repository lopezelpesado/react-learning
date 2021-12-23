import Clock from "./Clock";
import EssayForm from "./EssayForm";
import FlavourForm from "./FlavourForm";
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
    <FlavourForm />
    </>
  );
}

export default App;
