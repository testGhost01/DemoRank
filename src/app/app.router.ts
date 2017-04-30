import  { Routes }  from  '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const  appRoutes  :  Routes =  [
			{ path: '',  redirectTo: '/home',pathMatch: 'full'},
			{ path: 'login', component: LoginPageComponent },
		              { path: 'signUp', component: SignUpComponent },
		              {  path: 'home', component: HomePageComponent  },
		              { path: '**', component: AppComponent  }
];