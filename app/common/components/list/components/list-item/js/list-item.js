import { Component } from '@angular/core';

class ListItem {}

const ListItemConfig = new Component({
  inputs: [
    'className'
  ],
  selector: 'list-item',
  templateUrl: '../template/list-item.html'
});

ListItem.annotations = [
  ListItemConfig
];

export { ListItem };
