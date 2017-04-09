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
    * Front end project structure: docs/project-structure.jpg
        * Front end build setup (docs/frontend-build-process.jpg)
            * tools: browserify & webpack(*)
            * running webpack: build the dependency of all JSX files and convert them to ES2015 syntax with babel
            ```
            $ npm install webpack -g
            $ webpack <entryfile> <outputfile>
            ex: $ webpack ./index.js bundle.js

            if don't want to webpack as above, create the config file: webpack.config.js
            $ npm uninstall webpack babel-loader@5.3.3 --save-dev
            remember to install an older loader to avoid existing bugs.
            $ webpack

            this will automatically re-build the bundle.js file
            $ npm install webpack-dev-server -g
            $ webpack-dev-server
            ```
            * component hierarchy:
                * app.js =>
                    * user-section.js
                    * channel-section.js
                    * msg-section.js
            * create Channel, ChannelList, ChannelForm, ChannelSection components following the project structure
                * $ npm install react --save-dev
                * $ npm install react-dom --save
                * channel-form.js: use ref instead of state object o access the typed input
                * highlight the selected channel: need to set <li className="active"...> inside channel.js
                    * since we already save the active channel in state object, just need to pass as prop then use "activeChannel===channel"
    * Connecting The Front End To The Back End
        * ways: web sockets; flash sockets; polling; long polling...;
        * web socket: communication protocol for server<->browser
            * server could send data to the client without client polling the server
            * more efficient than polling
            * steps

            ```
            create a WebSocket:
            let ws = new WebSocket('ws://site.com'); // server address

            WebSocket Events:
            ws.onmessage = (e) => {}
            ws.onopen = () => {}
            ws.onclose = () => {}
            ws.onerror = () => {}

            send message:
            ws.send('message to send...');

            message format:
            let msg = {
                name: 'event identifier', // based on this, the receiver will know how to process the message
                data: {...}
            };
            ws.send(JSON.stringify(msg));

            use http://websocket.org/echo.html as the WebSocket server address to test.
            so you send a message to this address, it'll echo back to you.
            ```

            * Where in this app to create WebSocket?
                * React lifecycle hooks: docs/react-lifecycle-hooks.jpg
                * componentDidMount: called once after render


* Tools
    * [Babel](https://babeljs.io/): transfer latest JS code syntax to ES2015