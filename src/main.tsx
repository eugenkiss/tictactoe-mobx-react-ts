import * as ReactDOM from 'react-dom'
import * as React from 'react'
import {action, computed, observable} from 'mobx'
import {observer} from 'mobx-react'
import {Box, Flex} from './basic'
import {css} from 'emotion'

const enum Player { X = 'X', O = 'O', none = ''}

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function calculateWinner(squares: Player[]) {
  for (const [a, b, c] of lines) {
    if (squares[a] != Player.none && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return Player.none
}

class Board {
  constructor(private squares = Array(9).fill(Player.none)){}
  private coord = (x: number, y: number) => x + (y * 3)
  get = (x: number, y: number) => this.squares[this.coord(x, y)]
  with = (x: number, y: number, content: Player): Board => {
    const b = new Board(this.squares.slice())
    b.squares[this.coord(x, y)] = content
    return b
  }

  computeWinner = (): Player => {
    for (const [a, b, c] of lines) {
      if (this.squares[a] != Player.none && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a]
      }
    }
    return Player.none
  }
}

@observer class TicTacToe extends React.Component {
  boards = observable.array<Board>([new Board()])
  @computed get lastBoard() { return this.boards[this.boards.length - 1] }
  currentPlayer = Player.X

  jumpTo = action((newIndex: number) => {
    this.currentPlayer = (newIndex - 1 % 2 === 0) ? Player.X : Player.O
    this.boards.replace(this.boards.slice(0, newIndex))
  })

  @computed get statusText(): String {
    const winner = this.boards[this.boards.length - 1].computeWinner()
    if (winner === Player.X) return 'X is the winner!'
    if (winner === Player.O) return 'O is the winner!'
    if (this.currentPlayer === Player.X) return 'Current player: X'
    if (this.currentPlayer === Player.O) return 'Current player: O'
    throw new Error('Unreachable')
  }

  playMove = action((x: number, y: number) => {
    const currentBoard = this.boards[this.boards.length - 1]
    this.currentPlayer = this.currentPlayer === Player.X
      ? Player.O
      : Player.X
    this.boards.push(currentBoard.with(x, y, this.currentPlayer))
  })

  Board = observer(() =>
    <Box>
      {[0, 1, 2].map(x =>
        <Flex key={x}>
          {[0, 1, 2].map(y =>
            <button
              key={y}
              className={css`width: 1.5rem; height: 1.5rem;`}
              disabled={this.lastBoard.computeWinner() !== Player.none || this.lastBoard.get(x, y) !== Player.none}
              onClick={() => this.playMove(x, y)}
            >
              {this.lastBoard.get(x, y)}
            </button>
          )}
        </Flex>
      )}
    </Box>
  )

  Info = observer(() =>
    <Box w={3} className={css`white-space: nowrap`}>
      <Box>{this.statusText}</Box>
      {this.boards.map((step, i) =>
        <Box key={i}>
          <button onClick={() => this.jumpTo(i + 1)}>
            {`Go to move ${i + 1}`}
          </button>
        </Box>
      )}
    </Box>
  )

  render() {
    return (
      <Flex>
        <this.Board/>
        <Box w='1rem'/>
        <this.Info/>
      </Flex>
    )
  }
}

ReactDOM.render(<TicTacToe/>, document.getElementById('root'))