import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';
  results = '';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    //promise way
    // this.http.get('https://swapi.co/api/people/?search=ab').toPromise()
    // .then((data:any)=>{
    //   this.results=data.results;
    //   console.log(this.results)
    // }).catch();

    //observable
    // this.http.get('https://api.github.com/users/abdullah').subscribe(data => {
    //   console.log(data);
    // });

    // this.http.get<UserResponse>('https://api.github.com/users/abdullah')
    //   .subscribe(data => {
    //     console.log("User login: " + data.login);
    //     console.log("Bio: " + data.bio);
    //     console.log("Company : " + data.company);
    //   },
    //   err=>{
    //     console.log("error occured");
    //   });


    
   //http post
  //   this.http.post('http://jsonplaceholder.typicode.com/posts',
  //   {
  //     title:"foo",
  //     body:"bar",
  //     userId:1
  //   })
  // .subscribe(
  //   res => {
  //     console.log("error occured");
  //   }
  // )






  }




}
