import { useState, useEffect } from 'react'

import styles from './Mensagem.module.css'

function Mensagem ({ type, msg }) {

   const [visivel, setVisibilidade] = useState(false)

   useEffect(() => {
 
    if(!msg) {
        setVisibilidade(false)
        return
    }

    setVisibilidade(true)

    const timer = setTimeout(() => {
      
       setVisibilidade(false)

    }, 4000)

    return () => clearTimeout(timer)

   }, [msg])

  return (<>
    {visivel && (
      <div className={`${styles.menssagem} ${styles[type]}`}>{msg}</div>
    )}
  </>
  )
    
  
}

export default Mensagem
