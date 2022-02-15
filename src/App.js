import './App.css';
import {useState} from 'react'
import { firebaseConfig } from './auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app' 
import axios from 'axios'

function App() {
const [nome, setNome] = useState()
const [email, setEmail] = useState()
const [senha, setSenha] = useState()
const [cargo, setCargo] = useState()
const [numeroCelula, setNumeroCelula] = useState()
const [rede, setRede] = useState()
const [pastor, setPastor] = useState()
const [discipulador, setDiscipulador] = useState()

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);
  

  const disparo = () => {
    createUserWithEmailAndPassword(auth, email, senha)
    users()
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        // alert('deu certo')
        // ...
      })
      // .catch((error) => {
      // alert('deu erro')
      //   // ..
      // });
  }

  const users = () =>{
    axios.post(`https://app-ibav-f06f4-default-rtdb.firebaseio.com/users.json`, {
      nome, email, senha, cargo, numero_celula: numeroCelula, rede, pastor, discipulador
    })
      .then(res => {
        alert('deu certo')
      })
      .catch((error) => {
        alert('deu erro')
        });
  }


  return (
    <div className="App">
      <h1>Formulário de cadastro</h1>
      <form>
        <div>
          <label>Nome Completo:</label>
          <input onChange={(e) =>{setNome(e.target.value)}} />
        </div>
        <div><label>Email:</label>
          <input onChange={(e) =>{setEmail(e.target.value)}} /></div>
        <div> <label>Senha:</label>
          <input onChange={(e) =>{setSenha(e.target.value)}} /></div>
        <div> <label>Cargo:</label>
          <input onChange={(e) =>{setCargo(e.target.value)}}/></div>
        <div>  <label>Numero da Célula:</label>
          <input onChange={(e) =>{setNumeroCelula(e.target.value)}} /></div>
        <div> <label>Rede:</label>
          <input onChange={(e) =>{setRede(e.target.value)}}/></div>
        <div> <label>Pastor:</label>
          <input onChange={(e) =>{setPastor(e.target.value)}} /></div>
        <div> <label>Discipulador:</label>
          <input onChange={(e) =>{setDiscipulador(e.target.value)}} /></div>
          <button onClick={(e) =>{e.preventDefault()
            disparo()}}>Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
