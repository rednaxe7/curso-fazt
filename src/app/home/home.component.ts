import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  name: string = 'Alexander Piñero';
  age: number = 33;
  posts: any [];

  title = 'curso-fazt';
  users = ['Alexander','Gabriela','Celeste','Teresa','Gertrudis','Luis'];
  activated: boolean = false;
  constructor() { }

  ngOnInit() {
  }

	addUser(newUser){
   	this.users.push(newUser.value);
		newUser.value = '';
		newUser.focus();		
 		return false; 
  }

   deleteUser(user){
		for(let i=0; i < this.users.length; i++){
			if (user == this.users[i]){
				this.users.splice(i,1);
			}
		}
  	}

}
