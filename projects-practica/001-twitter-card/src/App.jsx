import './App.css'
import TwitterCard from './TwitterCard'

function App() {
  

  return (
    <>
      <section className='tw-body'>
        <TwitterCard
        name = {'David Ernesto Castro'}
        userName = {'pheralfb'}
        />
        <TwitterCard
        name = {'Miguel Angel Duran'}
        userName = {'midudev'}
        />
      </section>
    </>
  )
}

export default App
