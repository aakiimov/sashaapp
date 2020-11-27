import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, Group, Div, PanelHeader, Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';
import Icon28HomeOutline from '@vkontakte/icons/dist/28/home_outline';

const Sasha = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Саня не в порядке(</PanelHeader>
	</Panel>
);

Sasha.propTypes = {
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

export default Sasha;
