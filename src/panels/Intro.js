import React from "react";
import vkConnect from "@vkontakte/vk-bridge";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import FixedLayout from "@vkontakte/vkui/dist/components/FixedLayout/FixedLayout";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";

import Icon24Linked from "@vkontakte/icons/dist/24/linked";

const Intro = props => (

	<Panel id={props.id} theme="white" centered separator={false} header={false}>
		<Div style={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center" }}>
			<h1 style={{ marginBottom: 0 }}>САНЯЯЯ, ТЫ В ПОРЯДКЕ?</h1>
			<p style={{ marginTop: 15, marginBottom: 5 }}>
				Бесят Сани? Тогда это приложение для тебя :)
			</p>
		</Div>
		<FixedLayout vertical="bottom">
			<Div>
				<Button
				size="xl"
					onClick={props.go}
					data-to='menu'
				>
					Начать
				</Button>
			</Div>
		</FixedLayout>
	</Panel>
);

export default Intro;