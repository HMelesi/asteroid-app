import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second',
  templateUrl: './asteroid-detail.component.html',
  styleUrls: ['./asteroid-detail.component.css'],
})
export class AsteroidDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getAsteroid();
  }

  getAsteroid(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.dataService.getAsteroidDetail().subscribe((data) => console.dir(data));
  }
}
