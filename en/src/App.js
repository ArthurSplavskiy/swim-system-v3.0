import React, { useState } from 'react'
import Home from './pages/Home'
//import NotFound from './pages/NotFound'
//import { BrowserRouter, Route, Switch, Redirect  } from "react-router-dom";


function App() {
  const [loading, setLoading] = useState(true)
  
  //const windowWidth = window.innerWidth

  // window.addEventListener('resize', (e) => {

  //   if(windowWidth !== e.target.innerWidth) {
  //     window.location.reload(true);
  //   }
    
  // })
  // <BrowserRouter>
  //     <Switch >
  //       <Route exact path='/' render={(props) => <Home {...props} loading={loading} setLoading={setLoading} />} />
  //       <Route path='/404' render={(props) => <NotFound {...props} setLoading={setLoading} />} />
  //       <Route path='/en' />
  //       <Redirect to='/' />
  //     </Switch>
  // </BrowserRouter>
  
  return (
      <Home loading={loading} setLoading={setLoading} />
  );
}

export default App;
