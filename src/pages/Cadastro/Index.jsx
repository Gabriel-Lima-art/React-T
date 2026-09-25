import Input from '../../components/ui/Input/Index';
import Botao from '../../components/ui/Button/';
import styles from './Styles.module.css';
import { useNavigate } from 'react-router';
import Checkbox from '../../components/ui/Checkbox';
import imgLogoBat from '../../assets/imgs/WhatsApp_Image_2026-09-04_at_09.51.37-removebg-preview (1).png';
import { Link } from 'react-router';

export default function Cadastro() {

    const navigate = useNavigate();

    

    return (
        <div>
            <form>
                <div className={styles.header}>
                    <img src={imgLogoBat} alt="Logo" className = {styles.logo}/>
                    <h1>
                        BAT
                    </h1>

                    <h2>
                        Sistema de Busca de Ativos Tijuca Alimentos
                    </h2>
                </div>
                <Input
                    typeInput={"text"}
                    placeholder={"Digite seu nome..."}
                    required={false}
                />

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
                    <p>Mostrar senha</p>
                    <Checkbox />
                </div>

                <Input
                    typeInput={"password"}
                    placeholder={"Confirme sua senha..."}
                    required={false}
                />

                <div className={styles.showPasswordContainer}>
                    <p>Mostrar Senha</p>
                    <Checkbox />
                </div>
                <Botao
                    text={"Criar Conta!"}
                    action={() => navigate('/login')}
                />

                <p>
                    Já tenho conta, <Link to={'/login'} className={styles.LinkCadastro} >entrar!</Link>
                </p>
            </form>
        </div>
    );
}