import styles from './Home.module.css'
import predio from '../../img/predio.png'
import BotaoLink from '../layout/BotaoLink'

 

function Home() {
    return(
        <section className={styles.home_container}>
            <h1>Seja bem vindo ao <span>Budgets</span></h1>
            <h2>Soluções em construção civil!</h2>
           <BotaoLink to="/NovoProjeto" text="Crie seu novo projeto"/>
            <img src={predio} alt="Predio" width={500} height={700}/>
            
            

        </section>
    )
}

export default Home