import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  asteroidData = {};

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data) => {
      console.log(data);
      this.asteroidData = data;
    });
  }
}
