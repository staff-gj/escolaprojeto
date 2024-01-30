import { BaixarDeclaracao } from "../pages/functions/BaixarDeclaracao";
import { useState } from "react";
import { useRef } from "react";
import style  from './DeclaracaoForm.modules.css'


export default function DeclaracaoForm({nomeAluno, data_nascimento, nome_pai, nome_mae, serie_aluno}){
    const ocultarDivDeclaracao = useRef("")

    const [data_inicial, setData_inicial] = useState("")
    const [data_final, setData_final] = useState("")
    const [serie_seguinte, setSerie_seguinte] = useState("")

    function declaracao(){
        const idDivDeclaracao = ocultarDivDeclaracao.current.id

        BaixarDeclaracao(nomeAluno, data_nascimento, nome_pai, nome_mae, serie_aluno, data_inicial, data_final, serie_seguinte);
    
        ocultarDivDeclaracao.current.style.display = 'none'
    }
    function voltar(){
        ocultarDivDeclaracao.current.style.display = 'none'
    }


    return(
        <div className='declaracao_box' ref={ocultarDivDeclaracao}>
            <label>Digite o ano e mês em que o Aluno começou a estudar no estabelecimento:</label><br />
            <input type="number" onChange={(e)=> setData_inicial(e.target.value)}/><br />

            <label>Digite o ano e mês em que o Aluno saiu do estabelecimento:</label><br />
            <input type="number" onChange={(e)=> setData_final(e.target.value)}/><br />

            <label>Digite a próxima série em que o aluno começará a estudar, seja no seu estabelecimento ou não:</label><br />
            <input type="number" onChange={(e)=> setSerie_seguinte(e.target.value)}/><br /><br />

            <input type="button" className="baixar_declaracao" value="Baixar Declaracao" onClick={declaracao}/><br />
            <input type="button" className="voltar" value="Voltar" onClick={voltar}/>
        </div>
    )
}