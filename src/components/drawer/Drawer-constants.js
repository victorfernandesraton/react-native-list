import TurismScreen from '../../screen/turism-screen';
import More from '../turism/More';
import GiphyRoutes from '../../components/giphy/Giphy-routes';
import TelaContato from '../../screen/telaContatos';

export const DrawerItens = [
	{
		name: 'turism-screen',
		title: 'Melhores lugares para Conhecer',
		component: TurismScreen,
		default: true,
	},

	{
		name: 'turism-info',
		title: 'Informações',
		component: More,
	},

	{
		name: 'giphy-routes',
		title: 'GIPHY',
		component: GiphyRoutes,
	},
	{
		name: 'telaContatos',
		title: 'My Contats',
		component: TelaContato,
	},
];
