import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { User } from '../model/user.model';
import { AuthActionTypes } from '../auth/auth.actions';
type AuthState = {
  loggedIn : boolean,
  user: User
} // this is object with authentication properties 

const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
}
export interface AppState {
    auth: AuthState  // add the authentication properties object to STORE
}
function authReducer(state:AuthState = initialAuthState, action) :AuthState {
    switch(action.type){
      case AuthActionTypes.LoginAction:
      return{
        loggedIn:true,
        user: action.payload.user
      }
      default: return state
 // reducer function for authentication to track its state
    }
}
export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer // export authentication reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
