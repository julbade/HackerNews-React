import React from 'react';


function NewPost() {
  
  let _post = null;
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    _post.value = '';
    _post.title = '';
  }

  return (
    <div>
      <style jsx>{`

            background-color: #f6f6ef;
            width: 100%;
            height: auto;
            
            textarea {

             margin-top: 20px;
              vertical-align: center;
              width:400px;
              height: 200px;
            }
            button {
              width: 100px;
            }
          

       `}</style>
      <form onSubmit={handleNewPostFormSubmission}>
      <input
        type='text'
        placeholder='Title'
        ref={(input) => {_post = input;}}/>
        />
        <textarea
          type='text'
          id='post'
          placeholder='Fuck this shit'
          ref={(textarea) => {_post = textarea;}}/>
          <br/>
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}
export default NewPost;