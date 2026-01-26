// import { createSlice } from '@reduxjs/toolkit'
// const cartSlice= createSlice({
//     name:"mycart",
//     initialState:{
//         cart:[]
//     },
//     reducers:{
//         addtoCart:(state, actions)=>{
//             const data= state.cart.filter(key=>key.id==actions.payload.id);
//              if (data.length>=1)
//              {
//                 alert("Product aleready added!");
//              }
//              else 
//              {
//                 state.cart.push(actions.payload)
//              }
           
//         },

//         dataIncrease:(state, actions)=>{
//              for (var i=0; i<state.cart.length; i++)
//              {
//                 if (state.cart[i].id==actions.payload.id)
//                 {
//                     state.cart[i].qnty++;
//                 }
//              }
//         },
//          dataDecrease:(state, actions)=>{
//              for (var i=0; i<state.cart.length; i++)
//              {
//                 if (state.cart[i].id==actions.payload.id)
//                 {
//                     if (state.cart[i].qnty<=1)
//                     {
//                        alert("Quantity not less than one")
//                     }
//                     else 
//                     {
//                        state.cart[i].qnty--;
//                     }
                   
//                 }
//              }
//         },

//         itemRemove:(state, actions)=>{
//                   state.cart=state.cart.filter(item=>item.id!=actions.payload.id);
//         }
//     }
// })

// export const {addtoCart, dataIncrease, dataDecrease, itemRemove} = cartSlice.actions;
// export default cartSlice.reducer;








import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "mycart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size 
      );

      if (index >= 0) {
        state.cart[index].qnty += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    dataIncrease: (state, action) => {
      const item = state.cart.find(
        (i) =>
          i.id === action.payload.id &&
          i.size === action.payload.size
      );
      if (item) item.qnty++;
    },

    dataDecrease: (state, action) => {
      const item = state.cart.find(
        (i) =>
          i.id === action.payload.id &&
          i.size === action.payload.size
      );

      if (item) {
        if (item.qnty > 1) item.qnty--;
        else alert("Quantity cannot be less than 1");
      }
    },

    itemRemove: (state, action) => {
      state.cart = state.cart.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.size === action.payload.size
          )
      );
    },
  },
});

export const {
  addtoCart,
  dataIncrease,
  dataDecrease,
  itemRemove,
} = cartSlice.actions;

export default cartSlice.reducer;
