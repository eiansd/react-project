import {createSlice} from "@reduxjs/toolkit";

const initialState = "카리나";

const memberSilce = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (state, action) => {
      const activeMember = action.payload;
      return activeMember;
    }
  }
});

export const {setMember} = memberSilce.actions;
export default memberSilce.reducer;
