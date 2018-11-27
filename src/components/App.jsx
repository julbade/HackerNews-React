import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import NewPost from './NewPost';
import Comment from './Comment';
import Show from './Show';
import PostControl from './PostControl';
import Error404 from './Error404';





function App(){
  
  return (
    <div>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      
      <Header/>
      <Switch>
        <Route  exact path='/' component={Show} />  
        <Route  path='/newpost' component={PostControl} />
        <Route  path='/comment' component={Comment}/>
        <Route component={Error404} />
        

      </Switch>
      
    </div>
  );
}



export default App;
