import React from 'react'
import ReactDOM from 'react-dom'

import './style/reset.css'
import './style/find.css'
import './style/banner.css'

import Find from './components/find.js'
import Banner from './components/banner.js'

class App extends React.Component{
	render(){
		return(
			<div>
				<Find/>
				a
				<Banner/>
			</div>
		)
	}
}


ReactDOM.render(<App/>,document.getElementById('out'))