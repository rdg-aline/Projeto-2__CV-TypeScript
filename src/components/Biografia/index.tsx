import React from 'react'

interface Biografia{
    bio:{
    nome: string,
    ocupacao: string,
    resumo: string
    }
}


function Biografia(prop:Biografia) {

    const { nome, ocupacao, resumo } = prop.bio

    return (

        <div className="biografia">
            <h1>
            {nome}
        </h1>
            <div className="ocupacao">{ocupacao}</div>
            <p> {resumo} </p>
        </div>)

}
export default Biografia