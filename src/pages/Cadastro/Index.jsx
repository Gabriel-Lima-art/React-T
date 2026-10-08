import Input from '../../components/ui/Input/Index';
import Botao from '../../components/ui/Botao/Index';
import styles from './Styles.module.css';
import { useNavigate } from 'react-router';
import Checkbox from '../../components/ui/Checkbox';
import imgLogoBat from '../../assets/imgs/WhatsApp_Image_2026-09-04_at_09.51.37-removebg-preview (1).png';
import { Link } from 'react-router';
import validarSenha from './helpers/validarSenha';
import { useState } from 'react';
import api from '../../lib/axios';

export default function Cadastro() {

    const navigate = useNavigate();
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [jaEnviou, setJaEnviou] = useState(false)
    const senhasIguais = validarSenha(senha, confirmarSenha);
    const [mostrarSenha, setMostrarSenha] = useState(false)
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false)
    const [erroApi, setErroApi] = useState('');


    async function handleSubmit(e) {
        e.preventDefault();
        setJaEnviou(true);


        if (senhasIguais !== "Tudo certo!") {
            return;
        }

        try {
            await api.post('/auth/cadastro', {
                nome,
                email,
                senha
            });

            console.log('Usuário criado com sucesso:')

            navigate('/login');
        } catch (error) {
            setErroApi(error.response?.data?.mensagem || "Erro no servidor.");
        }
    }

    const handleChange = (setter, value) => {
        setter(value);
        if (jaEnviou) setJaEnviou(false);
    };

    const handleToggleMostrarSenha = () => {
        setMostrarSenha((prev) => !prev);
    };

    const handleToggleMostrarConfirmarSenha = () => {
        setMostrarConfirmarSenha((prev) => !prev);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.header}>
                    <img src={imgLogoBat} alt="Logo" className={styles.logo} />
                    <h1>BAT</h1>
                    <h2>Sistema de Busca de Ativos Tijuca Alimentos</h2>
                </div>

                <Input
                    typeInput={"text"}
                    placeholder={"Digite seu nome..."}
                    required={false}
                    value={nome}
                    onChange={(e) => handleChange(setNome, e.target.value)}
                />

                <Input
                    typeInput={"email"}
                    placeholder={"Digite seu Email..."}
                    required={false}
                    value={email}
                    onChange={(e) => handleChange(setEmail, e.target.value)}
                />

                <Input
                    typeInput={mostrarSenha ? "text" : "password"}
                    placeholder={"Digite sua senha..."}
                    required={false}
                    id={'senha'}
                    value={senha}
                    onChange={(e) => handleChange(setSenha, e.target.value)}
                />

                <div className={styles.showPasswordContainer}>
                    <p>Mostrar senha</p>
                    <Checkbox
                        checked={mostrarSenha}
                        action={handleToggleMostrarSenha}
                    />
                </div>

                <Input
                    typeInput={mostrarConfirmarSenha ? "text" : "password"}
                    placeholder={"Confirme sua senha..."}
                    required={false}
                    id={'csenha'}
                    value={confirmarSenha}
                    onChange={(e) => handleChange(setConfirmarSenha, e.target.value)}
                />

                <div className={styles.showPasswordContainer}>
                    <p>Mostrar Senha</p>
                    <Checkbox
                        checked={mostrarConfirmarSenha}
                        action={handleToggleMostrarConfirmarSenha}
                    />
                </div>

                <div className={styles.Erro}>
                    {jaEnviou && senhasIguais !== "Tudo certo!" && senhasIguais}
                    {erroApi && <p>{erroApi}</p>}                </div>

                <Botao
                    text={"Criar Conta!"}
                />

                <p>
                    Já tenho conta, <Link to={'/login'} className={styles.LinkCadastro}>entrar!</Link>
                </p>
            </form>
        </div>
    );
}