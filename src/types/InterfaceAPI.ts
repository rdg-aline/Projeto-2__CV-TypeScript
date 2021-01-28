import {InterfaceContatoConteudo } from "./InterfaceContato";
import{InterfaceEducacaoConteudo} from './InterfaceEducacao'
import{InterfaceCursoConteudo} from './InterfaceCurso'


export interface API{
    nome:string,
    ocupacao: string,
    resumo:string,
    perfilProfissional: string,
    descricao:string,
    contatos: InterfaceContatoConteudo[],
    educacao: InterfaceEducacaoConteudo[],
    curso: InterfaceCursoConteudo[]
  }