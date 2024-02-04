import { useEffect, useState } from 'react';
import Paginacao from '../layout/Paginacao';
import styles from './Alunos.modules.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faAddressCard, faSearch } from '@fortawesome/free-solid-svg-icons';

 
export default function Alunos(){
    const [aluno, setAluno] = useState("")
    const [pesquisarAluno, setPesquisarAluno] = useState("")
    const [resultadoPesquisa, setResultadoPesquisa] = useState("")
    const [exibirResultado, setExibirResultado] = useState("")

    useEffect(()=>{
        fetch("https://cypriot-overcoat.000webhostapp.com/backend/receber_dados.php")
            .then(response => response.json())
            .then(data =>{
                setAluno(data)
                console.log(data)
            })
    }, [])
    function apagarAluno(id){
        const url = 'https://cypriot-overcoat.000webhostapp.com/backend/apagar_aluno.php';
        let fData = new FormData();

        fData.append("id", id)
        console.log("Id do aluno: ",id)

        axios.post(url, fData).then(response=> console.log(response.data)).catch(error=> alert(error));  
    }

    function pesquisar(pesquisarAluno, query){
        const resultados = aluno.filter(aluno =>
            aluno.nome_aluno.toLowerCase().includes(pesquisarAluno.toLowerCase())
        );
        if (resultados) {
            console.log(resultados);
            setResultadoPesquisa(resultados);

            const exibirResultados = resultados.map(resultado => (
                <div className='informacoes_aluno' key={resultado.id}>
                  <h1>{resultado.nome_aluno}</h1>
                  <p>{resultado.periodo}</p>
                  <p>{resultado.serie_aluno}</p><br />
                  <Link className='botao_ver_informacoes' to={`/informacoes_aluno?id=${resultado.id}`} state={resultado}>
                    <FontAwesomeIcon icon={faAddressCard} /> Ver informações completas
                  </Link>
                  <button className='botao_apagar_aluno' onClick={() => apagarAluno(resultado.id)}>
                    <FontAwesomeIcon icon={faTrash} /> Apagar Aluno
                  </button>
                </div>
              ));
              setExibirResultado(exibirResultados);
          } else {
            console.log("nenhum aluno correspondente");
          }          
    }
    
    return(
        <div>
            <Paginacao/>
        <div>
            <h1>Alunos:</h1>
            <input type="search" id="" placeholder='Pesquisar Aluno...' onChange={(e) => pesquisar(e.target.value)}/>
            <div>{exibirResultado}</div>

            {aluno.length > 0 ?(
                aluno.map((alunos, index)=>(
                    <div className='informacoes_aluno' key={index}>
                        <h1>{alunos.nome_aluno.toUpperCase()}</h1>
                        <p>{alunos.periodo}</p>
                        <p>{alunos.serie_aluno}</p><br />
                        <Link className='botao_ver_informacoes' to={`/informacoes_aluno?id=${alunos.id}`} state={alunos}><FontAwesomeIcon icon={faAddressCard} />        Ver informações completas</Link>
                        <button className='botao_apagar_aluno' onClick={() => apagarAluno(alunos.id)}><FontAwesomeIcon icon={faTrash} />         Apagar Aluno</button>
                    </div>
                ))
            ) : (
                <p>Carregando dados...</p>
            )}
        </div>
        </div>
    )
}
