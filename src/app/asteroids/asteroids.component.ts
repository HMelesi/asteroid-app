import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Welcome, NearEarthObjects, The20150907 } from '../date';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.css'],
})
export class AsteroidsComponent implements OnInit {
  asteroidData: Welcome;
  nearEarthObjects: NearEarthObjects;
  date: String;
  savedDate: String;
  asteroidList: The20150907[];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getAsteroidData();
  }

  getAsteroidData(): void {
    const date = this.route.snapshot.paramMap.get('date');
    this.dataService.getAsteroids(date).subscribe((data) => {
      this.asteroidData = data;
      this.nearEarthObjects = data.near_earth_objects;
      this.savedDate = date;
      this.asteroidList = data.near_earth_objects[date];
    });
  }
}
