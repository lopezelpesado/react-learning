import Calculator from "./Calculator";
import Clock from "./Clock";
import EssayForm from "./EssayForm";
import FilterableProductTable from "./FilterableProductTable";
import FlavourForm from "./FlavourForm";
import Game from "./Game";
import LoginControl from "./LoginControl";
import NameForm from "./NameForm";
import NumberList from "./NumberList";
import PRODUCTS from "./PRODUCTS";
import Reservation from "./Reservation";
import SignUpDialog from "./SignUpDialog";
import Toggle from "./Toggle";
import WelcomeDialog from "./WelcomeDialog";

function App() {
  return (
    <>
    <Game />
    <Clock />
    <Toggle />
    <LoginControl />
    <NumberList numbers={[1, 2, 3, 4, 5]} />
    <NameForm />
    <EssayForm />
    <FlavourForm />
    <Reservation />
    <Calculator />
    <WelcomeDialog />
    <SignUpDialog />
    <FilterableProductTable products={PRODUCTS} />
    </>
  );
}

export default App;
