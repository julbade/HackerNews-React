import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx>
        {`  
            div {
            margin: 1px;
            padding: 5px;
            background-color:  #ff6600;
            font-size: 10px;
            display: flex;
            }
            

            ul {
            list-style-type: none;
            display: flex;
            }
            li {
                margin-left: 10px;
                font-size: 12px;
                
            }
            
        `}</style>
      <h3>Hacker News</h3>
        <ul>
            <li><Link to="/">new</Link></li>
            <li><Link to="/">comment</Link></li>
        </ul>
    </div>
  );
}
export default Header;