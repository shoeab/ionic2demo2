import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as LocalForage from 'localforage';
import { PostService } from '../service/post-service';
import { PostInfoPage } from '../post-info/post-info';

declare var require: Function;
const localforage:LocalForage = require('localforage');

@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html',
  providers: [PostService] 
})
export class PostListPage {

	posts: Array<any>;
	//private posts = [];

	constructor(public navCtrl: NavController, private postService: PostService) {
		this.getPosts();
	}
  
	getPosts() {
		//console.log(event.target.value);
		//if(event.target.value.length > 2) {
			this.postService.getPosts().subscribe(
				data => {
					this.posts = data; 
					localforage.setItem('posts', data);
					console.log(data);
				},
				err => {
					console.log(err);
				},
				() => console.log('Post load Complete')
			);
		//}
	}   
	
	itemTapped( post) {
		this.navCtrl.push(PostInfoPage, {
			post: post
		});

		//console.log(localforage.getItem("posts"));
	}
}
