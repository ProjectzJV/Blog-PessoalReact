import {createStore} from 'redux';
import { TokensReduces } from './tokens/TokensReduces';

const store = createStore(TokensReduces);

export default store;