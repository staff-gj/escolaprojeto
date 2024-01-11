import { Link } from 'react-router-dom';
import Paginacao from '../layout/Paginacao';
import savings from '../img/savings.svg'
import styles from './Home.modules.css'

export default function Home(){
    return(
        <div>
            <Paginacao/>
        <section className="home_container">
            <h1>Adicione novos <span>alunos</span> na sua empresa!</h1>
            <Link className='btn' to={'/novoaluno'}>Novo aluno</Link>
            <img src={savings} alt="Savings" />
            </section>
        </div>
    )
}