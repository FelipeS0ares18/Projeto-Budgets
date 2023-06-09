import { Link } from "react-router-dom"

import Container from "./Container"

import styles from './NavBar.module.css'
import logo from '../../img/logo.svg'

function NavBar () {
    return (
        <nav className={styles.navbar}>
    <Container>
    <Link to=''>
        <img src={logo} alt="moeda Brasileira" width={60} height={60}/>
    </Link>
    <ul className={styles.lista}>
        <li className={styles.item}>
        <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
        <Link to="/projects">Projetos</Link>
        </li>
        <li className={styles.item}>
    <Link to="/Contato">Contato</Link>
        </li> 
        <li className={styles.item}>
    <Link to="/Sobre">Sobre</Link>
        </li> 
    </ul>
    </Container>
    </nav>
    )
}

export default NavBar