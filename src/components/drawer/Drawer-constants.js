import TurismScreen from '../../screen/turism-screen';
//import GiphyScreen from '../../screen/giphy-screen';
import GiphyRoutes from '../../components/giphy/Giphy-routes';

export const DrawerItens = [
	{
		name: 'turism-screen',
		title: 'Melhores lugares para Conhecer',
		component: TurismScreen,
		default: true,
	},
	{
		name: 'giphy-routes',
		title: 'GIPHY',
		component: GiphyRoutes,
	},
];
