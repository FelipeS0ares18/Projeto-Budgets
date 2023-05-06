import styles from './Load.module.css'
import loading from '../../img/loading.svg'

function Load () {
    return(
       <div className={styles.load_container}>
        <img className={styles.loader} src={loading} alt='Carregando'/>
       </div>
    )
}

export default Load