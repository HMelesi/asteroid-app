import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Welcome } from '../date';

@Component({
  selector: 'app-first',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.css'],
})
export class AsteroidsComponent implements OnInit {
  asteroidData: Welcome;
  @Input() date: String;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.getAsteroidData();
  }

  getAsteroidData(date): void {
    console.log('here');
    this.dataService.sendGetRequest(date).subscribe((data) => {
      console.log(data);
      this.asteroidData = data;
    });
  }
}
