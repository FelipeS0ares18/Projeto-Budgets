import { useEffect, useState } from 'react'

import Botao_enviar from '../formularios/Botao_enviar'
import Input from '../formularios/Input'
import Seletor from '../formularios/Seletor'

import styles from './FormularioProjeto.module.css'

function FormularioProjeto ({handleSubmit, botaoText, projectData}) {

     
     const [project, setProject] = useState(projectData || {})
     const [categories, setCategories] = useState ([])

     useEffect (() => {

      fetch('http://localhost:5000/categories', {
         method: 'GET',
         headers: {
           'Content-Type': 'application/json',
        },
   
        })
        .then((resp) => resp.json())
        .then((data) => {
           setCategories(data)
        })
        .catch((err) => console.log(err))
      
     }, [])

     const submit = (e) => {
      e.preventDefault()
      handleSubmit(project)
    }
    function handleChange(e) {
      setProject({ ...project, [e.target.name]: e.target.value })
    }
     
     function handleCategory(e) {
      setProject({
        ...project,
        category: {
          id: e.target.value,
          name: e.target.options[e.target.selectedIndex].text,
        },
      })
    }

    

    return (
       <form onSubmit={submit} className={styles.form}>
        <Input type="text"
         text="Nome do Projeto"
          name="name"
           placeholder="Diga o nome do seu projeto"
           handleOnchange={handleChange}
           value={project.name ? project.name : ''}
           />

        <Input 
        type="number"
         text="Orçamento"
          name="budget"
           placeholder="Diga o seu orçamento"
           handleOnchange={handleChange}
           value={project.budget ? project.budget : ''}
           />
        
        <Seletor
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />

        <Botao_enviar text={botaoText}/>
       </form>
    )
}

export default FormularioProjeto