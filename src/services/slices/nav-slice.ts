import { createSlice } from "@reduxjs/toolkit";

type NavSliceProps = {
   activeMenu: "";
};

const initialState: NavSliceProps = {
   activeMenu: "",
};

const navSlice = createSlice({
   name: "Navbar Slice",

   initialState,

   reducers: {
      setActiveMenu: (state, action) => {
         state.activeMenu = action.payload;
      },
   },
});

export const { setActiveMenu } = navSlice.actions;
export default navSlice.reducer;
