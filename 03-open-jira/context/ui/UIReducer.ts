import { UIState } from './';

type UIType =
     | { type: 'UI - Open Sidebar' }
     | { type: 'UI - Close Sidebar' }
     | { type: 'Start Dragging'}
     | { type: 'End Dragging'}

export const uiReducer = (state: UIState, action: UIType): UIState => {
     switch (action.type) {
          case 'UI - Open Sidebar':
               return {
                    ...state,
                    sidemenuOpen: true
               }
          case 'UI - Close Sidebar':
               return {
                    ...state,
                    sidemenuOpen: false
               }
          case 'Start Dragging':
               return {
                    ...state,
                    isDragging: true
               }
          case 'End Dragging':
               return {
                    ...state,
                    isDragging: false
               }

          default:
               return state
     }
}