import { useState } from 'react';
import Paginacao from '../layout/Paginacao';
import styles from './NovoAluno.modules.css'
import axios from 'axios'

export default function NovoAluno(){

    const [periodo, setPeriodo] = useState('')
    const [responsavel_buscar, setResponsavel_buscar] = useState('')
    const [nome_aluno, setNome_aluno] = useState('')
    const [data_nascimento, setData_nascimento] = useState('')
    const [nome_pai, setNome_pai] = useState('')
    const [nome_mae, setNome_mae] = useState('')
    const [endereco, setEndereco] = useState('')
    const [cidade, setCidade] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [serie_aluno, setSerie_aluno] = useState('')

    const informacoes = [
        periodo, responsavel_buscar, nome_aluno, nome_mae, nome_pai, data_nascimento, endereco, cidade, telefone, email, serie_aluno
    ]

    function cadastrar_aluno(e){
        e.preventDefault()
        console.log(informacoes)

        const url = 'http://backendteste.free.nf/cadastrar_aluno.php';
        let fData = new FormData();
  
        fData.append('periodo', periodo);
        fData.append('responsavel_buscar', responsavel_buscar);
        fData.append('nome_aluno', nome_aluno);
        fData.append('data_nascimento', data_nascimento);
        fData.append('nome_pai', nome_pai);
        fData.append('nome_mae', nome_mae);
        fData.append('endereco', endereco);
        fData.append('cidade', cidade);
        fData.append('telefone', telefone);
        fData.append('email', email);
        fData.append('serie_aluno', serie_aluno);

        axios.post(url, fData).then(response=> console.log(response.data)).catch(error=> alert(error));  
        window.location = '/home'
    }

    return(
        <div>
            <Paginacao/>
            <form className='form'>
                <h1>Ficha de matricula</h1>
                <label htmlFor="">Horario que a criança permanecerá na escola: </label>
                <select defaultValue="" onChange={(e) => setPeriodo(e.target.value)}>
                    <option >Selecione o horario</option>
                    <option value="manha">de Manhã</option>
                    <option value="tarde">de Tarde</option>
                    <option value="integral">Periodo Integral</option>
                </select><br /><br />
                <label htmlFor="">Quem costuma trazer a criança para a escola: </label>
                <input type="text" onChange={(e)=> setResponsavel_buscar(e.target.value)}/><br /><br />

                <label htmlFor="nomeAluno">Nome do Aluno:</label>
                <input type="text" id="nomeAluno" name="nomeAluno" onChange={(e)=> setNome_aluno(e.target.value)}/>

                <label htmlFor="dataNascimento">Data de Nascimento:</label>
                <input type="date" id="dataNascimento" name="dataNascimento" onChange={(e)=> setData_nascimento(e.target.value)}/><br /><br />

                <label htmlFor="nomePai">Nome do Pai:</label>
                <input type="text" id="nomePai" name="nomePai" onChange={(e)=> setNome_pai(e.target.value)}/><br /><br />

                <label htmlFor="nomeMae">Nome da Mãe:</label>
                <input type="text" id="nomeMae" name="nomeMae" onChange={(e)=> setNome_mae(e.target.value)}/><br /><br />

                <label htmlFor="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" onChange={(e)=> setEndereco(e.target.value)}/><br /><br />

                <label htmlFor="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" onChange={(e)=> setCidade(e.target.value)}/><br /><br />

                <label htmlFor="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" onChange={(e)=> setTelefone(e.target.value)}/><br /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)}/><br /><br />
                
                <label htmlFor="serie">Serie do aluno: </label>
                <input type="text" name="" id="" onChange={(e)=> setSerie_aluno(e.target.value)}/><br /><br />


                <button type="submit" onClick={cadastrar_aluno}>Cadastrar Aluno</button>
            </form>
        </div>
    )
}
