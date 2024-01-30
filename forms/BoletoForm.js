import { BaixarBoleto } from "../pages/functions/BaixarBoleto";
import { useState } from "react";
import { useRef } from "react";
import style  from './BoletoForm.module.css'

export default function BoletoForm({nomeAluno, responsavel, displayValue}){
    
    const ocultarDivBoleto = useRef("")
    
    const [valorCobrado, setValorCobrado] = useState('')
    function boleto() {
        const idDivBoleto = ocultarDivBoleto.current.id

        console.log('Nome do aluno:', nomeAluno);
        console.log('responsavel:', responsavel)
        console.log('valor cobrado:', valorCobrado)

        BaixarBoleto(nomeAluno, responsavel, valorCobrado);
        console.log(displayValue)
        ocultarDivBoleto.current.style.display = 'none'
    }

    return(
        <div className='boleto_box' ref={ocultarDivBoleto}>
            <label>Digite o valor do boleto:</label><br />
            <input type="number" id="valorBoleto" placeholder="Valor do boleto" onChange={(e)=>setValorCobrado(e.target.value)}/><br /><br />
            <input type="button" className="baixar_boleto_form" value="Baixar Boleto" onClick={boleto}/>
        </div>
    )
}