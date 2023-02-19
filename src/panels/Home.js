import React, { useEffect , useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import {
	AdaptivityProvider,
	ConfigProvider,
	AppRoot,
	SplitLayout,
	SplitCol,
	View,
	SimpleCell,
	CardScroll,
	Card,
	ContentCard,
  } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import b from '../img/b.jpg';


const Home = ({ id, go, fetchedUser }) => {
	const [data, getData] = useState([])
	const URL = 'https://jsonplaceholder.typicode.com/posts';
  
	useEffect(() => {
		fetchData()
	}, [])
  
  
	const fetchData = () => {
		fetch(URL)
			.then((res) =>
				res.json())
  
			.then((response) => {
				console.log(response);
				getData(response);
			})
  
	}
return(
	<Panel id={id}>
		<PanelHeader>Тест</PanelHeader>
		{fetchedUser &&
		<Group >
			<Cell>
				Привет, 
				{` ${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}
			
		
			<Group>
			<Cell>
			подключи криптокошелек
			
			</Cell>
			<Button 
				stretched size="l" 
				mode="primary" 
				onClick={() => {
					let button = event.target;

					if(!window.ethereum)
                	{
                	    button.textContent = "Metamask is not installed";
                	    return false
                	}
					
					let account;

        			ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
        			  account = accounts[0] || 'Not able to get accounts';

					//   if(!accounts){ return }

        			  console.log(account);
        			  button.textContent = account;
					
        			  ethereum.request({method: 'eth_getBalance' , params: [account, 'latest']}).then(result => {
        			    console.log(result);
        			    let wei = parseInt(result,16);
        			    let balance = wei / (10**18);
        			    console.log(balance + " ETH");
        			  });
        			});
				}} 
				data-to="create"
				appearance="accent" 
				
			>
				подключить криптокошелек
			</Button>
			</Group>
		

		<Group header={<Header mode="secondary"><h1>Мои NFT</h1></Header>}>
			<CardScroll size="s">
			
			<ContentCard
				src="https://images.unsplash.com/photo-1603928726698-a015a1015d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
				alt="Picture of person's left hand with pink paint"
				header="Имя НФТ"
				caption="Автор"
				maxHeight={200}			  
				>
					<div style={{ paddingBottom: '66%' }} />
				</ContentCard>
				{data.map((item, i) => (
				<ContentCard
				src="https://images.unsplash.com/photo-1603928726698-a015a1015d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
				
				header={item.title}
				caption={item.body}
				maxHeight={200}			  
				>
					<div style={{ paddingBottom: '66%' }} />
				</ContentCard>
				))}
				
			</CardScroll>
    	</Group>

		<Group header={
		<Header 
			mode="secondary" 
			before="Мои коммьюнити" 
			aside={

			<Button 
				stretched size="l" 
				mode="secondary" 
				onClick={go} 
				data-to="create"
			>
				Создать коммьюнити
			</Button>}
		>
			<h1>Мои коммьюнити</h1>
			</Header>
		}>
			<CardScroll size="s">
			
			<ContentCard
				onClick={go} data-to="comm"
				src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
				header="Имя коммьюнити"
				text="Роль?"
				caption="Автор"
				maxHeight={150}
				>
					<div style={{ paddingBottom: '66%' }} />
					
				</ContentCard>

				{data.map((item, i) => (
				<ContentCard
				onClick={go} data-to="comm"
				src={b}
				header={item.title}
				caption={item.body}
				maxHeight={150}			  
				>
					<div style={{ paddingBottom: '66%' }} />
				</ContentCard>
				))}
			</CardScroll>
    	</Group>

		<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
			</Div>
		</Group>
	</Panel>
);
}
Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
