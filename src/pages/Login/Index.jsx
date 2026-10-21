import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import Input from '../../components/ui/Input/Input.jsx';
import CampoSenha from '../../components/ui/CampoSenha.jsx';
import Botao from '../../components/ui/Botao/Botao.jsx';
import AuthLayout from '../../layout/AuthLayout.jsx';
import imgLogoBat from '../../assets/imgs/WhatsApp_Image_2026-09-04_at_09.51.37-removebg-preview (1).png';
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

            navigate('/home');
        } catch (error) {
            setErro(error.response?.data?.erro || 'Erro ao fazer login');
            setSenha(''); // Limpa a senha em caso de erro para o usuário redigitar
        }
    };

    const handleToggleMostrarSenha = () => {
        setMostrarSenha((prev) => !prev);
    };

    const handleSenhaChange = (e) => {
        setSenha(e.target.value);
    };

    return (
        <AuthLayout
            logo={imgLogoBat}
            titulo="Encontre qualquer ativo da Tijuca Alimentos em segundos."
            texto="Veja onde cada equipamento está, quem é o responsável e quando foi verificado pela última vez."
            itens={['Busca por nome, código ou local', 'Status atualizado a cada verificação', 'Acesso conforme o seu setor']}
        >
            <h1 className="text-xl font-bold text-titulo">Entrar no BAT</h1>
            <p className="mt-1 text-sm text-suave">Use o e-mail e a senha da sua conta.</p>

            <form onSubmit={handleLogin} className="mt-6 space-y-4">
                <Input
                    label="E-mail"
                    type="email"
                    placeholder="nome@tijucaalimentos.com.br"
                    required={false}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <CampoSenha
                    label="Senha"
                    placeholder="Digite sua senha"
                    required={false}
                    value={senha}
                    onChange={handleSenhaChange}
                    visivel={mostrarSenha}
                    onAlternar={handleToggleMostrarSenha}
                />

                {erro && <p role="alert" className="text-center text-sm text-alerta">{erro}</p>}

                <Botao type="submit" className="w-full" text="Entrar" />
            </form>

            <p className="mt-5 text-center text-sm text-suave">
                Ainda não tem conta? <Link to="/cadastro" className="font-bold text-ok hover:underline">Criar conta</Link>
            </p>
        </AuthLayout>
    );
}
