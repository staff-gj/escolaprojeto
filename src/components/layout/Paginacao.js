import { Link } from 'react-router-dom'
import Footer from './Footer'
import styles from './Paginacao.modules.css'


export default function Paginacao(){
    return(
        <div>
        <nav className='navbar'>
            <ul className={'container'}>
                <ul className='list'>
                    <li className='item'>
                    <Link to={"/home"}>Home</Link>
                    </li>
                    <li className='item'>
                    <Link to={"/carnepagamento"}>Carne de pagamento</Link>
                    </li>
                    <li className='item'>
                    <Link to={"/fichamatricula"}>Ficha de matricula</Link>
                    </li>
                    <li className='item'>
                    <Link to={"/alunos"}>Alunos</Link>  
                    </li>
                </ul>
            </ul>
        </nav>
        </div>

    )
}