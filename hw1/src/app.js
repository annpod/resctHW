import React from 'react';
import ReactDOM from 'react-dom';
import Panel from 'react-bootstrap/lib/Panel';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Table from 'react-bootstrap/lib/Table';
import Image from 'react-bootstrap/lib/Image';
import Button from 'react-bootstrap/lib/Button';

const mountNode = document.querySelector('#app');

const users = [
	{
		id: 1,
		fullName: 'Иванов Иван',
		avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
		birthdate: '1976-10-10',
		gender: 'мужской',
		address: 'ул. Звенигороская, 47б',
		email: 'ivanov@mail.ru'
	},
	{
		id: 2,
		fullName: 'Петров Петр',
		avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/7.jpg',
		birthdate: '1957-01-14',
		gender: 'мужской',
		address: 'ул.Пушкиская, 13',
		email: 'ivanov@mail.ru'
	},
	{
		id: 3,
		fullName: 'Натальина Наталья',
		avatarUrl: 'https://randomuser.me/api/portraits/thumb/women/7.jpg',
		birthdate: '1990-07-03',
		gender: 'женский',
		address: 'ул. Лермонтова, 59',
		email: 'ivanov@mail.ru'
	}
];

const render = Component => {
	ReactDOM.render(Component, mountNode);
};

const CloneUsers = (users) => {
	let userClone =  users.map(a => Object.assign({}, a));
	userClone.forEach(function(item){
	item.id += userClone.length;
});
	let userList = users.concat(userClone);
	render(<List users={userList} />);
}
const List = ({users}) => {
	return (
		<Grid>
			{users.map((item,index) => (
				<div key={index}>
					<Panel
						bsStyle="info"
						header={item.fullName}>
						<Row className="show-grid">
							<Col md={3} lg={3}>
								<Image src={item.avatarUrl} circle />
							</Col>
							<Col md={9} lg={9}>
								<Table responsive condensed>
									<tbody>
										<tr>
											<td>Дата рождения</td>
											<td>{item.birthdate}</td>
										</tr>
										<tr>
											<td>Пол</td>
											<td>{item.gender}</td>
										</tr>
										<tr>
											<td>Адрес</td>
											<td>{item.address}</td>
											</tr>
										<tr>
											<td>Email</td>
											<td><a href={`mailto:${item.email}`}>{item.email}</a></td>
										</tr>
									</tbody>
								</Table>
							</Col>
						</Row>
					</Panel>
				</div>
			))}
			<Row className="show-grid">
				<Col md={12} lg={12}>
					<Button
						bsStyle="primary"
						onClick={() => CloneUsers(users)}>
						Clone users
					</Button>
				</Col>
			</Row>
		</Grid>
	);
};

render(<List users={users} />);
