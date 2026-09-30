export default function Checkbox({action, checked}) {
    return (
        <input
            type="checkbox"
            onChange={action}
            checked={checked}
        />)
}