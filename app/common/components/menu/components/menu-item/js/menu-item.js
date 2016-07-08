import { Component } from '@angular/core';

import { NtsLink } from 'app/common/components/nts-link/js/nts-link';
import { ListItem } from 'app/common/components/list/js/list';

class MenuItem {}

const MenuItemConfig = new Component({
  directives: [
    NtsLink,
    ListItem
  ],
  inputs: [
    'className',
    'route'
  ],
  selector: 'menu-item',
  templateUrl: '../template/menu-item.html'
});

MenuItem.annotations = [
  MenuItemConfig
];

export { MenuItem };
