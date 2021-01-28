import React from 'react'
import {InterfaceCursoConteudo} from '../../types/InterfaceCurso'


interface InterfaceCursoProps {
    curso: InterfaceCursoConteudo

}

function ConteudoCurso(props: InterfaceCursoProps ) {

    const { cargo, periodo, instituicao, local, conteudo } = props.curso

    return (
        <>
        
            <div className="experience-item">
                <div>
                    <h4>{cargo}</h4>
                    <span>{periodo}</span>
                    <strong>{instituicao}</strong>
                    <span>{local}</span>
                </div>
                    <p>{conteudo} </p>
            </div>

        </>


    )
} export default ConteudoCurso