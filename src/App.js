import './App.css'
import GlobalStateContext from './context/GlobalStateContext'
import Rutas from './routes/Rutas';
import Home from './views/Home';

function App() {
  return (
    <>
      <GlobalStateContext>
        <Rutas/>
      </GlobalStateContext>
    </>
  );
}

export default App
