export default function NumberList(props) {
    const numbers = props.numbers;
    return numbers.map(number => <li key={number.toString()}>{number}</li>);
}