import Styles from './Styles.module.css';

export default function Button({ text, action }) {
    return (
        <button
            class={styles.button}
            placeholder={text}
            onClick={action}
        />
    );
}