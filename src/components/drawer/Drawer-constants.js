import SpotfyScreen from '../../screen/spotfy-screen';
import GiphyScreen from '../../screen/giphy-screen';

export const DrawerItens = [
  {
    name: 'sporty-screen',
    title: "Spotfy",
    component: SpotfyScreen,
    default: true,
	},
	{
		name: 'giphy-screen',
		title: 'Giphys and Stickers',
		component: GiphyScreen,
	}
];
