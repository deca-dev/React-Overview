import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHdzs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomás',
        isFollowing: false
    }
]

export function App () {
    return (
        <section>
        {
            users.map(user => {
                const {userName, name, isFollowing} = user
                return (
                    <TwitterFollowCard
                    userName = {userName}
                    initialIsFollowing = {isFollowing}
                    name = {name}
                    key = {userName}

                    />
                )
            })
        }
        </section>

    )
}