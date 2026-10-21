import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import Input from '../../components/ui/Input/Input.jsx';
import CampoSenha from '../../components/ui/CampoSenha.jsx';
import Botao from '../../components/ui/Botao/Botao.jsx';
import AuthLayout from '../../layout/AuthLayout.jsx';
import imgLogoBat from '../../assets/imgs/WhatsApp_Image_2026-09-04_at_09.51.37-removebg-preview (1).png';
import validarSenha from './helpers/validarSenha';
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
        
            <AuthLayout
                logo={imgLogoBat}
                titulo="Crie sua conta e comece a acompanhar os ativos."
                texto="O que você vê dentro do BAT depende do seu setor, então cada pessoa encontra só o que precisa."
                itens={['Cadastro leva menos de 1 minuto', 'Sua senha é guardada com criptografia', 'Você pode alterar seus dados depois']}
            >
                <h1 className="text-xl font-bold text-titulo">Criar conta</h1>
                <p className="mt-1 text-sm text-suave">Preencha os dados abaixo para ter acesso.</p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <Input
                        label="Nome completo"
                        type="text"
                        placeholder="Como aparece no seu crachá"
                        required={false}
                        value={nome}
                        onChange={(e) => handleChange(setNome, e.target.value)}
                    />
                    <Input
                        label="E-mail"
                        type="email"
                        placeholder="seu@email.com.br"
                        required={false}
                        value={email}
                        onChange={(e) => handleChange(setEmail, e.target.value)}
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                        <CampoSenha
                            label="Senha"
                            placeholder="Crie uma senha"
                            required={false}
                            value={senha}
                            onChange={(e) => handleChange(setSenha, e.target.value)}
                            visivel={mostrarSenha}
                            onAlternar={handleToggleMostrarSenha}
                        />
                        <CampoSenha
                            label="Confirmar senha"
                            placeholder="Repita a senha"
                            required={false}
                            value={confirmarSenha}
                            onChange={(e) => handleChange(setConfirmarSenha, e.target.value)}
                            visivel={mostrarConfirmarSenha}
                            onAlternar={handleToggleMostrarConfirmarSenha}
                        />
                    </div>
                    <div role="alert" className="text-sm text-alerta">
                        {jaEnviou && senhasIguais !== "Tudo certo!" && <p>{senhasIguais}</p>}
                        {erroApi && <p>{erroApi}</p>}
                    </div>
                    <Botao type="submit" className="w-full" text="Criar conta" />
                </form>
                <p className="mt-5 text-center text-sm text-suave">
                    Já tem conta? <Link to="/login" className="font-bold text-ok hover:underline">Entrar</Link>
                </p>
            </AuthLayout>
        
    );
}
