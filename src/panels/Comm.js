import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';
import '@vkontakte/vkui';
import {
	FormLayout, 
	Panel, 
	PanelHeader, 
	PanelHeaderBack, 
	FormItem,
	Input,
	IconButton,
	File,
	Button,
	Group,
	CardScroll,
	Card,
	ContentCard,
	Header,
	Cell,

} from '@vkontakte/vkui';
import {

	Icon24Camera,
} from '@vkontakte/icons';

import persik from '../img/persik.png';
import './Persik.css';

const Comm = props => (
	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Ваше коммьюнити
			
		</PanelHeader>
		<Group >
			<Cell>
			Описание вашего комунити
			</Cell>
		</Group>
		<Group header={<Header mode="secondary"aside={

<Button 
	stretched size="l" 
	mode="secondary" 
	onClick={props.go} 
	data-to="create_nft"
>
	Добавить NFT
</Button>}><h1>Мои NFT</h1></Header>}>
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

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>
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
				onClick={props.go} 
				data-to="ctrate_content"
			>
				Добавить контент
			</Button>}
		>
			<h1>Контент</h1>
			</Header>
		}>
			<CardScroll size="s">
			
			<ContentCard
				onClick={props.go} data-to="content"
				src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
				alt="Picture of brown and gray mountains under blue sky during daytime photo"
				subtitle="unsplash"
				header="brown and gray mountains under blue sky during daytime photo"
				text="Mountain changji"
				caption="Photo by Siyuan on Unsplash"
				maxHeight={150}
				>
					<div style={{ paddingBottom: '66%' }} />
					
				</ContentCard>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>

				<Card>
					<div style={{ paddingBottom: '66%' }} />
				</Card>
			</CardScroll>
    	</Group>

      	
        <Group>
		
			 
			  <Button 
				stretched size="l" 
				mode="secondary" 
				onClick={props.go} 
				data-to="add_person"
			>
				Пригласить пользователя
			</Button>
		</Group>
		
    
		
	</Panel>
	
);

Comm.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Comm;
