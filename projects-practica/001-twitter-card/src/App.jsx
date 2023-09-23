import './App.css'
import TwitterCard from './TwitterCard'

const users = [
  {
  userName: 'midudev',
  name: 'Miguel Angel',
  isFollowing: true
  },
  {
  userName: 'pheralb',
  name: 'Pablo H',
  isFollowing: false
  },
  {
  userName: 'pacohdezs',
  name: 'Paco Hdez',
  isFollowing: false
  },
  {
  userName: 'TmChein',
  name: 'Tomás Angel',
  isFollowing: false
  }
]

function App() {

  return (
    <>
      <section className='tw-body'>
        {
       users.map(user => {
        const {userName, name, isFollowing} = user
        return (
          <TwitterCard
          userName={userName}
          name={name}
          isFollowing={isFollowing}
          key={userName}
          />
        )
       })
      }
      </section>
    </>
  )
}

export default App
