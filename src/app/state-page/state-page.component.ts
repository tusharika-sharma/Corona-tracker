import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-state-page',
  templateUrl: './state-page.component.html',
  styleUrls: ['./state-page.component.css']
})
export class StatePageComponent implements OnInit {
  stateName = "Test"
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  

  ngOnInit(): void {
    let stateParam = this.route.snapshot.paramMap.get('name');
    if(stateParam != null) {
      this.stateName = stateParam;
    } else {
      this.router.navigate(['/']);
    }

    this.fetchData();
  }

  fetchData() {
    this.http.get('https://data.covid19india.org/state_district_wise.json').subscribe(item => {
      const jsonData = JSON.parse(JSON.stringify(item));
      
      for(var key in jsonData) {
        console.log(key);
        
      }

      // console.log(jsonData[this.stateName]);
      // jsonData.array.forEach((element: any) => {
      //   console.log(element);
        
      // });
    });
  }

}
