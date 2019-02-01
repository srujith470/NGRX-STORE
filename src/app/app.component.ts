import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import { AppState } from './reducers';
import { Logout, Login } from './auth/auth.actions';
import { map } from 'rxjs/operators';
import { store } from '@angular/core/src/render3';
import { isLoggedIn, isLoggedOut } from './auth/auth.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    isLoggedIn$: Observable<boolean>
    isLoggedOut$: Observable<boolean>

    constructor(public store: Store<AppState>, private router: Router) {

    }

    ngOnInit() {
     this.isLoggedIn$ = this.store.pipe(
        select(isLoggedIn)
      )
      this.isLoggedOut$ = this.store.pipe(
          select(isLoggedOut)
        )

      // this.store.pipe(map(state => state.auth.loggedIn)).subscribe( login =>
      //   console.log(login)
      // )
    }

    logout() {
      this.store.dispatch(new Logout());
      this.router.navigateByUrl('/login')
    }


}
