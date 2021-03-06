import {Component} from 'panel';

// @ts-ignore
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
    // @ts-ignore
    this.controller = new Controller({store: this});
    this.setConfig(`defaultState`, this.controller.defaultState);
  }
}

customElements.define(`minesweeper-app`, MineSweeperApp);
