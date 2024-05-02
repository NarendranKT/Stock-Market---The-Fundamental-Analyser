import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Dashboard from './pages/Dashboard';
import Nav from './components/Nav';
import AllNews from './pages/AllNews';
import Stock from './pages/Stock';


const App = () => {
  return <>
    <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/learn' element={<Learn/> } />
            <Route path='/news' element={<AllNews />} />
            <Route path='/chart/:stock' element={<Stock/>}/>
          </Routes>
    </BrowserRouter>
  </>;
};

export default App;
