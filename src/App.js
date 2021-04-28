import './App.css';
import {useEffect} from 'react'
function App() {
let users =[]
let url='https://randomuser.me/api/?results=15&exc=login,info,registered,id&noinfo'
useEffect(()=>{
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
    users=data.results
  })
  .catch(error=>console.log(error))
})
  return (
    <div>
      <h1>Hi Thanks for checking in!</h1>
    </div>
  );
}

export default App;
