export interface MinesweeperState {
  /** When the game started */
  startTime: number;
  /** size of grid */
  numRows: number;
  numCols: number;
  /** Things user clicked on / flagged are visible */
  exploredGrid:number[][];
  /** Mines are -1, the hints are numbered */
  mineGrid: number[][];
}
