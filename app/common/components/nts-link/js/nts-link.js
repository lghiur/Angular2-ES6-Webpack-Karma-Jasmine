import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

class NtsLink {}

const NtsLinkConfig = new Component({
  directives: [
    ROUTER_DIRECTIVES
  ],
  inputs: [
    'route'
  ],
  selector: "nts-link",
  templateUrl: '../template/nts-link.html'
});

NtsLink.annotations = [
  NtsLinkConfig
];

export { NtsLink };
