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
	Checkbox,

} from '@vkontakte/vkui';
import {

	Icon24Camera,
	Icon24Document,
} from '@vkontakte/icons';

import persik from '../img/persik.png';
import './Persik.css';

const CreateContent = props => (
	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Создать контент
			
		</PanelHeader>
		
		
      	
        
		<FormLayout>
      <FormItem top="📝 Название" >
        <Input
          
          type="text"
          placeholder="Название контента"
          
        />
      </FormItem>

	  <FormItem top="📝 Описание" >
        <Input
          
          type="text"
          placeholder="Описание контента, доступное только приналичии доступа"
          
        />
      </FormItem>

	  <FormItem top="📝 Превью" >
        <Input
          
          type="text"
          placeholder="Краткое описание контента, доступное всем пользователям"
          
        />
      </FormItem>

	  <FormItem top="Загрузите ваше фото">
        <File className='file' before={<Icon24Camera role="presentation" />} size="m" mode="secondary">
			 Открыть галерею
        </File>
		<File before={<Icon24Document role="presentation" />} size="m" mode="secondary" />
         
      </FormItem>
	  <FormItem top="📝 Ссылка на контент" >
        <Input
          
          type="text"
          placeholder="Ссылка на контент, доступная только приналичии доступа"
          
        />
      </FormItem>
	  <FormItem top="Доступ к контенту" >
				<Checkbox >Junior</Checkbox>
				<Checkbox >Middle</Checkbox>
				<Checkbox>Senior</Checkbox>
      </FormItem>

	  <FormItem>
              <Button size="l" stretched onClick={props.go} data-to="content">
                Создать контент
              </Button>
            </FormItem>

			
    </FormLayout>
    
	</Panel>
	
);

CreateContent.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default CreateContent;
