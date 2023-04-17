import './App.css';
import { ethers } from 'ethers';
import Abi from './artifacts/contracts/Lock.sol/Lock.json'
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [decimals, setDecimals] = useState(18);
  const [supply, setSupply] = useState(1000);
  const [status, setStatus] = useState("");

  async function mintTokens() {
    try {
      const url = "http://localhost:8545";
      const provider = new ethers.providers.JsonRpcProvider(url);
      const signer = provider.getSigner();
      const contract = new ethers.ContractFactory(Abi.abi, Abi.bytecode, signer);
      const tx = await contract.deploy(name, symbol, decimals, supply);
      const currentContract = new ethers.Contract(
        tx.address,
        Abi.abi,
        provider
      )
      const result_name = await currentContract.name();
      const result_symbol = await currentContract.symbol();
      const result_sypply = await currentContract.totalSupply();
      const result_decimals = await currentContract.decimals();
      
      console.log(`      Name of Token:${result_name},
      Symbol of Token:${result_symbol},
      TotalSupply of Token:${result_sypply}
      Decimals of Token:${result_decimals}`)

      setStatus(`Token Mined`);
    } catch (err) {
      console.error(err);
      setStatus("Error minting tokens");
    }
  }
  return (
    <div>
    <h1>Mint Your Own Token</h1>
    <form>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Symbol:
        <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
      </label>
      <br />
      <label>
        Decimals:
        <input type="number" value={decimals} onChange={(e) => setDecimals(parseInt(e.target.value))} />
      </label>
      <br />
      <label>
        Initial Supply:
        <input type="number" value={supply} onChange={(e) => setSupply(parseInt(e.target.value))} />
      </label>
      <br />
      {/* <label>
        Contract Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label> */}
      <br />
      <button type="button" onClick={mintTokens}>Mint Tokens</button>
      <div>{status}</div>
      </form>
    </div>
  );
}
export default App;