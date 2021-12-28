import FancyBorder from "./FancyBorder";
import './WelcomeDialog.css';

export default function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome!
            </h1>
            <p className="Dialog-message">
                Thanks for visiting our spacecraft!
            </p>
        </FancyBorder>
    )
}