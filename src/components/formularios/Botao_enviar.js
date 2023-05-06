import styles from './Botao_enviar.module.css'

function Botao_enviar ({ text }) {
    return(
      <div className={styles.formulario_controle}>
        <button className={styles.botao}>{text}</button>
      </div>
    )
}

export default Botao_enviar