import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = 5;
  constructor() { }
  a = 19;
  b = 13;
  temp = 0;
  c: number;

  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  ngOnInit() {

  }

  pooja() {
    switch (this.data) {
      case 1:
        console.log('one');
        break;
      case 2:
        console.log('two');
        break;

      case 3:
        console.log('three');
        break;
      case 4:
        console.log('four');
        break;
      case 5:
        console.log('five');
        break;
      default:

    }

  }

  sun() {
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < this.arr.length; i++) {
    console.log('arr[i]', this.arr[i]);
  }
  this.arr.forEach(element => {
    console.log('element', element);
  });

  this.pooja();
  }
  gun() {
    this.temp = this.a;
    this.a = this.b;
    this.b = this.temp;
    console.log('a=', this.a);
    console.log('b=', this.b);
    if (this.a === 14) {
      console.log('a is 14');

    } else {
      console.log('a is not');

    }
    this.sun();
  }

  fun() {
    if (this.a > this.b) {
      console.log('a is max');
    } else {
      console.log('b is max');
    }

    this.gun();
  }

  run() {
    this.a === 14 ? this.b = this.a : this.b = 0;
    console.log('inside run', this.b);
    this.fun();
  }

}
