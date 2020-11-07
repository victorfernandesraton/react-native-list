import SpotfyScreen from '../../screen/spotfy-screen';
import GiphyRoutes from '../../components/giphy/Giphy-routes';

export const DrawerItens = [
  {
    name: 'sporty-screen',
    title: "Spotfy",
    component: SpotfyScreen,
    default: true,
	},
	{
		name: 'giphy-routes',
		title: 'Giphys and Stickers',
		component: GiphyRoutes,
	}
];
