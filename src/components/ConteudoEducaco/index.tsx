import React from 'react'
import { InterfaceEducacaoProps} from '../../types/InterfaceEducacao'


function ConteudoEducacao(props: InterfaceEducacaoProps) {

    
    const {instituicao,curso} = props.educacao

    return (
        <>
        
         <div className="lista-de-formacao">
            <li>
              <h4>{instituicao}</h4>
              <p>{curso}</p>
            </li>
         </div>
        </>


    )
} export default ConteudoEducacao