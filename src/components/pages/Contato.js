import Input from "../formularios/Input"


import styles from './Contato.module.css'

function Contato() {
  return (
   
    <div className={styles.novoprojeto_container}>
    <h1>Fale conosco</h1>
    <p>O seu feedback é importante para nós!</p><br></br>
    
    
    <br></br><Input type="text"
         text="Nome"
          name="name"
           placeholder="Nome Completo"
          
           />
           <Input type="email"
         text="E-mail"
          name="name"
           placeholder="E-mail para contato"
           
           />

<Input type="text"
         text="Telefone"
          name="name"
           placeholder="Telefone"
          
           
           />
           <Input type="text"
         text="Relate seu problema"
          name="name"
           placeholder="Diga resumidamente qual o seu problema"
          
           
           />
           <button className={styles.Botao_enviar}>Enviar</button>

  </div>


  )
}

export default Contato
