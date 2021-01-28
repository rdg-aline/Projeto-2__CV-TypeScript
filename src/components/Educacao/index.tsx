import React from 'react'
import ConteudoEducacao from '../ConteudoEducaco'
import { InterfaceEducacaoConteudo } from '../../types/InterfaceEducacao'


 interface InterfaceEducacao {
       educacao: InterfaceEducacaoConteudo[]
  
}


function Educacao(props: InterfaceEducacao) {


  return (

    <div className="sidebar">
      <h3>Educação</h3>

      {
        props.educacao.map((item: InterfaceEducacaoConteudo)=>(
         <ConteudoEducacao key={item.id} educacao={item}/>
        ))
        }
    </div>
  )
}
export default Educacao