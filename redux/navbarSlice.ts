import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface NavbarState {
  country: string
}

const initialState = { country: "us" } satisfies NavbarState as NavbarState

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    updateCountry(state, action: PayloadAction<string>) {
      state.country = action.payload
    },
  },
})

export const { updateCountry } = navbarSlice.actions
export default navbarSlice.reducer