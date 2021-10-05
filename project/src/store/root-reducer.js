import {combineReducers} from 'redux';
import {appData} from './app-data/app-data';
import {appUi} from './app-ui/app-ui';
import {userData} from './user-data/user-data';

export const NameSpace = {
  DATA: 'DATA',
  UI: 'UI',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.UI]: appUi,
  [NameSpace.USER]: userData,
});
