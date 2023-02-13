import { useState } from "react"

export function TwitterFollowCard({ userName = 'unknown', name, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-FollowCard-btn is-following' : 'tw-followCard-btn';

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="twitter-card">
            <header className="twitter-card-header" >
                <img className="twitter_profile-img" src={`https://unavatar.io/${userName}`} alt="El avatar muestra" />
                <div className="twitter-card_user-info-container">
                    <strong className="twitter-card_user-name">{name}</strong>
                    <span className="twitter-card_user-username">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={`twitter_btn ${text}`} onClick={handleClick}>
                    <span className="twitter-text">{text}</span>
                    <span className="twitter-stopFlollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}