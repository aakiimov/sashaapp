import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Panel, PanelHeader, PanelHeaderBack, platform, IOS, Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import persik from '../img/persik.png';
import './Persik.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';
import Icon28HomeOutline from '@vkontakte/icons/dist/28/home_outline';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';

const orangeBackground = {
  backgroundImage: 'linear-gradient(135deg, #ffb73d, #ffa000)'
};

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader right={<Avatar size={34} style={orangeBackground}><Icon24Favorite width={24} height={24} fill="#fff" /></Avatar>}>
			Помочь автору
		</PanelHeader>

	<Epic tabbar={
        <Tabbar>
          <TabbarItem
            onClick={props.go}
            data-to="home"
            text="Главная"
          ><Icon28HomeOutline /></TabbarItem>
          <TabbarItem
            onClick={props.go}
            data-to="persik"
            text="Помочь автору"
          ><Icon28FavoriteOutline /></TabbarItem>
        </Tabbar>
      }>
    </Epic>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
