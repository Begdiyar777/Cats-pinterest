import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Home } from './Pages/Home'
import { Favorites } from './Pages/Favorites'
import { usePreferences } from "./Hooks/usePreference";

function App() {
  const {favorites, addToFavorites, removeFromFavorites} = usePreferences()
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={
          <Home 
            favorites={favorites} 
            addToFavorites={addToFavorites} 
            removeFromFavorites={removeFromFavorites} 
          />} 
        />
        <Route path='/favorites' element={
        <Favorites 
          favorites={favorites} 
          removeFromFavorites={removeFromFavorites} 
        />} />
      </Routes>

    </>
  );
}

export default App;
