import { Component, OnInit } from '@angular/core';
import { Post }  from '../interfaces/post.interface'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  posts: Post[];

  constructor(private dataService: DataService ) {
  		this.dataService.getData().subscribe(data => {
			this.posts = data;
		});
  	
  }

  ngOnInit() {
  }

}
