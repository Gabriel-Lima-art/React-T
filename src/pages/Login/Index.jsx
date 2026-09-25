import Input from '../../components/ui/Input/Index';
import Botao from '../../components/ui/Button/';
import styles from './Styles.module.css';
import { Link, useNavigate } from 'react-router';
import Checkbox from '../../components/ui/Checkbox';
import imgLogoBat from '../../assets/imgs/WhatsApp_Image_2026-09-04_at_09.51.37-removebg-preview (1).png';

export default function Login() {
    const navigate = useNavigate();

    return (

        <div>

            <form action="">
                <div className={styles.header}>
                    <img src={imgLogoBat} alt="Logo"
                        className={styles.logo}></img>
                    <h1>
                        BAT
                    </h1>

                    <h2>
                        Sistema de Busca de Ativos Tijuca Alimentos
                    </h2>
                </div>
                <Input
                    typeInput={"email"}
                    placeholder={"Digite seu Email..."}
                    required={false}
                />
                <Input
                    typeInput={"password"}
                    placeholder={"Digite sua senha..."}
                    required={false}
                />
                <div className={styles.showPasswordContainer}>
                    <p>Mostrar Senha</p>
                    <Checkbox />

                </div>
                
                <Botao
                    text={"Confirmar!"}
                    action={() => navigate('/')}
                />
                <p>
                    Não tenho conta, <Link to={'/cadastro'} className={styles.LinkLogin}>criar gratuitamente!</Link>
                </p>
            </form>
        </div>
    );
}