import { configureStore } from "@reduxjs/toolkit"

const SideBarReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_SIDEBAR':
      return action.given;
    default:
      return false;
  }
}

export default configureStore({
  reducer: {
    sidebar_reducer: SideBarReducer
  }
});