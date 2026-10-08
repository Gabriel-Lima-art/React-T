import { Navigate } from 'react-router';
import { useAuth } from '../../contexts/authContext'; 

export default function RotaPrivada({ children }) {
    const { authenticated, loading } = useAuth();

    if (loading) return <p>Carregando...</p>;
    if (!authenticated) return <Navigate to="/login" replace />;

    return children;
}