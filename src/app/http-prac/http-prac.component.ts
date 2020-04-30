import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-prac',
  templateUrl: './http-prac.component.html',
  styleUrls: ['./http-prac.component.css']
})
export class HttpPracComponent implements OnInit {
name="api";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(data => {
    console.log(data);
     });



     this.http.post(' http://dummy.restapiexample.com/api/v1/create',
    {
      name:"test",
      salary:123,
      age:23
    })
  .subscribe(
    res => {
      console.log(res);
    },
    err=>{
      console.log("error");
    });
    this.http.put('http://dummy.restapiexample.com/api/v1/update/25',
  {
    name:"test1",
    salary:2222,
    age:23
  })
  .subscribe(
    res=>{
      console.log(res);
    },
    err=>{
      console.log("error");
       });

       this.http.delete('http://dummy.restapiexample.com/api/v1/delete/2')
       .subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log("error");
           });

}
}