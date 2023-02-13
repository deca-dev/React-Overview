export function TwitterFollowCard ({username, name, isFollowing}) {
    return (
        <article>
            <header>
                <img src={`https://unavatar.io/${username}`} alt="El avatar muestra" />
                <div>
                    <strong>{name}</strong>
                    <span>{username}</span>
                </div>
            </header>
            <aside>
                <button>Seguir</button>
            </aside>
        </article>
    )
}