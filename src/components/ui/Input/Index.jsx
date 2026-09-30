import styles from './Styles.module.css';

export default function Input({ typeInput, placeholder, required, onChange, value }) {
  return (
    <input
      class={styles.input}
      placeholder={placeholder}
      type={typeInput}
      id="senha"
      required={required}
      onChange={onChange}
      value={value}
    />
  );
}
