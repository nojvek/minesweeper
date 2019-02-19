
import {StateController} from 'panel';

/** @typedef { import('./types').MinesweeperState } MinesweeperState */

// TODO: Make this dynamic in future for easy, medium, hard levels
const NUM_ROWS = 10;
const NUM_COLS = 10;
const NUM_MINES = 10;

const UNEXPLORED = 0;
const EXPLORED = 1;
const FLAGGED = 2;

const MINE = -1;

/** @extends {StateController<MinesweeperState>} */
export default class MinesweeperController extends StateController {
  /** @returns {MinesweeperState} */
  get defaultState() {
    return {
      startTime: Date.now(),
      numRows: NUM_ROWS,
      numCols: NUM_COLS,
      exploredGrid: this.generateGrid(NUM_ROWS, NUM_COLS, UNEXPLORED),
      mineGrid: this.populateMines(this.generateGrid(NUM_ROWS, NUM_COLS, 0), NUM_MINES),
    };
  }

  /**
   * @param {number} numRows
   * @param {number} numCols
   * @param {number} fillVal
   * @returns {number[][]}
   */
  generateGrid(numRows, numCols, fillVal) {

  }

  /**
   * @param {number[][]} grid
   * @param {number} numMines
   * @returns {number[][]}
   */
  populateMines(grid, numMines) {

  }

  reset() {
    this._update(this.defaultState);
  }
}
