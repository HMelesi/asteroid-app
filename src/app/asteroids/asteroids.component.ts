import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Welcome, NearEarthObjects, The20150907 } from '../date';

@Component({
  selector: 'app-first',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.css'],
})
export class AsteroidsComponent implements OnInit {
  asteroidData: Welcome;
  nearEarthObjects: NearEarthObjects;
  @Input() date: String;
  savedDate: String;
  asteroidList: The20150907[];

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  getAsteroidData(date): void {
    this.dataService.getAsteroids(date).subscribe((data) => {
      // console.dir(data);
      this.asteroidData = data;
      this.nearEarthObjects = data.near_earth_objects;
      this.savedDate = date;
      this.asteroidList = data.near_earth_objects[date];
    });
  }
}
