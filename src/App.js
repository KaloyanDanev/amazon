import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Checkout from "./components/checkout/Checkout";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

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
                    <Route path='/checkout'>
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path='/login'>
                        <Login />
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