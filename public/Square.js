import React from 'react'

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      section: this.props.section
    }
  }

 insertMove() {
   if (this.state.value === '') {
     if (this.props.player === 'one') {
       // set the value to x
       this.setState({value: 'x'});
       //insert this value onto the board
       this.props.insertMoveOnBoard(this.state.section, 'x');
       //switch the player
       this.props.switchPlayer('one');
     } else {
       this.setState({value: 'o'});
       this.props.insertMoveOnBoard(this.state.section, 'o');
       this.props.switchPlayer('one');
     }
     this.props.checkWinner('x');
     this.props.checkWinner('o');
   } else {
     alert('You can\'t place a move here!')
   }
 }



  render () {
    const divStyle = {
      border: '1px solid black',
      padding: '10px',
      display: 'inline'
    }
    return (
      <div className='single-square' onClick={this.insertMove.bind(this)} style={divStyle}, {padding: '5px'}}>
        {this.state.value}
      </div>
    )
  }
}

export default Square;
