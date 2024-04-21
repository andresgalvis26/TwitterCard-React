import { useEffect, useState } from 'react'; // Importa los hooks useEffect y useState desde React

function TwitterFollowCard({ children, formatUserName, userName = 'unknown', initialIsFollowing }) {

    // Estado para saber si se está siguiendo o no
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing); // Define un estado para el estado de seguir

    const [avatarUrl, setAvatarUrl] = useState(''); // Define un estado para la URL del avatar

    // Texto con operador ternario para el botón de seguir
    const text = isFollowing ? 'Siguiendo' : 'Seguir';

    // Clase del botón de seguir basado en el estado de seguir
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    // Manejador de clic para cambiar el estado de seguir
    const handleClick = () => {
        setIsFollowing(!isFollowing); // Cambia el estado de seguir al contrario del estado actual
    }

    // Efecto para actualizar la URL del avatar cuando cambia el nombre de usuario
    useEffect(() => {
        const avatarUrl = `https://i.pravatar.cc/300?u=${userName}`; // Genera la URL del avatar basada en el nombre de usuario
        setAvatarUrl(avatarUrl); // Actualiza la URL del avatar
    }, [userName]); // Se ejecuta este efecto cada vez que cambia el nombre de usuario

    return (
        // Renderiza la tarjeta de seguidor
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={avatarUrl}
                    alt="Avatar del usuario" /> {/* Muestra el avatar del usuario */}
                <div className='tw-followCard-info'>
                    <strong>{children}</strong> {/* Muestra el contenido del children (nombre del usuario) como texto en negrita */}
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span> {/* Muestra el nombre de usuario formateado */}
                </div>
            </header>

            <aside>
                {/* Botón para seguir o dejar de seguir */}
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>
                        {text}
                    </span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}

export default TwitterFollowCard; // Exporta el componente TwitterFollowCard para su uso en otros archivos
