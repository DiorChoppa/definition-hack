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
	Text,
	Link,
	Spacing,

} from '@vkontakte/vkui';
import {

	Icon24Camera,
} from '@vkontakte/icons';

import persik from '../img/persik.png';
import './Persik.css';

const Content = props => (
	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Имя контента
			
		</PanelHeader>
		<Group >
			<Cell>
			Превью контента
			</Cell>
		</Group>
		
      	
        <Group>
		<Link style={{ padding: 20 }}href="https://google.com">Ссылка на контент</Link>

		<Spacing size={24} />
		
		<div style={{ padding: 20 }}>
  		<Text>Описание контента</Text>
		</div>
		</Group>
		
    
		
	</Panel>
	
);

Content.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Content;
