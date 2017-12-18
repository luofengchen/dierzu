import React from 'react';
import '../style/nav.css';

class Nav extends React.Component{
	render(){
		return(
			<div>
				<div className="nav_wrap">
					<div className="nav">
						<ul className="nav_right">
							<li className="nav_right_login">
								<a href="#">您好,请登录</a>
								&nbsp;&nbsp;
								<a href="#" className="nav_right_register">免费注册</a>
							</li>
							<li className="nav_spacer"></li>
							<li>我的订单</li>
							<li className="nav_spacer"></li>
							<li>我的京东</li>
							<li className="nav_spacer"></li>
							<li>京东会员</li>
							<li className="nav_spacer"></li>
							<li>企业采购</li>
							<li className="nav_spacer"></li>
							<li>客户服务</li>
							<li className="nav_spacer"></li>
							<li>网站导航</li>
							<li className="nav_spacer"></li>
							<li>手机京东</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Nav;