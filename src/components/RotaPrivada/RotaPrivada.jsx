import { Navigate } from 'react-router';
import { useAuth } from '../../contexts/authContext'; 

export default function RotaPrivada({ children }) {
    const { authenticated, loading } = useAuth();


    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <p>Carregando...</p>
            </div>
        );
    }

    if (!authenticated) {
        return <Navigate to="/login" replace />;
    }

 
    return children;
}