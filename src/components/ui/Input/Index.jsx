import styles from './Styles.module.css';

export default function Input({ typeInput, placeholder, required }) {
  return (
    <input
      class={styles.input}
      placeholder={placeholder}
      type={typeInput}
      id="senha"
      required={required}
    />
  );
}
