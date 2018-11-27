import React from 'react';

class PostControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          formVisibleOnPage: false
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(){
        this.setState({formVisibleOnPage: true});
      }

  render(){
    return (
      <div>
       <strong onClick={this.handleClick}>Click me to change my state!</strong>
      </div>
    );
  }
}

export default PostControl;