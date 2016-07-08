import { Component, EventEmitter } from '@angular/core';

class NtsButton {
  constructor () {
    this.onClick = new EventEmitter();
  }

  handleClick (event) {
    this.onClick.emit(event);
  }
}

NtsButton.annotations = [
  new Component({
    inputs: [
      'className',
      'bid',
      'type'
    ],
    outputs: [
      'onClick'
    ],
    selector: "nts-button",
    styleUrls: ['../styles/button.scss'],
    templateUrl: '../template/button.html'
  })
];

export { NtsButton };
