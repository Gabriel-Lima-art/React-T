export default function Checkbox({action, texto}) {
    return (
        <input
            type="checkbox"
            onClick={action}
            placeholder={texto}
        />)
}