import { Link } from 'react-router-dom'

import styles from './CardProjeto.module.css'

import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

function CardProjeto ({id, name, budget, category, handleRemove}) {
  
    const remover = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
     

    return(
       <div className={styles.card_projeto}>
        <h4>{name}</h4>
        <p>
            <span>Orçamento:</span> R${budget}
        </p>
        <p className={styles.category_text}>
            <span className={`${styles[category.toLowerCase()]}`}></span> {category}
        </p>
        <div className={styles.card_projeto_acoes}> 
            <Link to={`/projeto/${id}`}>
              <BsPencil /> Editar
            </Link>
           <button onClick={remover}>
            <BsFillTrashFill/> Excluir
           </button>
        </div>
       </div>
    )
}

export default CardProjeto