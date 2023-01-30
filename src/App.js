
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

document.addEventListener("wheel", function(event){
  if(document.activeElement.type === "number"){
      document.activeElement.blur();
  }
});

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
