import React from 'react';
import PropTypes from 'prop-types';
import { FixedLayout, PullToRefresh, Panel, Button, Group, Div, PanelHeader, Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';
import Icon28HomeOutline from '@vkontakte/icons/dist/28/home_outline';
import './Persik.css';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Саня, ты в порядке?</PanelHeader>
		<Group>
				<Div class="sasha">
					<Button size="xl" level="2">
						Уебать Сашу
					</Button>
				</Div>
		</Group>
	<Epic tabbar={
        <Tabbar>
          <TabbarItem
            onClick={go}
            data-to="home"
            text="Главная"
          ><Icon28HomeOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik"
            text="Помочь автору"
          ><Icon28FavoriteOutline /></TabbarItem>
        </Tabbar>
      }>
    </Epic>

	</Panel>
);

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
