import { useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import api from '../../lib/axios';

export default function RotaPrivada({ children }) {
    const [status, setStatus] = useState('carregando');

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            setStatus('negado');
            return;
        }

        api.get('/usuarios/me')
            .then(() => setStatus('ok'))
            .catch(() => {
                localStorage.removeItem('token');
                setStatus('negado');
            });
    }, []);

    if (status === 'carregando') return <p>Carregando...</p>;
    if (status === 'negado') return <Navigate to="/login" replace />;

    return children;
}