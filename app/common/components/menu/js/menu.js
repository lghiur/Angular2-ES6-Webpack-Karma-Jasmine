import { Component } from '@angular/core';

import { MenuItem } from '../components/menu-item/js/menu-item';
import { List } from 'app/common/components/list/js/list';

class Menu {}

let MenuConfig = new Component({
  directives: [
    List
  ],
  inputs: [
    'className'
  ],
  selector: 'menu',
  templateUrl: '../template/menu.html'
});

Menu.annotations = [
  MenuConfig
];

export { Menu, MenuItem };
