import React,{useState} from 'react';
import { useHistory } from 'react-router';
import {Container, Menu } from 'semantic-ui-react';
import CartSummary from './CartSummary'
import SignedIn from './SignedIn';
import SignesOut from './SignesOut';
import { useSelector } from 'react-redux';

export default function Navi() {
    const { cartItems } = useSelector(state => state.cart)
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history =useHistory()
    function handleSignedOut(params){
        setIsAuthenticated(false)
    }
    function handleSignedIn(params) {
        setIsAuthenticated(false)
        history.push("/")
    }
    return (
        <div>


            <Menu inverted fixed size='mini top'>
                <Container>
                    <Menu.Item  name='home' />
                    <Menu.Item name='messages'/>

                    <Menu.Menu position='right'>

                        {cartItems.length>0&& <CartSummary/>}
                        {isAuthenticated ? <SignedIn signOut= {handleSignedOut}/> : <SignesOut signIn={handleSignedIn} /> }
                        
                        
                    </Menu.Menu>
                </Container>
            </Menu>


        </div>
    )
}
