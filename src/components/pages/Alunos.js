import { useEffect, useState } from 'react';
import Paginacao from '../layout/Paginacao';
import styles from './Alunos.modules.css'
import { Link } from 'react-router-dom'
 
export default function Alunos(){
    const [aluno, setAluno] = useState("")
    useEffect(()=>{
        fetch("https://cypriot-overcoat.000webhostapp.com/backend/receber_dados.php")
            .then(response => response.json())
            .then(data =>{
                setAluno(data)
                console.log(data)
            })
    }, [])
    return(
        <div>
            <Paginacao/>
        <div>
            <h1>Alunos:</h1>
            {aluno.length > 0 ?(
                aluno.map((alunos, index)=>(
                    <div className='informacoes_aluno' key={index}>
                        <h1>{alunos.nome_aluno}</h1>
                        <p>{alunos.periodo}</p>
                        <p>{alunos.serie_aluno}</p>
                        <Link to={`/informacoes_aluno?id=${alunos.id}`}>Ver informações completas</Link>
                        <button>Apagar Aluno</button>
                    </div>
                ))
            ) : (
                <p>Carregando dados...</p>
            )}
        </div>
        </div>
    )
}
