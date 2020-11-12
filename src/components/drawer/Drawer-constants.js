import TurismRoute from '../turism/routes'
import GiphyRoutes from '../giphy/Giphy-routes';
import ContatosRoute from '../Contatos/route';

export const DrawerItens = [
	{
		name: 'turism-route',
		title: 'Melhores lugares para Conhecer',
		component: TurismRoute,
	},
	
	{
		name: 'giphy-routes',
		title: 'GIPHY',
		default: true,
		component: GiphyRoutes,
	},
	{
		name: 'contato-routes',
		title: 'Contatos',
		component: ContatosRoute,
	},
];
