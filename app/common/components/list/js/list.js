import { Component } from '@angular/core';

import { ListItem } from '../components/list-item/js/list-item';

class List {}

const ListConfig = new Component({
  inputs: [
    'className'
  ],
  selector: "list",
  templateUrl: '../template/list.html'
});

List.annotations = [
  ListConfig
];

export { List, ListItem };
