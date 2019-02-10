import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post.interface'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { 
 	console.log('service Data is working!');



  }

  getData(){
		return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');  
  }
}
