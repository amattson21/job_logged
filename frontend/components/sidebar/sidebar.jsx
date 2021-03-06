import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
    this.home = this.home.bind(this);
    this.profile = this.profile.bind(this);
    this.coverLetter = this.coverLetter.bind(this);
    this.logout = this.logout.bind(this);
	}

	home() {
		hashHistory.push('/');
	}

	profile() {
		hashHistory.push('/profile');
	}

	coverLetter() {
		hashHistory.push('/cover-letter');
	}

  logout() {
    this.props.logout();
		$('.select2').remove();
		hashHistory.push('/login');
  }

	setClass(path){
		if (this.props.location.pathname === path) {
			return 'current-page';
		}
	}

	render() {
		let path = this.props.location.pathname;
		if (path === '/login' || path ==='/signup') {
			return (<div></div>);
		} else {
			return (
				<div className='sidebar' id='sidebar'>
					<ul>
						<li id='home' onClick={this.home} className={this.setClass('/')}>
							<i className="fa fa-home"></i>
							<span>Home</span>
						</li>
						<li id='profile' onClick={this.profile} className={this.setClass('/profile')}>
							<i className="fa fa-user"></i>
							<span>Profile</span>
						</li>
						<li id='coverLetter' onClick={this.coverLetter} className={this.setClass('/cover-letter')}>
							<i className="fa fa-pencil"></i>
							<span>Cover Letter</span>
						</li>
						<li>
							<i className="fa fa-sign-out"></i>
							<span onClick={this.logout}>Logout</span>
						</li>
					</ul>
				</div>
			);
		}
	}

}

export default SessionForm;
