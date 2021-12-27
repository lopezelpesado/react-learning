import Clock from "./Clock";
import EssayForm from "./EssayForm";
import FlavourForm from "./FlavourForm";
import LoginControl from "./LoginControl";
import NameForm from "./NameForm";
import NumberList from "./NumberList";
import Reservation from "./Reservation";
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
    <Reservation />
    </>
  );
}

export default App;
