import {Component} from 'panel';

import template from './index.jade';
import './index.styl';

export default class MineSweeperApp extends Component {
  get config() {
    return {
      template,
      defaultState: {
        mineGrid: [],
        hintsGrid: [],
        startTime: Date.now(),
      },
      helpers: {

      },
    };
  }
}

customElements.define(`minesweeper-app`, MineSweeperApp);
