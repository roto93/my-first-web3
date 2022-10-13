import { useEffect, useState } from 'react'
import './css/App.css'
import Web3 from 'web3'

function App() {
  const [account, setAccount] = useState('');
  const [network, setNetwork] = useState('');
  const [balance, setBalance] = useState(0);

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

    const loadBalance = async () => {
      const network = await web3.eth.net.getNetworkType()
      const balance = await web3.eth.getBalance(account) // given in Wei
      setNetwork(network)
      console.log(network)
      setBalance(balance)
    }
    if (!account) {
      loadAccount()
    } else loadBalance()
  }, [account])

  return (
    <div className="App">
      <header className='header'>
        <h2>My First Web3 </h2>
        <p className="account">My Account: {account}</p>
        <p>The Network used: {network}</p>
        <p>My Balance: {balance / 1000000000} GWei</p>
      </header>
    </div>
  )
}

export default App
