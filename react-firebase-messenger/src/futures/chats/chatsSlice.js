import { createSlice } from '@reduxjs/toolkit';

const initialState = {};
//  { value: [
// {
//   user: 'Josefina',
//   url: '',
//   messages: [
//     {
//       msg: 'Quickly come to the meeting room 1B, we have a big server issue.',
//       date: '',
//     },
//     {
//       msg: "I'm having breackfast right now, can't you wait for 10 minutes?",
//       date: '',
//     },
//     { msg: 'We are losing money! Quick!', date: '' },
//   ],
// },
//   ],}

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    send: (state, msg) => {
      
    },
    del: (state) => {
     
    },
    incrementByAmount: (state, action) => {
   
    },
  },
});

// Action creators are generated for each case reducer function
export const { send } = chatsSlice.actions;

export default chatsSlice.reducer;
