import styles from './Seletor.module.css'

function Seletor ({text, name, options, handleOnChange, value}) {
  return(
    <div className={styles.formulario_controle}>
    <label htmlFor={name}>{text}:</label>
    <select
      name={name}
      id={name}
      onChange={handleOnChange}
      value={value || ''}
    >
      <option>Selecione uma opção</option>
      {options.map((options) => (
        <option value={options.id} key={options.id}>
          {options.name}
        </option>
      ))}
    </select>
  </div>
)
}
export default Seletor