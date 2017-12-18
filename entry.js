import React from 'react'
import ReactDOM from 'react-dom'

import './style/reset.css'
import './style/find.css'
import './style/banner.css'
import './style/nav.css'
import './style/ad.css'

import Find from './components/find.js'
import Banner from './components/banner.js'
import Nav from './components/nav.js'
import Ad from './components/ad.js'

class App extends React.Component{
	render(){
		return(
			<div>
				<Ad/>
				<Nav/>
				<Banner/>
				<Find/>
			</div>
		)
	}
}


ReactDOM.render(<App/>,document.getElementById('out'))