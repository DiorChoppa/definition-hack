import React from 'react';
import PropTypes from 'prop-types';
import '@vkontakte/vkui/dist/vkui.css';
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

} from '@vkontakte/vkui';
import {

	Icon24Camera,
} from '@vkontakte/icons';

import persik from '../img/persik.png';
import './Persik.css';

const AddPerson = props => (
	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Пригласить пользователя
			
		</PanelHeader>
		
		
      	
        
		<FormLayout>
      <FormItem top="Пригласить пользователя" >
        <Input
          
          type="text"
          placeholder="Введите ссылку на страницу пользователя ВК"
        
        />
		
      </FormItem>
	
	  <FormItem>
              <Button size="l" stretched onClick={props.go} data-to="comm">
			  Пригласить пользователя
              </Button>
            </FormItem>
    </FormLayout>
    
		
	</Panel>
	
)

AddPerson.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default AddPerson;
