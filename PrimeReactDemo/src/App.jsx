
import './App.css'



import 'primereact/resources/themes/saga-blue/theme.css'; // Choose your theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'




import { Menubar } from 'primereact/menubar';
import UserList from './components/UserList';
// import Greet from './components/Greet';
// import Counter from './components/Counter';
        


        
function App() {


  return (
    <div className="App">
      
      <Menubar className='bg-blue-400 p-4 text-3xl'  start="Prime React Crash Course"/>
      {/* <Counter/> */}
      {/* <Greet/> */}
      <UserList/>
    </div>
  )
}

export default App
