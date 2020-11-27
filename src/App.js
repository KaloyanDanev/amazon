import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Checkout from "./components/checkout/Checkout";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";
import Payment from "./components/payment/Payment";
import { loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/orders/Orders";

const promise = loadStripe('pk_test_51Houp9JH02wEGVYcJpJ1O5vajfrbPVtdVj5RJKBUgYP0Qy8M17DSFrakCyJBtzwNzjhxQlT4S2oMyLjs3jiDbnbd00HXkZfCQu');


function App() {
    const [{ basket }, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser){
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            }else{
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })

        return () => {
            unsubscribe();
        }

    }, [])

    return (
        <Router>
            <div className='app'>
                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/orders'>
                        <Header />
                        <Orders />
                    </Route>
                    <Route path='/checkout'>
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path='/payment'>
                        <Header/>
                        <Elements stripe={promise}>
                            <Payment/>
                        </Elements>
                    </Route>
                    <Route path='/'>
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;