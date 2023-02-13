import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <>
        <TwitterFollowCard
        isFollowing
        username='midudev'
        name= 'Miguel Ángel'
        />
        <TwitterFollowCard
        isFollowing={false}
        username='Ernesto1'
        name= 'Ernesto Castro'
        />
        <TwitterFollowCard
        isFollowing={false}
        username='vxnder'
        name= 'Vanderhart'
        />
        <TwitterFollowCard
        isFollowing={false}
        username='elonmusk1'
        name= 'Elon Musk'
        />
        </>

    )
}