import { parse, v4 as uuidv4 } from 'uuid'

import styles from './Projeto.module.css'

import { useParams } from 'react-router'
import { useState, useEffect } from 'react'

import Load from '../layout/Load'
import Container from '../layout/Container'
import FormularioProjeto from '../Projeto/FormularioProjeto'
import Mensagem from '../layout/Mensagem'
import FormularioServico from '../../serviços/FormularioServico'
import CardServico from '../serviços/CardServico'

function Projeto() {

     const {id} = useParams()
     
     const [projeto, setProjeto] = useState([])
     const [MostrarProjeto, setMostrarProjeto] = useState(false)
     const [MostrarServico, setMostrarServico] = useState(false)
     const [servicies, setServicies] = useState([])
     const [menssagem, setMensagem] = useState()
     const [type, setType] = useState()

     useEffect(() => {

       setTimeout(() => {
        fetch(`http://localhost:5000/projects/${id}`, {

       method: 'GET',
       headers: {
        'content-Type': 'application/json',

       },
       }).then((resp) => resp.json())
        .then ((data) => {
           setProjeto(data)
           setServicies(data.servicies)
        })
      
       .catch(err => console.log(err))
       }, 900)
       
     }, [id])

     
     function editar(projeto) {
        if(projeto.budget < projeto.cost) {
          setMensagem('O orçamento deve ser maior que os custos')
          setType('erro')
          return false
        }

        
         fetch(`http://localhost:5000/projects/${id}`,{
          method: 'PATCH',
          headers:{
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(projeto),
         })
         .then(resp => resp.json())
          .then((data) =>  {

            setProjeto(data)
            setMostrarProjeto(false)
            setMensagem('Projeto Atualizado!')
            setType('sucesso')

          })
          .catch(err => console.log(err))
          setMensagem()
     }

    function criarServico(projeto){
      setMensagem('')
      
       const ultimoServico = projeto.servicies[projeto.servicies.length - 1]
        ultimoServico.id = uuidv4()

        const ultimoServicoCost = ultimoServico.cost

        const novoCost = parseFloat(projeto.cost) + parseFloat(ultimoServicoCost)

        if(novoCost > parseFloat(projeto.budget)) {
          setMensagem('Orçamento maximo atingido, por favor verifique o valor do serviço atual.')
          setType('erro')
          projeto.servicies.pop()
          return false
          
        }

        //adicionar ao custo total
        projeto.cost = novoCost

        fetch(`http://localhost:5000/projects/${projeto.id}`,{
         method: 'PUT', 
         headers: {'Content-Type': 'application/json',
      },
         body: JSON.stringify(projeto)

        }).
        then((resp) => resp.json())
        .then((data) => { setServicies(data.servicies)
        })
        .catch(err => console.log(err))


    }

    function removeService(id, cost) {
      const servicesUpdated = projeto.servicies.filter(
        (service) => service.id !== id,
      )
  
      const projectUpdated = projeto
  
      projectUpdated.servicies = servicesUpdated
      projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)
  
      fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectUpdated),
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjeto(projectUpdated)
          setServicies(servicesUpdated)
          setMensagem('Serviço removido com sucesso!')
        })
    }


     function toggleFormularioProjeto () {
      setMostrarProjeto(!MostrarProjeto)
    }


     function toggleservicoProjeto () {
       setMostrarServico(!MostrarServico)
     }

     

     return (
      <div className={styles.detalhes_projeto}>
        {projeto.name ?
        <Container customClass="column">
          {menssagem && <Mensagem type={type} msg={menssagem}/>} 
         <div className={styles.detalhes_projeto2}>
          <h1>Projeto: {projeto.name}</h1>
          <button className={styles.botao} onClick={toggleFormularioProjeto}>
          {!MostrarProjeto ? 'Editar' : 'Fechar'}
           </button>
           {!MostrarProjeto ? (
            <div className={styles.informacao}>
              <p>
                <span>Categoria: </span> {projeto.category.name}
              </p>
              <p>
                <span>Orçamento: </span> R${projeto.budget}
              </p>
              <p>
                <span>Orçamento utilizado: </span> R${projeto.cost}
              </p>
              </div>
           ) : (
            <div className={styles.informacao}>
              <FormularioProjeto 
              handleSubmit={editar} 
              botaoText="Finalizar edição" 
              projetoData={projeto} 
              />
              </div>
           )}

         </div>
         <div className={styles.detalhes_projeto2_servico_container}>
            <h2>Crie ou adicione um serviço:</h2>
            <button className={styles.botao} onClick={toggleservicoProjeto}>
          {!MostrarServico ? 'Adicionar serviço' : 'Fechar'}
           </button>
           <div className={styles.informacao}>
            {MostrarServico && 
              <FormularioServico
                 handleSubmit={criarServico}
                 botaoText="Adicionar serviço"
                 projetoData={projeto}
              />
            }
           </div>
         </div>
         <h2>Serviços:</h2>
         <Container customClass="start">
              {servicies.length > 0 &&
                servicies.map((servico) => (
                  <CardServico
                    id={servico.id}
                    name={servico.name}
                    cost={servico.cost}
                    descricao={servico.descricao}
                    key={servico.id}
                    handleRemove={removeService}
                  />
                ))}
           {servicies.length === 0 && <p>Não há serviços registrados.</p>}
         </Container>
         </Container>
         : <Load />}
      </div>
    );
}

export default Projeto