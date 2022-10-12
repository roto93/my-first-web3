import { useEffect, useState } from 'react'
import './css/App.css'
import Web3 from 'web3'

function App() {
  const [account, setAccount] = useState('');

  const onAccountInputChange = (e) => {
    setAccount(e.target.value)
  }

  useEffect(() => {
    const GANACHE_URL = 'http://localhost:8545'
    const web3 = new Web3(Web3.givenProvider || GANACHE_URL)

    const loadAccount = async () => {
      const accounts = await web3.eth.requestAccounts()

      setAccount(accounts[0])
    }

    loadAccount()
  }, [])

  return (
    <div className="App">
      <header className='header'>
        <h2>My First Web3 </h2>
        <p className="account">Account: {account}</p>
        <input type="text" className="account__input" onChange={onAccountInputChange} />
      </header>
    </div>
  )
}

export default App
