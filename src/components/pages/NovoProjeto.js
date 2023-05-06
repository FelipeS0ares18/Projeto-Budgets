import { useNavigate } from 'react-router'
import FormularioProjeto from '../Projeto/FormularioProjeto'

import styles from './NovoProjeto.module.css'

function NovoProjeto() { 

  const navigate = useNavigate()

  function createPost(project) {
 
     project.cost = 0
     project.servicies = []

     fetch('http://localhost:5000/projects', { 
     
     method: 'POST',
     headers: {
      'Content-Type': 'application/json',
     },
     body: JSON.stringify(project),
  })
  .then((resp) => resp.json())
  .then((data) => {
     console.log(data)
     navigate("/projects", {state: { mensagem: "Projeto criado com sucesso!" }});
  })
  .catch(err => console.log(err))

  }


    return(
      <div className={styles.novoprojeto_container}>
        <h1>Crie seu Projeto</h1>
        <p>Crie e adicione serviços e demandas ao seu projeto!</p>
        <FormularioProjeto handleSubmit={createPost} botaoText="Criar Projeto"/>
      </div>
    )
}

export default NovoProjeto
