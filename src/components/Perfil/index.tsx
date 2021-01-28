import React from 'react'


interface Perfil {
  perfil: {
    perfilProfissional: string,
    descricao: string
  }
}


function Perfil(prop: Perfil) {

  const { perfilProfissional, descricao } = prop.perfil
  
  return (
    <>
      <div className="titulo"><br />
        {perfilProfissional}
      </div>

      <div className="perfil-profissional">
        <p>
          {descricao}
        </p>
      </div>
    </>
  )

}

export default Perfil