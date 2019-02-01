import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import { AppState } from './reducers';
import { Logout, Login } from './auth/auth.actions';
import { map } from 'rxjs/operators';
import { store } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    isLoggedIn$: Observable<boolean>
    isLoggedOut$: Observable<boolean>

    constructor(public store: Store<AppState>) {

    }

    ngOnInit() {
     this.isLoggedIn$ = this.store.pipe(
        map(state => state.auth.loggedIn)
        )
      this.isLoggedOut$ = this.store.pipe(
        map(state => !state.auth.loggedIn)
        )

      this.store.pipe(map(state => state.auth.loggedIn)).subscribe( login =>
        console.log(login)
      )
    }

    logout() {
      this.store.dispatch(new Logout());
    }


}
