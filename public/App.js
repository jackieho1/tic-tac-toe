import React from 'react';
import Square from './Square.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'one',
      winner: false,
      winnerName: '',
      board: [['', '', ''],
              ['', '', ''],
              ['', '', '']];
    }
  }

  switch (player) {
    if (this.state.turn === 'one') {
      // switch over to other player's turn
      this.setState({turn: 'two'})
    } else {
      this.setState({turn: 'one'})
  }

  insertMoveOnBoard(section, mark) {
    var updatedBoard = this.state.board;
    if (section === 'tl') {
      updatedBoard[0][0] = mark;
    } else if (section === 'tm') {
      updatedBoard[0][1] = mark;
    } else if (section === 'tb') {
      updatedBoard[0][2] = mark;
    } else if (section === 'ml') {
      updatedBoard[1][0] = mark;
    } else if (section === 'mm') {
      updatedBoard[1][1] = mark;
    } else if (section === 'mr') {
      updatedBoard[1][2] = mark;
    } else if (section === 'bl') {
      updatedBoard[2][0] = mark;
    } else if (section === 'bm') {
      updatedBoard[2][1] = mark;
    } else if (section === 'br') {
      updatedBoard[2][2] = mark;
    }
    this.setState({board: updatedBoard})
  }

  checkWinner (mark) {
    // one way: manually input all possibilities... if (board[0][0] === 'x' && board[0][1] === 'x'... so on)
    // check all instances of 'x'or 'o' wins: you can win horizontally x 3, vertically x 3, and diagonally x2
    var horizontalWin = false;
    for (var i = 0; i < this.state.board.length; i++) {
      for (var j = 0; j < this.state.board[i].length; j++) {
        if (this.state.board[i][j] === mark) {
          horizontalWin = true;
        } else {
          horizontalWin = false;
          break;
        }
      }
      if (horizontalWin) {
        // if there is a horizontalWin
        this.setState({winner: true, winnerName: mark === 'x' ? 'one' : 'two' })
        return;
      }
    }

    // [['', '', ''],
    //  ['', '', ''],
    //  ['', '', '']]

    var verticalWin = false;
    var verticalCount= 0;
    while (verticalCount < 3) {
      for (var k = 0; k < this.state.board.length; k++) {
        if (this.state.board[k][verticalCount] === mark) {
          verticalWin = true;
        } else {
          // if it isn't true, exit out of for loop
          verticleWin = false;
          break;
        }
      }
      if (verticleWin) {
        this.setState({winner: true, winnerName: mark === 'x' ? 'one' : 'two' })
        return;
      }
      verticalCount++;

    }

    var diagonalWin = false;
    if (this.state.board[0][2] === mark && this.state.board[1][1] === mark && this.state.board[2][0] === mark) {
      diagonalWin = true;
    }
    if (this.state.board[0][0] === mark && this.state.board[1][1] === mark && this.state.board[2][2] === mark) {
      diagonalWin = true;
    }
    if (diagonalWin) {
      this.setState({winner: true, winnerName: mark === 'x' ? 'one' : 'two' });
    }

  }



  render () {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        { if (!this.state.winner) &&
          <h3>{"It is player's " + this.state.turn + "'s turn!"}</h3>
        }
        { if (this.state.winner) &&
          <h3>{'The winner is player ' + this.state.winnerName}</h3>
        }
        {/* add outlining styles somewhere in here or in Square ... */}
          <div className='table'>
            <div className='row'>
              <Square player={this.state.turn} checkWinner={this.checkWinner.bind(this)} section={'tl'} switchPlayer={this.switchPlayer.bind(this)} insertMoveOnBoard={this.insertMoveOnBoard.bind(this)} />
              <Square player={this.state.turn} checkWinner={this.checkWinner.bind(this)} section={'tm'} switchPlayer={this.switchPlayer.bind(this)} insertMoveOnBoard={this.insertMoveOnBoard.bind(this)}/>
              <Square player={this.state.turn} checkWinner={this.checkWinner.bind(this)} section={'tr'} switchPlayer={this.switchPlayer.bind(this)} insertMoveOnBoard={this.insertMoveOnBoard.bind(this)}/>
            </div>
            <div className='row'>
              <Square player={this.state.turn} checkWinner={this.checkWinner.bind(this)} section={'mt'} switchPlayer={this.switchPlayer.bind(this)} insertMoveOnBoard={this.insertMoveOnBoard.bind(this)}/>
              <Square player={this.state.turn} checkWinner={this.checkWinner.bind(this)} section={'mm'} switchPlayer={this.switchPlayer.bind(this)} insertMoveOnBoard={this.insertMoveOnBoard.bind(this)}/>
              <Square player={this.state.turn} checkWinner={this.checkWinner.bind(this)} section={'mr'} switchPlayer={this.switchPlayer.bind(this)} insertMoveOnBoard={this.insertMoveOnBoard.bind(this)}/>
            </div>
            <div className='row'>
              <Square player={this.state.turn} checkWinner={this.checkWinner.bind(this)} section={'bl'} switchPlayer={this.switchPlayer.bind(this)} insertMoveOnBoard={this.insertMoveOnBoard.bind(this)}/>
              <Square player={this.state.turn} checkWinner={this.checkWinner.bind(this)} section={'bt'} switchPlayer={this.switchPlayer.bind(this)} insertMoveOnBoard={this.insertMoveOnBoard.bind(this)}/>
              <Square player={this.state.turn} checkWinner={this.checkWinner.bind(this)} section={'br'} switchPlayer={this.switchPlayer.bind(this)} insertMoveOnBoard={this.insertMoveOnBoard.bind(this)}/>
            </div>
          </div>
        </div>

    )

  }

}

export default App;
