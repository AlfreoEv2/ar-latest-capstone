import { Route, Routes } from 'react-router-dom'
import CubeContainer from './components/cube/CubeContainer';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CubeContainer />}>

      </Route>
    </Routes>
  );
}

export default App
