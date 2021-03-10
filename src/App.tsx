import React, { useState } from "react";
import "./App.css"
import ImagemPerfil from './components/ImagemPerfil'
import Biografia from './components/Biografia'
import Perfil from './components/Perfil'
import Contatos from './components/Contatos'
import Educacao from './components/Educacao'
import Cursos from './components/Cursos'
import {API} from './types/InterfaceAPI'


function App() {

  const fakeAPI: API =
  {
    nome: 'Aline Rodrigues',
    ocupacao: 'Estudante TI',
    resumo: '28 anos e pronta pra ser Dev | QA',
    perfilProfissional: 'Perfil Profissional',
    descricao:'Estudante de automação de teste e React',
    contatos: [
      {
        id: 1,
        tipo: 'Telefone',
        contato: '19 9xxx-xxxx4'
      },
      {
        id: 2,
        tipo: 'E-mail',
        contato: 'rdg.aline@yahoo.com.br'
      },
      {
        id: 3,
        tipo: 'GitHub',
        contato: 'https://github.com/rdg-aline'
      }
    ],
    educacao: [
       {
        id: 1,
        instituicao: 'COTUCA - UNICAMP',
        curso: 'Técnico em informática || 2008-2009  '
      }
    ],
    curso: [
      {
        id: 1,
        cargo: 'React',
        periodo: 'Jan/21 - Mar/21',
        instituicao: 'Campinas Tech Talents 2020',
        local:'SP',
        conteudo: 'Construir  e testar aplicações em React'
      },
      {
        id: 2,
        cargo: 'Início Rápido em Teste de Software',
        periodo: 'Ago/2020 - 2021',
        instituicao: 'Iterasys',
        local: 'Sp',
        conteudo: 'Automação de Teste: API - Web - Mobile     Planejamento de Testes: análise, modelagem e implementação       Atitudes de um Profissional de Qualidade'
      },
      {
        id: 3,
        cargo: 'Robot Beginner',
        periodo: 'Dez/2020',
        instituicao: 'QA Ninja',
        local: 'SP',
        conteudo: 'Apender a automatizar testes com o padrão semi-codeless,benefícios do Robot Framework'
      }
      
    ]
  }

 
 const [minhaAPI] = useState<API>(fakeAPI) 

  return (
    <main>
      <ImagemPerfil />
      
      <Biografia bio={minhaAPI} />

      <Perfil perfil={minhaAPI}/>


      <aside> <Contatos dados={minhaAPI.contatos} />
              <Educacao educacao={minhaAPI.educacao}/>
      </aside>


    <Cursos curso={minhaAPI.curso}/>


     
    </main>
  );
}

export default App;