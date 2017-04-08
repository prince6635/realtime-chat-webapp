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

// Channel form for entering a new channel
class ChannelForm extends React.Component{

    constructor(props){
      super(props);
      this.state = {}; // since the first the page loads, this.state is null.
    }

    onChange(e) {
      // this.state.channelName = e.target.value won't work
      this.setState({
        channelName: e.target.value
      });
      console.log(e.target.value);
    }

    onSubmit(e) { // e: event
      // let channelName = this.state.channelName;
      // or the new syntax:
      let {channelName} = this.state;
      console.log(channelName);

      channels.push({
        name: channelName
      });

      // need setState to update text input's value
      this.setState({
        channelName: ''
      });

      e.preventDefault(); // prevent from submitting the form via http
    }

    render(){
      return(
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" onChange={this.onChange.bind(this)} value={this.state.channelName}/>
        </form>
      )
   }
}

// Root component that includes ChannelList and ChannelForm
class ChannelSection extends React.Component {
  render() {
    return (
      <div>
        <ChannelList channels={channels}/>
        <ChannelForm/>
      </div>
    )
  }
}

// Render component <Channel/> to div with id:app
ReactDOM.render(<ChannelSection/>, document.getElementById('app'));