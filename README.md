# Realtime Chat Web App
- docs/app-overview.jpg

* React (mainly a concept and a library just secondly, only for UI):
    * Fast
    * Virtual Dom
    * Simple
* Golang: Designed for concurrency
* RethinkDB: for realtime app
* Steps
    * React tutorial: react-tutorial/index.html
        * text/babel tells browser.js to load app.js react code to the html page.
        * channel component: docs/channel-component.jpg
        * run
        ```
        $ npm install -g serve
        $ cd react-tutorial
        $ serve
        ```
        * pass values between components: this.props.someAttr
        * how to access what was typed into the input field?
            * store the keyed value in the "State object": need to use this.setState ("this.state.xxx = xxx" won't work)
        * place new channel in state: Because items modified in state will triggera new render cycle
        * how's the ChannelForm going to add a channel and show in ChannelList?
            * 1, create a addChannel() function in the ChannelSection
            * 2, pass the addChannel() function to the ChannelForm as a property
            * 3, in the ChannelForm's onSubmit() handler, call the passed addChannel() function

* Tools
    * [Babel](https://babeljs.io/): transfer latest JS code syntax to ES2015