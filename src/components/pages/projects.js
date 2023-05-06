import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Mensagem from '../layout/Mensagem';
import Container from '../layout/Container';
import BotaoLink from '../layout/BotaoLink';
import CardProjeto from '../Projeto/CardProjeto';
import Load from '../layout/Load'



import styles from './Projects.module.css'


function Projects() {
  const [projects, setProjects] = useState([])
  const [removeLoad, setRemoveLoad] = useState(false)


  const local = useLocation()
  let mensagem = ''
  if(local.state){
    mensagem = local.state.mensagem
  }

  useEffect(() => {

    setTimeout( () => {

      fetch('http://localhost:5000/projects',{

      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
  
      })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
       setProjects(data)
       setRemoveLoad(true)
  
      })
      .catch(err => console.log(err))
    }, 800)

  }, [])

  function removerProjeto(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(projects.filter((project) => project.id !== id))
        
      })
  }

  return(
    <div className={styles.projeto_container}>
      <div className={styles.titulo_container}>
      <h1>Meus projetos</h1>
      <BotaoLink to="/NovoProjeto" text="Crie seu novo projeto"/>
      </div>
      {mensagem && <Mensagem type="sucesso" msg={mensagem} />}
      <Container customClass="start">
        {projects.length > 0 &&
        projects.map((project) => (
           
          <CardProjeto 
          id={project.id}
          name={project.name}
          budget={project.budget}
          category={project.category.name}
          key={project.id}
          handleRemove={removerProjeto}
          />
        
        ))}
        {!removeLoad && <Load/>}
        {removeLoad && projects.length === 0 && <p>Não há projetos criados</p>}
      </Container>
    </div>
  )
}

export default Projects