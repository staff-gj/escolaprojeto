import { useEffect, useState } from 'react'
import axios from 'axios'
import Paginacao from '../layout/Paginacao'
import styles from './InformacoesAluno.modules.css'
import { BaixarBoleto } from './functions/BaixarBoleto'
import { BaixarFichaMatricula } from './functions/BaixarFichaMatricula'
import { useLocation } from 'react-router-dom';

export default function InformacoesAluno(props){

        const location = useLocation();
        const alunos = location.state;

        console.log(alunos);

    function boleto(nomeAluno, responsavel) {
        const valorCobrado = prompt("digite o valor cobrado do boleto:")

        console.log('Nome do aluno:', nomeAluno);
        BaixarBoleto(nomeAluno, responsavel, valorCobrado);
    }
        function fichaMatricula(nome_aluno ,periodo ,responsavel_buscar ,data_nascimento ,nome_pai ,nome_mae ,endereco ,cidade ,telefone ,email ,serie_aluno){
        BaixarFichaMatricula(nome_aluno ,periodo ,responsavel_buscar ,data_nascimento ,nome_pai ,nome_mae ,endereco ,cidade ,telefone ,email ,serie_aluno)
    }
    

    return(
        <div>
            <Paginacao/>   
            <p>informacoes do aluno:</p>
            <div>
                            <ul>
                                <li><strong>Nome do aluno:</strong> {alunos.nome_aluno}</li>
                                <li><strong>Período:</strong> {alunos.periodo}</li>
                                <li><strong>Responsável por buscar:</strong> {alunos.responsavel_buscar}</li>
                                <li><strong>Data de nascimento:</strong> {alunos.data_nascimento}</li>
                                <li><strong>Nome do pai:</strong> {alunos.nome_pai}</li>
                                <li><strong>Nome da mãe:</strong> {alunos.nome_mae}</li>
                                <li><strong>Endereço:</strong> {alunos.endereco}</li>
                                <li><strong>Cidade:</strong> {alunos.cidade}</li>
                                <li><strong>Telefone:</strong> {alunos.telefone}</li>
                                <li><strong>Email:</strong> {alunos.email}</li>
                                <li><strong>Série do aluno:</strong> {alunos.serie_aluno}</li>
                            </ul>
                            <button>Baixar declaração</button>
                            <button>Baixar transferencia</button>
                            <button onClick={() => fichaMatricula(alunos.nome_aluno ,alunos.periodo ,alunos.responsavel_buscar ,alunos.data_nascimento ,alunos.nome_pai ,alunos.nome_mae ,alunos.endereco ,alunos.cidade ,alunos.telefone ,alunos.email ,alunos.serie_aluno)}>Baixar Ficha de Matricula</button>
                            <button onClick={() => boleto(alunos.nome_aluno, alunos.nome_mae)}>Baixar Boleto</button>
                        </div>                    
        </div>
    )
}
