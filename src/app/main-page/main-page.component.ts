import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  states: string[] = []

  constructor(private router: Router, private http: HttpClient) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectedValue:string = "";

  goToStatePage() {
    if(this.selectedValue.trim() != '') {
      let routeName = '/state/' + this.selectedValue;
      this.router.navigate([routeName]);
    }
    
    this.fetchData()
    
  }

  fetchData() {
    this.http.get('https://data.covid19india.org/state_district_wise.json').subscribe(item => {
      const jsonData = JSON.parse(JSON.stringify(item));
      
      for(var key in jsonData) {
        this.states.concat(key)
      }
    });
  }

}
