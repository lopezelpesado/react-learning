export default function WarningBanner(props) {
    return props.warn ? <div className="warning">Warning!</div> : null;
}