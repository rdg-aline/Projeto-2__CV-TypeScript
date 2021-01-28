import React, { useState } from 'react'
import ConteudoContatos from '../ConteudoContatos'
import {InterfaceContatoConteudo } from '../../types/InterfaceContato'



interface InterfaceContato {
    dados: InterfaceContatoConteudo[]
}


function Contatos(props: InterfaceContato) {

    const [btn, addContatos] = useState<Boolean>(false)

    const mostraContatos = () => { addContatos(true) }


    return (

        <div className="sidebar">
            <>
                <h3>Contatos</h3>
                <button onClick={mostraContatos} > Mostrar Contatos</button>
                {
                   btn && props.dados.map((item:InterfaceContatoConteudo)=>(
                   <ConteudoContatos key={item.id}  dados={item}/>
                   )) 
                }
            </>

        </div>


    )


}
export default Contatos