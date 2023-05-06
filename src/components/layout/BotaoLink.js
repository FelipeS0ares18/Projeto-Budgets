import { Link } from 'react-router-dom';
import styles from './BotaoLink.module.css';

function BotaoLink ({to, text}) {
  return (
    <Link className={styles.botao} to={to}>
      {text}
    </Link>
  )
}

export default BotaoLink;

