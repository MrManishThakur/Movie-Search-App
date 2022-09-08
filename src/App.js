import { Container } from '@mui/material';
import './App.css'
import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Trending from './components/Pages/Trending/Trending';
import Movies from './components/Pages/Movies/Movies';
import TvSeries from './components/Pages/TvSeries/TvSeries';
import Search from './components/Pages/Search/Search';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header/>
      <div className='app'>
        <Container>
          <Routes>
            <Route path="/" element={<Trending/>} exact />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/series" element={<TvSeries/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
