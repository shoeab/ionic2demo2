import { Component } from '@angular/core';
import * as LocalForage from 'localforage';
import { NavController, NavParams } from 'ionic-angular';
import { PostListPage } from '../post-list/post-list';

declare var require: Function;
const localforage:LocalForage = require('localforage');

@Component({
  selector: 'page-post-info',
  templateUrl: 'post-info.html'
})
export class PostInfoPage {

	post: {};
	todo: {};
	showForm: boolean;
	myposts:any;

	constructor(public navCtrl: NavController, private navParams: NavParams) {
		//let pot = [];
		let self = this; 
		this.post = navParams.get('post');
		this.todo = {};
		this.showForm = false;

		localforage.getItem("posts").then(function(value) {
		      console.log(value); // output as expected
		      self.myposts = value;
		    });
	}

	logForm() {
	    console.log(this.todo);
	    console.log(this.myposts);
	    this.todo = {};
	    this.redirectToList()
	}

	redirectToList() {
		this.navCtrl.push(PostListPage);
	}

	toggleForm(){
		this.showForm = !this.showForm;
		//console.log(localforage.getItem("posts"));
	}
	

}
