import { Component } from '@angular/core';
import  { Router}  from  '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor( private router: Router){}
  onLinkClick($event: any) {

  if (($event).index  === 0) { 
  	this.router.navigate(['/home']);
  	  console.log(($event).tab.textLabel);
  	  console.log(($event).index);
  }  if (($event).index  === 1) { 
  	this.router.navigate(['/login']);
  	  console.log(($event).tab.textLabel);
  	  console.log(($event).index);
  }else {
  	this.router.navigate(['/signUp']);
  	  console.log(($event).tab.textLabel);
  	  console.log(($event).index);
  }
  // this.router.navigate(['contacts']); 
}



}
