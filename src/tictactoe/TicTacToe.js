import React from 'react';
import './Tic-Tac-Toe.css';
import CountGlobal from './CountGlobal';

class TicTacToe extends React.Component {
    constructor(props, count) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            count: 0,
            countX: 0,
            countO: 0,
            // className: '',
        }
        this.winnerLine = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
    }
    isWinner = (s) => {
        // перебираем массив правильных вариантов и проверяем на правильный ответ
        for (let i = 0; i < 8; i++) {
            let line = this.winnerLine[i];
            if (this.state.squares[line[0]] === s
                && this.state.squares[line[1]] === s
                && this.state.squares[line[2]] === s) {
                if (s === 'X') {
                    this.setState({ countX: this.state.countX + 1 })
                } else {
                    this.setState({ countO: this.state.countO + 1 })
                }
                setTimeout(() => {
                    // alert('Выиграл: ' + s);
                    this.setState({ squares: Array(9).fill(null), count: 0, number: 0 });
                    // this.setState({className: ''});
                })
            }
        }
    }

    // isResult = () => {
    //     setTimeout(() => {
    //         alert('Ходов больше нет')
    //         this.setState({ squares: Array(9).fill(null), count: 0 })
    //     }, 100);
    // }

    //Выбор О или Х
    choiceO = () => {
        this.setState({ squares: Array(9).fill(null), count: 1 });
    }
    choiceX = () => {
        this.setState({ squares: Array(9).fill(null), count: 0 });
    }
    //Новая партия
    newBatch = () => {
        this.setState({ squares: Array(9).fill(null) });
    }
    // Новая игра
    newGame = () => {
        this.setState({ squares: Array(9).fill(null), countX: 0, countO: 0 });
    }
    clickHandler = event => {
        // data - номер квадрата по которому прошел клик
        let data = event.target.getAttribute('data');
        // заносим в массив X и O
        let currentSquares = this.state.squares;
        // получаем что сейчас Х или О
        let xo = (this.state.count % 2 === 0) ? 'X' : 'O'
        // проверяем счетчик четный или нет, для отрисовки Х или О
        if (currentSquares[data] === null) {
            currentSquares[data] = xo;
            this.setState({ count: this.state.count + 1 });
            this.setState({ squares: currentSquares });
        } else {
            alert("Ячейка заполнена!!!");
        }
        // this.setState({className: 'bg-gray'});
        // event.currentTarget.classList.add(this.state.className);
        this.isWinner(xo);
    }
    render() {
        let a = '';
        let countXO = (
            <CountGlobal X={this.state.countX} O={this.state.countO} />
        )
        let sum = this.state.countX + this.state.countO;
        if (sum !== 0) {
            a = countXO;
        }
        return (
            <div className='wrapper' >
                <h1 className='title'>TIC-TAC-TOE</h1>
                <div className='choice__move'>
                    <p className='choice__title'>Выбор хода</p>
                    <button className='btn choice_X' onClick={this.choiceX} >Ходит X</button>
                    <span>&</span>
                    <button className='btn choice_O' onClick={this.choiceO} >Ходит O</button>
                </div>
                <p className='give' >Ходит : <span> {(this.state.count % 2 === 0) ? 'X' : 'O'}</span></p>
                <p className='abc' ><span>a</span><span>b</span><span>c</span></p>
                <div className='squares-column'>
                    <p className='left-column'><span>1</span><span>2</span><span>3</span></p>
                    <div div className='tic-tac-toe' >
                        <div className='ttt-grid' onClick={this.clickHandler} data='0'>{this.state.squares[0]}</div>
                        <div className='ttt-grid' onClick={this.clickHandler} data='1'>{this.state.squares[1]}</div>
                        <div className='ttt-grid' onClick={this.clickHandler} data='2'>{this.state.squares[2]}</div>
                        <div className='ttt-grid' onClick={this.clickHandler} data='3'>{this.state.squares[3]}</div>
                        <div className='ttt-grid' onClick={this.clickHandler} data='4'>{this.state.squares[4]}</div>
                        <div className='ttt-grid' onClick={this.clickHandler} data='5'>{this.state.squares[5]}</div>
                        <div className='ttt-grid' onClick={this.clickHandler} data='6'>{this.state.squares[6]}</div>
                        <div className='ttt-grid' onClick={this.clickHandler} data='7'>{this.state.squares[7]}</div>
                        <div className='ttt-grid' onClick={this.clickHandler} data='8'>{this.state.squares[8]}</div>
                    </div>
                </div >
                {a}
                <button className='btn new newBatch' onClick={this.newBatch} >Новая партия</button>
                <button className='btn new newGame' onClick={this.newGame} >Новая игра</button>
            </div>
        )
    }
}

export default TicTacToe;