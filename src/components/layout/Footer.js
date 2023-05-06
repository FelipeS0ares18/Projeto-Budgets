import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer () {
  return (
   <footer className={styles.footer}>
    <ul className={styles.lista_redes}>
      <li>
        <FaFacebook />
      </li>
      <li>
        <FaInstagram />
      </li>
      <li>
        <FaLinkedin />
      </li>
      <li>
        <FaGithub />
      </li>
    </ul>
    <p className={styles.copy}><span>Todos os direitos reservados</span> &copy; 2023</p>
   </footer>
  )
}

export default Footer
