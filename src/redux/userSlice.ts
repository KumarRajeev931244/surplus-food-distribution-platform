import { IUser } from '@/models/user.models'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



interface IuserState {
  userData: IUser | null
}

// Define the initial state using that type
const initialState: IuserState = {
  userData:null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData:(state,action) => {
        state.userData = action.payload
    }
    
  },
})

export const { setUserData } = userSlice.actions


export default userSlice.reducer