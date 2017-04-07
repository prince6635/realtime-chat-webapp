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

let channels = [
  {name: 'Hardware Support'},
  {name: 'Software Support'}
];

// Parent component of Channel
class ChannelList extends React.Component{
  render(){
    return(
      <ul>
        {this.props.channels.map(channel => {
          return (
            <Channel name={channel.name}/>
          )
        })}
      </ul>
    )
  }
}

// Render component <Channel/> to div with id:app
ReactDOM.render(<ChannelList channels={channels} />, document.getElementById('app'));