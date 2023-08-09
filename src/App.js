import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Recommend from './components/screens/inner-screens/Recommend';
import Menu from './components/screens/Menu';
import Breakfast from './components/screens/inner-screens/Breakfast';
import Lunch from './components/screens/inner-screens/Lunch';
import Dinner from './components/screens/inner-screens/Dinner';
import IceCream from './components/screens/inner-screens/IceCream';
import Coffee from './components/screens/inner-screens/Coffee';
import FoodSite from './components/screens/FoodSite';
import Favourites from './components/screens/Favourites';
import WhiteCard from './components/screens/WhiteCard';
import Cart from './components/screens/Cart';
import Settings from './components/screens/Settings';
import Profile from './components/screens/Profile';
import Details from './components/screens/Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Recommend />} />
        <Route exact path='/menu' element={<Menu />} >
            <Route index element={<Recommend />} />
            <Route path='/menu/recommend' element={<Recommend />} />
            <Route path='/menu/breakfast' element={<Breakfast />} />
            <Route path='/menu/lunch' element={<Lunch />} />
            <Route path='/menu/dinner' element={<Dinner />} />
            <Route path='/menu/iceCream' element={<IceCream />} />
            <Route path='/menu/coffee' element={<Coffee />} />
        </Route>
        <Route path='foodSite' element={<FoodSite />} />
        <Route path='favourites' element={<Favourites />} />
        <Route path='whiteCard' element={<WhiteCard />} />
        <Route path='cart' element={<Cart />} />
        <Route path='settings' element={<Settings />} />
        <Route path='profile' element={<Profile />} />
        <Route path='details' element={<Details />} />

      </Routes>
    </Router>
  )
  
    
}

export default App;
