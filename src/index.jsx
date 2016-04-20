var React = require('react')
var ReactDOM = require('react-dom')

import App from './components/app'

let appNode = document.createElement('div')
document.body.appendChild(appNode)

ReactDOM.render(<div>Hello world!<App /></div>, appNode)
