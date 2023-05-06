import { useState } from 'react'

import Input from '../components/formularios/Input'
import Botao_enviar from '../components/formularios/Botao_enviar'

import styles from '../components/Projeto/FormularioProjeto.module.css'


function FormularioServico ({handleSubmit, botaoText, projetoData }) {
   
    const [servico, setServico] = useState ([])

    function submit(e) {
       e.preventDefault()
       projetoData.servicies.push(servico)
       handleSubmit(projetoData)
    }

    function handleChange(e) {
       setServico({...servico, [e.target.name]: e.target.value})
    }

    return(
       <form onSubmit={submit} className={styles.form}>
        <Input
         type= "text"
         text="Titulo do serviço"
         name="name"
         placeholder="Diga o nome do serviço"
         handleOnchange={handleChange}
        />
        <Input
         type= "number"
         text="Custo do serviço"
         name="cost"
         placeholder="Insira o valor"
         handleOnchange={handleChange}
        />
        <Input
         type= "text"
         text="Descrição do serviço"
         name="descricao"
         placeholder="Descreva o serviço desejado"
         handleOnchange={handleChange}
        />
        <Botao_enviar text={botaoText}/>
       </form>
    )
}

export default FormularioServico