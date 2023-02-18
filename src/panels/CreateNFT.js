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
} from '@vkontakte/icons';

import persik from '../img/persik.png';
import './Persik.css';

const CreateNFT = props => (
	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Создать NFT
			
		</PanelHeader>
		
		
      	
        
		<FormLayout>
		<FormItem top="📝 Название" >
        <Input
          
          type="text"
          placeholder="Название NFT"
          
        />
      </FormItem>

	  <FormItem top="📝 Описание" >
        <Input
          
          type="text"
          placeholder="Описание NFT"
          
        />
      </FormItem>

		
     
	  <FormItem top="Загрузите картинку">
        <File before={<Icon24Camera role="presentation" />} size="m">
          Открыть галерею
        </File>
      </FormItem>
	  <FormItem top="Доступ к контенту" >
				<Checkbox >Junior</Checkbox>
				<Checkbox >Middle</Checkbox>
				<Checkbox>Senior</Checkbox>
      </FormItem>
	  <FormItem>
              <Button size="l" stretched onClick={props.go} data-to="comm">
                Создать NFT
              </Button>
            </FormItem>
			
    </FormLayout>
    
	</Panel>
	
);

CreateNFT.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default CreateNFT;
