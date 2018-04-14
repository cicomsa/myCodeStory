import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import GuessForm from './GuessForm'
import {randWord} from '../reducers/button'
import './guessTheWord.css'


class GuessTheWord extends PureComponent {

  render() {
    const buttons = this.props.button
    const number_tries = this.props.tries
    function br() {

      if (buttons === randWord.toString()){
        return <p className="result">You won!</p>
      }
      if (number_tries === 0){
        return <p className="result">You lost!</p>
      }
    }
    const {hangmanImage} = this.props
  return (

    <div className="mainPage">
      <div className ="content">
        <img className="image"src={hangmanImage} alt="hangmanImage"/>
        <p>Number of tries left: </p>
        <p>{number_tries}</p>
        <p>{buttons}</p>
        <GuessForm/>
        {br()}
        <p className="newWord" onClick={() => window.location.reload()}>New Word</p>
      </div>
    </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
  button: state.button,
  tries: state.tries,
  hangmanImage: state.hangmanImage
  }
}

export default connect (mapStateToProps)(GuessTheWord)
