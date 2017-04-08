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

      // need setState to update text input's value
      this.setState({
        channelName: ''
      });

      this.props.addChannel(channelName);

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
// Best place to store the channels object, since it's a common parent
/* how's the ChannelForm going to add a channel and show in ChannelList?
 *  1, create a addChannel() function in the ChannelSection
 *  2, pass the addChannel() function to the ChannelForm as a property
 *  3, in the ChannelForm's onSubmit() handler, call the passed addChannel() function
 */
class ChannelSection extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      channels: [
        {name: 'Hardware Support'},
        {name: 'Software Support'}
      ]
    };
  }

  addChannel(name){
    let {channels} = this.state;
    channels.push({name: name});
    this.setState(
      {
        channels: channels
      }
    );
  }

  render() {
    return (
      <div>
        <ChannelList channels={this.state.channels}/>
        <ChannelForm addChannel={this.addChannel.bind(this)}/>
      </div>
    )
  }
}

// Render component <Channel/> to div with id:app
ReactDOM.render(<ChannelSection/>, document.getElementById('app'));