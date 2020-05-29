import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Detail } from '../detail';

@Component({
  selector: 'app-second',
  templateUrl: './asteroid-detail.component.html',
  styleUrls: ['./asteroid-detail.component.css'],
})
export class AsteroidDetailComponent implements OnInit {
  asteroidDetail: Detail;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getAsteroid();
  }

  getAsteroid(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getAsteroidDetail(id).subscribe((data) => {
      console.dir(data);
      this.asteroidDetail = data;
    });
  }
}
