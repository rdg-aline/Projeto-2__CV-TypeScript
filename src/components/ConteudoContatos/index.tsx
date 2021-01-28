import React from 'react'
import {InterfaceContatoConteudo} from '../../types/InterfaceContato'



interface InterfaceContatoProps {
    dados: InterfaceContatoConteudo
}

function ConteudoContatos(props: InterfaceContatoProps) {
  
    return (
        <div className="lista-de-contatos">
            <li>
                <div className="item-contato">
                    <h4> {props.dados.tipo} </h4>
                    <p>{props.dados.contato}</p>
                 </div>
            </li>
        </div>


    )
} export default ConteudoContatos