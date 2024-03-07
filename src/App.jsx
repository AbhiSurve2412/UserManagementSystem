import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home';
import { UserContextProvider } from "./Components/Context/userContext";
import Table from './Components/Table';
import ViewUser from './Components/ViewUser';
import EditForm from './Components/EditForm';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <UserContextProvider>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/users" element={<Table/>}/>
      <Route path="/users/:id" element={<ViewUser/>}/>
      <Route path="edit/users/:id" element={<EditForm/>}/>
     </Routes>
    </UserContextProvider>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
