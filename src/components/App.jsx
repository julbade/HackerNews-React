import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import NewPost from './NewPost';



function App(){
  var styles = {
  };
  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      
      <Header/>
      <Switch>
        <Route exact path='/' component={NewPost} />
      </Switch>
    </div>
  );
}



export default App;
