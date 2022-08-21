import {useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import Payment from './Payment';
import Orders from './Orders';
import {Switch, Route} from 'react-router-dom';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51LYw5PSBUltkCUcXu6c0qaDslVJrbst0AuR4HLbttLRanICoPr0PqFGwVmJUpkO3wH9fzPi2ZvDkGlcmuUjvg54Z00rRsFpcQL");

function App() {
    const[{}, dispatch] = useStateValue();

    useEffect( () => {
      auth.onAuthStateChanged(authUser => {
            console.log('the user is >>>', authUser);
            if(authUser){
                dispatch({
                  type:'SET_USER',
                  user: authUser
                })
            }else{
                dispatch({
                    type:'SET_USER',
                    user: null
                })
            }
      })
    },[]);

  return (
    <div>

      <Switch>
          <Route path='/orders'>
            <Header/>
            <Orders/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/checkout'>
             <Header/>
             <Checkout/>
          </Route>
          <Route path='/payment'>
             <Header/>
             <Elements stripe={promise}>
                <Payment/>
             </Elements>
          </Route>
         <Route path='/'>
             <Header/>
             <Home/>
         </Route>

      </Switch>
    </div>
  );
}

export default App;
