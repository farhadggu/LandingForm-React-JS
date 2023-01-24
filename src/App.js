
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <Navbar />
      <HomePage />
      <ToastContainer position='top-center' />
    </>
  );
}

export default App;
