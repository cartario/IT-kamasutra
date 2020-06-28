import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {addPost, addMessage, updateMessage}from "./state.js";
import {renderEntireTree} from './render.js';

renderEntireTree(state, addPost, addMessage, updateMessage);

serviceWorker.unregister();
