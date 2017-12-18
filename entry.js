import React from 'react'
import ReactDOM from 'react-dom'

import './style/reset.css'
import './style/find.css'

import Find from './components/find.js'
class App extends React.Component{
	render(){
		return(
			<div>
				<Find/>
			</div>
		)
	}
}


ReactDOM.render(<App/>,document.getElementById('out'))