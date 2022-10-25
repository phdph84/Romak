import React from 'react';
import { Route,Switch, Redirect} from "react-router-dom";
import { GlobalStyle } from './global.styles';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage.component';
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from './Redux/user/user.selectors'
import SignInSignUp from './pages/Sign-In-Sign-Up/Sign-In-Sign-Up.component';
import { connect } from 'react-redux';
import Header1 from './component/Header1/Header1.component';
// import WithSpinner from './component/With-Spinner/With-Spinner.component';
import ProductsPage from './pages/Products/ProductsPage';
const App =({currentUser })=>{


 
  
  
 
   return(
     <div>
    <GlobalStyle/>
    <ToastContainer style={{marginTop:"80px"}} rtl={true} position="top-right" theme='colored'/>
    <Header1/>

    <Switch>
     <Route  exact path="/" component={HomePage}  />    
      {
      (currentUser && currentUser.userAuth && <Route exact path='/products' component={ProductsPage} /> )
      
      }
     <Route exact path='/signin' render={()=> currentUser ? (<Redirect to='/'/>):(<SignInSignUp/> )    } />
    </Switch>
    </div>)
  }

const mapStateToProps =createStructuredSelector({
   currentUser: selectCurrentUser,
})


export default connect(mapStateToProps)(App);
