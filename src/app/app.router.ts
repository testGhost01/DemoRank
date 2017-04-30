import  { Routes }  from  '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

export const  appRoutes  :  Routes =  [
			{ path: '',  redirectTo: '/home',pathMatch: 'full'},
			  {  path: 'home', component: HomePageComponent  },
			{ path: 'login', component: LoginPageComponent },
		              { path: 'signUp', component: SignUpPageComponent },
		              { path: '**', component: AppComponent  }
];