import { useEffect, useState } from 'react'
import axios from 'axios'
import Paginacao from '../layout/Paginacao'
import styles from './InformacoesAluno.modules.css'
import { BaixarBoleto } from './functions/BaixarBoleto'

export default function InformacoesAluno(props){
    const [aluno, setAluno] = useState([])
    const [error, setError] = useState(null);

    const urlParams = new URLSearchParams(window.location.search)
    const aluno_id = urlParams.get("id")
    
    useEffect(() => {
        if (!aluno_id) return;

        function buscarInformacoesAluno() {
            const url = 'http://localhost/escoladb/aluno_especifico.php';
            const formData = new FormData();
            formData.append('aluno_id', aluno_id);

            axios.post(url, formData)
                .then(response => {
                    setAluno(response.data);
                })
                .catch(error => {
                    setError(error);
                });
        }

        buscarInformacoesAluno();
    }, [aluno_id]);

    function boleto(nomeAluno, responsavel) {
        const valorCobrado = prompt("digite o valor cobrado do boleto:")

        console.log('Nome do aluno:', nomeAluno);
        BaixarBoleto(nomeAluno, responsavel, valorCobrado);
    }
    

    return(
        <div>
            <Paginacao/>   
            <p>informacoes do aluno: id={aluno_id}</p>
            <div>
                {Array.isArray(aluno) && aluno.length >= 0 ? (
                    aluno.map((alunos, index) => (
                        <div className='divInformacoes' key={index}>
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
                            <button onClick={() => boleto(alunos.nome_aluno, alunos.nome_mae)}>Baixar Boleto</button>
                        </div>
                    ))
                    ):(
                        <p>Informacoes nao validadas</p>
                )}
                    
            </div>
        </div>
    )
}
