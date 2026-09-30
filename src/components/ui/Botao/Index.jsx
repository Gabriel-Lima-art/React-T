import styles from './Styles.module.css'; // <- Certifique-se de incluir esta linha!
export default function Button({ text, action, }) {
    return (
        <button
            className={styles.button}
            onClick={action}
            type={'submit'}
        >
            {text}
        </button>
    );
}