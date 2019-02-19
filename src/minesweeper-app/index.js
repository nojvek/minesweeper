import {Component} from 'panel';

import template from './index.jade';
import Controller from './controller';
import './index.styl';

export default class MineSweeperApp extends Component {
  get config() {
    return {
      template,
    };
  }

  constructor() {
    super();
    this.controller = new Controller({store: this});
    this.setConfig(`defaultState`, this.controller.defaultState);
  }
}

customElements.define(`minesweeper-app`, MineSweeperApp);
