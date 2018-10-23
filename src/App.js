import React from 'react';
import image from "./images/cloud-upload-download-data-transfer.svg";
import Collapsible from "./components/Collapsible";

import "./scss/App.css";



class App extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			contacts: []
		}
	}

	componentWillMount() {
		localStorage.getItem("contacts") && this.setState({
			contacts: JSON.parse(localStorage.getItem("contacts")),
			isLoading: false
		});
	}

	componentDidMount() {

		const date = localStorage.getItem("contactsDate");
		const contactsDate = date && new Date(parseInt(date));
		const now = new Date();

		const dataAge = Math.round((now - contactsDate) / (1000 * 60));
		const tooOld = dataAge >= 15;

		if (tooOld) {
			this.fetchData();
		} else {
			console.log(`Using data from local storage that are ${dataAge} minutes old`);
		}

	}



	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('contacts', JSON.stringify(nextState.contacts));
		localStorage.setItem("contactsDate", Date.now());
	}


	fetchData() {

		this.setState({
			isLoading: true,
			contacts: []
		})

		fetch("https://randomuser.me/api/?results=50&nat=us")
			.then(response => response.json()) //turn response into json
			.then(parsedJSON => parsedJSON.results.map(user => ( //parse le json
				{
					name: `${user.name.first} ${user.name.last}`,
					username: `${user.login.username}`,
					email: `${user.email}`,
					location: `${user.location.street}, ${user.location.city}`
				}
			)))
			.then(contacts => this.setState({
				contacts,
				isLoading: false
			}))
			.catch(error => console.log('parsing failed', error));
	}


	render() {
		const { isLoading, contacts } = this.state;
		return (
			<div>
				<header>
					<img src={image} />
					<h1>Fetching Data <button className="btn btn-sm btn-danger">Fetch now</button></h1>
				</header>
				<div className={`content ${isLoading ? 'is-loading' : ''}`}>
					<div className="panel-group">
						{
							!isLoading && contacts.length > 0 ? contacts.map(contact => {
								const { username, name, email, location } = contact;
								return <Collapsible key={username} title={name}>
									<p>
										{email}<br />{location}
									</p>
								</Collapsible>;
							}) : null
						}

					</div>
					<div className="loader">
						<div className="icon"></div>
					</div>
				</div>

			</div>
		);
	}
}
export default App;