import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import ReactDOM from 'react-dom';
import {
	Panel,
	PanelHeader,
	Header,
	Group,
	SimpleCell,
	FormLayout,
	FormItem,
	Input,
	IconButton,

  } from '@vkontakte/vkui';

import Home from './panels/Home';
import Persik from './panels/Persik';
import CreateComm from './panels/CreateComm';
import CreateNFT from './panels/CreateNFT';
import CreateContent from './panels/CreateContent';
import Comm from './panels/Comm';
import Content from './panels/Content';
import AddPerson from './panels/AddPerson';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' fetchedUser={fetchedUser} go={go} />
								<Persik id='persik' go={go} />
								<CreateComm id='create' go={go} />
								<CreateContent id='ctrate_content' go={go} />
								<CreateNFT id='create_nft' go={go} />
								<Comm id='comm' go={go} />
								<Content id='content' go={go} />
								<AddPerson id='add_person' go={go} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
