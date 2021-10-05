import { NameSpace } from '../root-reducer';

export const getActiveCity = (state) => state[NameSpace.UI].activeCity;
export const getActiveSort = (state) => state[NameSpace.UI].activeSort;
export const getActiveCard = (state) => state[NameSpace.UI].activeCard;
