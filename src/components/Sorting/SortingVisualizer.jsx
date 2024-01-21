import React from 'react';
import {
  getMergeSortAnimations,
  getQuickSortAnimations,
  getHeapSortAnimations,
  getBubbleSortAnimations,
} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';

const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      animationSpeed: 1,
      numberOfArrayBars: 50,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < this.state.numberOfArrayBars; i++) {
      array.push(randomIntFromInterval(5, 530));
    }
    this.setState({ array });
  }

  animateSorting(animations) {
    const arrayBars = document.getElementsByClassName('array-bar');

    if (!arrayBars || arrayBars.length === 0) {
      console.error('Cannot find array bars');
      return;
    }

    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      const [barOneIdx, barTwoIdx] = animations[i];

      if (isColorChange) {
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          if (arrayBars[barOneIdx] && arrayBars[barTwoIdx]) {
            arrayBars[barOneIdx].style.backgroundColor = color;
            arrayBars[barTwoIdx].style.backgroundColor = color;
          }
        }, i * this.state.animationSpeed);
      } else {
        setTimeout(() => {
          const newHeight = animations[i][1];
          if (arrayBars[barOneIdx]) {
            arrayBars[barOneIdx].style.height = `${newHeight}px`;
          }
        }, i * this.state.animationSpeed);
      }
    }
  }


  

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array.slice());
    this.animateSorting(animations);
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array.slice());
    this.animateSorting(animations);
  }

  heapSort() {
    const animations = getHeapSortAnimations(this.state.array.slice());
    this.animateSorting(animations);
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array.slice());
    this.animateSorting(animations);
  }

  handleSpeedChange = (e) => {
    const newSpeed = parseInt(e.target.value, 10);
    this.setState({ animationSpeed: newSpeed });
  };

  handleArrayBarsChange = (e) => {
    const newArrayBars = parseInt(e.target.value, 10);
    this.setState({ numberOfArrayBars: newArrayBars }, () => {
      this.resetArray();
    });
  };

  render() {
    const { array } = this.state;

    const windowWidth = window.innerWidth;
    const barWidth = Math.floor(windowWidth / this.state.numberOfArrayBars) - 8;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              width: `${barWidth}px`,
              borderRadius: `10px 10px 0 0`,
              display: 'inline-block',
              margin: '0 4px',
            }}
          ></div>
        ))}
        <div>
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.quickSort()}>Quick Sort</button>
          <button onClick={() => this.heapSort()}>Heap Sort</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        </div>
        <div>
          <label htmlFor="speed">Animation Speed:</label>
          <input
            type="range"
            id="speed"
            name="speed"
            min="1"
            max="50"
            step="1"
            value={this.state.animationSpeed}
            onChange={this.handleSpeedChange}
          />
          <span>{this.state.animationSpeed}x</span>
        </div>
        <div>
          <label htmlFor="arrayBars">Number of Array Bars:</label>
          <input
            type="range"
            id="arrayBars"
            name="arrayBars"
            min="10"
            max="300"
            step="1"
            value={this.state.numberOfArrayBars}
            onChange={this.handleArrayBarsChange}
          />
          <span>{this.state.numberOfArrayBars}</span>
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
