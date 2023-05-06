
import styles from './CardServico.module.css'

import { BsFillTrashFill } from 'react-icons/bs'

function CardServico({ id, name, cost, descricao, handleRemove }) {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id, cost)
  }

  return (
    <div className={styles.card_projeto}>
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R${cost}
      </p>
      <p>{descricao}</p>
      <div className={styles.card_projeto_acoes}>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  )
}

export default CardServico