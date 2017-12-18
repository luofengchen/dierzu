import React from 'react';
import '../style/ad.css';

class Ad extends React.Component{
	render(){
		return(
			<div>
				<div className="ad_wrap">
					<div className="ad">
						<a href="#" className="ad_lk"></a>
					</div>
				</div>
			</div>
		)
	}
}

export default Ad;
