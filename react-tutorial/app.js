// https://babeljs.io/ -> "Try it out": convert the following JSX code to normal JS function
class Channel extends React.Component{
  render(){
    return(
      <li>Channel Names</li>
    )
  }
}

// Render component <Channel/> to div with id:app
ReactDOM.render(<Channel/>, document.getElementById('app'));