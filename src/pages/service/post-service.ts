import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
 
export class PostService {  
    static get parameters() {
        return [[Http]];
    }
 
	constructor(private http:Http) {
		
	}
 
    getPosts() {
        //var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        var url = 'https://jsonplaceholder.typicode.com/posts';
        var response = this.http.get(url).map(res => res.json());
		return response;
    }
}