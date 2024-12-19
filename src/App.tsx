import './App.css'
import Navbar from './Components/Navbar.tsx'
import Textarea from './Components/Textarea.tsx';
function App() {

  return (
    <>

    <Navbar title="TextUtills" about="About Us"/>
    <div className="container">
      <Textarea/>
    </div>

    </>
  );
}

export default App
