import React from 'react'; // Importa la biblioteca React
import './App.css'; // Importa el archivo de estilos CSS para el componente App
import TwitterFollowCard from './TwitterFollowCard'; // Importa el componente TwitterFollowCard

function App() {
    // Función para formatear el nombre de usuario
    const formatUserName = (userName) => `@${userName}`;

    // Lista de usuarios con información sobre su nombre, nombre de usuario y si se está siguiendo o no
    const users = [
        // Ejemplos de usuarios
        { id: 1, name: 'Jorge de la Cruz', userName: 'jorgedelacruz', isFollowing: true },
        { id: 2, name: 'Marina Rivera', userName: 'marinarivera', isFollowing: false },
        { id: 3, name: 'Natalia Roa', userName: 'nataliaroa', isFollowing: false },
        { id: 4, name: 'Sergio Sánchez', userName: 'sergiosanchez', isFollowing: true },
        { id: 5, name: 'Marta Soto', userName: 'martasoto', isFollowing: true },
        { id: 6, name: 'Luisa López', userName: 'luisalopez', isFollowing: false },
        { id: 7, name: 'Carlos García', userName: 'carlosgarcia', isFollowing: true },
        { id: 8, name: 'David Martínez', userName: 'davidmartinez', isFollowing: false }
    ];

    return (
        // Renderiza el contenido principal de la aplicación
        <section className='App'>
            <h1 className='tw-followCard-title'>A quién seguir:</h1>
            {/* Mapea sobre la lista de usuarios y renderiza una tarjeta de seguidor para cada usuario */}
            {
                users.map((user) => {
                    const { id, name, userName, isFollowing } = user;
                    return (
                        <TwitterFollowCard
                            key={id} // Clave única para cada tarjeta de seguidor
                            formatUserName={formatUserName} // Función para formatear el nombre de usuario
                            userName={userName} // Nombre de usuario del usuario
                            initialIsFollowing={isFollowing} // Estado inicial de si se está siguiendo o no
                        >
                            {name} {/* Nombre del usuario dentro de la tarjeta de seguidor */}
                        </TwitterFollowCard>
                    );
                })
            }
        </section>
    );
}

export default App; // Exporta el componente App para su uso en otros archivos
