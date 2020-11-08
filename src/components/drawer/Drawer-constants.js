import TurismScreen from '../../screen/turism-screen';
import GiphyScreen from '../../screen/giphy-screen';

export const DrawerItens = [
  {
    name: 'turism-screen',
    title: "Melhores lugares para Conhecer",
    component: TurismScreen,
    default: true,
	},
	{
		name: 'giphy-screen',
		title: 'Giphys and Stickers',
		component: GiphyScreen,
	}
];
