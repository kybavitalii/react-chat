import { CHAT_ROUTE, LOGIN_ROUTE } from '../main/utils/constants.js';
import Login from '../login/Login.js';
import { Chat } from '../chat/Chat.js';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: <Login />,
  },
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: <Chat />,
  },
];
