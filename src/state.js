import {renderEntireTree} from './render.js';

const state = {

  messagesPage: {
    dataMessages : [
      {id: 1, message: `hey`},
      {id: 2, message: `yo`},
      {id: 3, message: `how are u`},
      {id: 4, message: `my name is`},
    ],
      dataUsers: [
        {name: `Vasil`,	id: 1, src: 'https://i09.fotocdn.net/s114/db3e293bd3710194/user_xl/2581623082.jpg',}, 
        {name: `Masha`,	id: 2, src: 'https://image.pushauction.com/0/0/969ad60e-3302-471a-ab56-33db1d608fdd/224b8e7f-d3da-4555-a432-5f1cca7f7ac7.jpg',}, 
        {name: `Dasha`,	id: 3, src: 'https://i.pinimg.com/originals/62/62/16/6262165c2ab45566f5f3cf244fa94853.jpg',}, 
        {name: `Sasha`,	id: 4, src: 'https://i02.fotocdn.net/s108/aacb1d92b4e78239/user_xl/2394143015.jpg',}
      ],

      newMessageText: 'default',
  },

  profilePage: {
    profileInfo : {
      username: 'Vasiliy',
      date: '20/11/89',
      city: 'Moscow',
      edu: 'MSMU',
      mail: 'cartario@yandex.ru',
    },
    users : [
      {
      src: 'https://i09.fotocdn.net/s114/db3e293bd3710194/user_xl/2581623082.jpg',
      message: 'hey0', likes: 10},
      {
      src: 'https://image.pushauction.com/0/0/969ad60e-3302-471a-ab56-33db1d608fdd/224b8e7f-d3da-4555-a432-5f1cca7f7ac7.jpg',
      message: 'hey1', likes: 11}, 
      {
        src: 'https://i.pinimg.com/originals/62/62/16/6262165c2ab45566f5f3cf244fa94853.jpg',
      message: 'hey2', likes: 12}, 
      {
        src: 'https://i.pinimg.com/736x/fd/a1/6d/fda16d6e64cec1a1f6a78726cc7865ff.jpg',
      message: 'hey3', likes: 13}, 
      {
        src: 'https://avatars.mds.yandex.net/get-pdb/2034718/5456abaf-a394-4d69-8dc2-4dc824267f19/s1200?webp=false',
      message: 'hey4', likes: 14}, 
      {
        src: 'https://avatars.mds.yandex.net/get-pdb/1782023/fc67f638-3e8f-4a7a-a04d-22bcd97e7f52/s1200?webp=false',
      message: 'hey5', likes: 15}, 
      {
        src: 'https://i02.fotocdn.net/s108/aacb1d92b4e78239/user_xl/2394143015.jpg',
      message: 'hey6', likes: 16}, 
      {
        src: 'https://e-cdns-images.dzcdn.net/images/cover/7bc8cd87122a638c642e09152cc58c6b/1000x1000-000000-80-0-0.jpg',
      message: 'hey7', likes: 17}
    ]
    },

  sidebar: {
    friends: [
      `Andrew`, `Sveta`, `Vital`, 
    ],    
  },
};

export const addPost = (post) => {
  
  const user = {
    src: 'https://i09.fotocdn.net/s114/db3e293bd3710194/user_xl/2581623082.jpg',
    message: state.messagesPage.newPostText,
    likes: 5,
  }
  state.profilePage.users.push(user);
  renderEntireTree(state, addPost, addMessage, updateMessage);
}

export const addMessage = () => {
  const dataMes = {
    id: 0,
    message: state.messagesPage.newMessageText,
  }

  state.messagesPage.dataMessages.push(dataMes);
  state.messagesPage.newMessageText = '';
  renderEntireTree(state, addPost, addMessage, updateMessage);  
};

export const updateMessage = (newText) => {
  state.messagesPage.newMessageText = newText;
  renderEntireTree(state, addPost, addMessage, updateMessage);
}

window.state = state;
export default state;