import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Detail } from '../detail';
import { Location } from '@angular/common';

@Component({
  selector: 'app-second',
  templateUrl: './asteroid-detail.component.html',
  styleUrls: ['./asteroid-detail.component.css'],
})
export class AsteroidDetailComponent implements OnInit {
  asteroidDetail: Detail;
  error: boolean = false;
  loading: boolean = true;
  errorStatus: number;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAsteroid();
  }

  goBack(): void {
    this.location.back();
  }

  getAsteroid(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getAsteroidDetail(id).subscribe(
      (data) => {
        this.asteroidDetail = data;
        this.loading = false;
      },
      (error: any) => {
        if (error) {
          this.errorStatus = error.status;
          this.errorMessage = error.statusText;
          this.error = true;
          this.loading = false;
        }
      }
    );
  }
}
