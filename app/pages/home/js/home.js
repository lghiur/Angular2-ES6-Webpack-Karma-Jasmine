import { Component } from '@angular/core';

class Home {}

const HomeConfig = new Component({
  selector: 'home',
  templateUrl: '../template/home.html'
});

Home.annotations = [
  HomeConfig
];

export { Home };
