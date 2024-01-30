import { useEffect, useState } from 'react'
import axios from 'axios'
import Paginacao from '../layout/Paginacao'
import styles from './InformacoesAluno.modules.css'
import { BaixarBoleto } from './functions/BaixarBoleto'
import { useLocation } from 'react-router-dom';
import { BaixarFichaMatricula } from './functions/BaixarFichaMatricula'
import { BaixarDeclaracao} from './functions/BaixarDeclaracao'
import { BaixarTransferencia} from './functions/BaixarTransferencia'
import BoletoForm from '../forms/BoletoForm'
import DeclaracaoForm from '../forms/DeclaracaoForm'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faFile, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function InformacoesAluno(props){

        const location = useLocation();
        const alunos = location.state;

        console.log(alunos);

        const divBoleto = useRef("") 
        const divDeclaracao = useRef("") 

    function boleto() {
        const boletoBox = divBoleto.current.id

        divBoleto.current.style.display = 'flex'
    }

    function fichaMatricula(nome_aluno ,periodo ,responsavel_buscar ,data_nascimento ,nome_pai ,nome_mae ,endereco ,cidade ,telefone ,email ,serie_aluno){
        
        BaixarFichaMatricula(nome_aluno ,periodo ,responsavel_buscar ,data_nascimento ,nome_pai ,nome_mae ,endereco ,cidade ,telefone ,email ,serie_aluno)
    }
    function declaracao() {
        const declaracaoBox = divDeclaracao.current.id

        divDeclaracao.current.style.display = 'inline'
    }
    function transferencia(nome_aluno, data_nascimento, nome_pai, nome_mae, serie_aluno){
        BaixarTransferencia(nome_aluno, data_nascimento, nome_pai, nome_mae, serie_aluno)
    }

    return(
        <div>
            <Paginacao/>   <br />
            <div>
                <div className='divBoleto' ref={divBoleto}>
                <BoletoForm className='boleto_box' displayValue={'flex'} nomeAluno={alunos.nome_aluno} responsavel={alunos.nome_mae}/>
                </div>
                <div className='divDeclaracao' ref={divDeclaracao}>
                    <DeclaracaoForm className='declaracao_box' displayValue={'flex'}  nomeAluno={alunos.nome_aluno} data_nascimento={alunos.data_nascimento} nome_pai={alunos.nome_pai} nome_mae={alunos.nome_mae} serie_aluno={alunos.serie_aluno}/>
                </div>
                            <ul className='dados_alunos'>
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
                            <button className='downloads' onClick={() => declaracao(alunos.nome_aluno, alunos.data_nascimento, alunos.nome_pai, alunos.nome_mae, alunos.serie_aluno)}><FontAwesomeIcon icon={faFile} />    Baixar declaração</button>
                            <button className='downloads' onClick={() => transferencia(alunos.nome_aluno, alunos.data_nascimento, alunos.nome_pai, alunos.nome_mae, alunos.serie_aluno)}><FontAwesomeIcon icon={faArrowRightArrowLeft} />    Baixar transferencia</button>
                            <button className='downloads' onClick={() => fichaMatricula(alunos.nome_aluno ,alunos.periodo ,alunos.responsavel_buscar ,alunos.data_nascimento ,alunos.nome_pai ,alunos.nome_mae ,alunos.endereco ,alunos.cidade ,alunos.telefone ,alunos.email ,alunos.serie_aluno)}><FontAwesomeIcon icon={faFile} />    Baixar Ficha de Matricula</button>
                            <button className='downloads' onClick={() => boleto()}><FontAwesomeIcon icon={faBarcode} />     Baixar Boleto</button>
                        </div>                    
        </div>
    )
}
