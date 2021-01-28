import React from 'react'
import {InterfaceCursoConteudo } from '../../types/InterfaceCurso'
import ConteudoCurso from '../ConteudoCurso'


interface InterfaceCurso {
  curso: InterfaceCursoConteudo[]

}

function Cursos(props: InterfaceCurso) {

   return (
    
      <div className="experience">
        <h2>Cursos</h2>
      {
         
          props.curso.map((item : InterfaceCursoConteudo)=>(
              <ConteudoCurso key={item.id}  curso={item}/>
          ))}
      </div>
  )

} export default Cursos