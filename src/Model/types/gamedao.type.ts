import { GamePlacesDAO } from './gamePlacesdao.type';
import { GamePlaces } from '../GamePlaces';

export type GameDAO = {
    title: String,
    creator: String,
    gamePlaces: GamePlaces[],
}