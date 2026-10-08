import Input from '../../components/ui/Input/Index';
import Botao from '../../components/ui/Botao/Index';
import styles from './Styles.module.css';
import { Link, useNavigate } from 'react-router';
import Checkbox from '../../components/ui/Checkbox';
import imgLogoBat from '../../assets/imgs/WhatsApp_Image_2026-09-04_at_09.51.37-removebg-preview (1).png';
import { useState } from 'react';
import api from '../../lib/axios';
import { useAuth } from '../../contexts/authContext'; 

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth(); 

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [erro, setErro] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); 
        try {
            setErro('');

            const { data } = await api.post('/auth/login', { email, senha });

            login(data.usuario, data.token);

            navigate('/');
        } catch (error) {
            setErro(error.response?.data?.erro || 'Erro ao fazer login');
        }
    };

    const handleToggleMostrarSenha = () => {
        setMostrarSenha((prev) => !prev);
    };

    const handleSenhaChange = (e) => {
        setSenha(e.target.value);
    };

    return (
        <div>
            
            <form onSubmit={handleLogin} className='w-full max-w-md bg-white rounded-xl p-6 sm:p-8 shadow-2xl flex flex-col items-center gap-4 my-8'>

                <div className='flex flex-col items-center justify-center p-[10px] ml-[15px] text-center'>

                    <img src={imgLogoBat} alt="Logo" className= 'w-[60%]'/>


                    <h1>BAT</h1>
                    <h2>Sistema de Busca de Ativos Tijuca Alimentos</h2>
                </div>

                <Input
                    typeInput={"email"}
                    placeholder={"Digite seu Email..."}
                    required={false}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    typeInput={mostrarSenha ? "text" : "password"}
                    placeholder={"Digite sua senha..."}
                    required={false}
                    id={'senha'}
                    value={senha}
                    onChange={handleSenhaChange}
                />

                <div className={styles.showPasswordContainer}>
                    <p>Mostrar Senha</p>
                    <Checkbox
                        checked={mostrarSenha}
                        action={handleToggleMostrarSenha}
                    />
                </div>

                {erro && <p className='text-red-600 text-center'>{erro}</p>}

                <Botao
                    text={"Confirmar!"}
                />

                <p className='text-center'>
                    Não tenho conta, <Link to={'/cadastro'} className='text-[#F08010] no-underline font-bold'>criar gratuitamente!</Link>
                </p>
            </form>
        </div>
    );
}