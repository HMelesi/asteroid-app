import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
})
export class DateInputComponent implements OnInit {
  getToday = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var ddd;
    var mmm;
    var todayString;

    if (dd < 10) {
      ddd = '0' + dd;
    } else {
      ddd = dd;
    }
    if (mm < 10) {
      mmm = '0' + mm;
    } else {
      mmm = mm;
    }

    todayString = yyyy + '-' + mmm + '-' + ddd;
    return todayString;
  };

  date: string;
  todaysDate: string = this.getToday();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public buttonClick() {
    if (this.date === undefined) {
      alert('please select a date');
    } else {
      this.router.navigateByUrl(`/asteroids/${this.date}`);
    }
  }
}
