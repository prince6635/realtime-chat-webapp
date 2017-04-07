// https://babeljs.io/ -> "Try it out": convert the following JSX code to normal JS function
class Channel extends React.Component{

  onClick(){
    console.log('I was clicked', this.props.name);
  }

  render(){
    return(
      // need to .bind(this), so inside onClick, it can access this.xxx
      <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
    )
  }
}

// Render component <Channel/> to div with id:app
ReactDOM.render(<Channel name="Hardware Support"/>, document.getElementById('app'));