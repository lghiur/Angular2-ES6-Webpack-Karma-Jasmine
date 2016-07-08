import { Component } from '@angular/core';

import { Counter } from 'app/common/components/counter/js/counter';

class Dashboard {}

const DashboardConfig = new Component({
  directives: [
    Counter
  ],
  selector: 'dashboard',
  templateUrl: '../template/dashboard.html'
});

Dashboard.annotations = [
  DashboardConfig
];

export { Dashboard };
