import React, { Component } from "react";
import { DEFAULT_ARRAY_SIZE, DEFAULT_SELECTED_SPEED, MAX_ARRAY_SIZE, MIN_ARRAY_SIZE, SORTING_SPEED_UPPER_LIMIT } from "../../defaults";
import "./ControlBar.css";

class ControlBar extends Component {

  /**
   * Generates a new Array of given length
   * @param {number} arraySize length for new Array
   */
  resetArray = (arraySize) => {
    this.props.generateArray(arraySize);
  }

  /**
   * Changes and generates a new array of selected length
   * @param {event} event Event which trigerred the function
   */
  changeArraySize = (event) => {
    this.resetArray(event.target.value);
  }

  /**
   * Changes the algorithm 
   * @param {Object} selectedAlgo Selected algorithm object
   */
  changeAlgorithm = (selectedAlgo) => {
    document.getElementById('dropdown-algo-selector').innerText = selectedAlgo.name;
    this.props.changeAlgorithm(selectedAlgo);
  }

  /**
  * Changes the algorithm 
  * @param {event} event Event which trigerred the function
  */
  changeSpeed = (event) => {
    const selectedSpeed = (Number)(event.target.value);
    this.props.changeSpeed(selectedSpeed);
  }

  /**
   * Disables the control bar inputs for 
   * Array and Algorithm slelection
   */
  disableArrayAlgorithmInputs = () => {
    const buttonsToBeDisabled = document.getElementsByClassName('input-disable-when-running');
    for (let buttonDisablingIterator = 0; buttonDisablingIterator < buttonsToBeDisabled.length; buttonDisablingIterator++) {
      buttonsToBeDisabled[buttonDisablingIterator].setAttribute('disabled', true);
    }
  }

  /**
   * Disables the control bar's input-label-texts on the control bar
   */
  disableArrayAlgorithmTexts = () => {
    const textsToBeDisabled = document.getElementsByClassName('text-disable-when-running');
    for (let textDisablingIterator = 0; textDisablingIterator < textsToBeDisabled.length; textDisablingIterator++) {
      textsToBeDisabled[textDisablingIterator].classList.remove('text-white');
      textsToBeDisabled[textDisablingIterator].classList.add('text-muted');
    }
  }

  /**
   * Enables the control bar inputs for 
   * Array and Algorithm slelection
   */
  enableArrayAlgorithmInputs = () => {
    const buttonsToBeEnabled = document.getElementsByClassName('input-disable-when-running');
    for (let buttonEnablingIterator = 0; buttonEnablingIterator < buttonsToBeEnabled.length; buttonEnablingIterator++) {
      buttonsToBeEnabled[buttonEnablingIterator].removeAttribute('disabled');
    }
  }

  /**
   * Enables the control bar's input-label-texts on the control bar
   */
  enableArrayAlgorithmTexts = () => {
    const textsToBeEnabled = document.getElementsByClassName('text-disable-when-running');
    for (let textEnablingIterator = 0; textEnablingIterator < textsToBeEnabled.length; textEnablingIterator++) {
      textsToBeEnabled[textEnablingIterator].classList.remove('text-muted');
      textsToBeEnabled[textEnablingIterator].classList.add('text-white');
    }
  }

  /**
   * Hides start sort button on the control bar
   */
  hideStartSortingButton = () => {
    const startSortingButton = document.getElementById('btn-sort');
    startSortingButton.setAttribute('hidden', true);
  }

  /**
   * Shows start sort button on the control bar
   */
  showStartSortingButton = () => {
    const startSortingButton = document.getElementById('btn-sort');
    startSortingButton.removeAttribute('hidden');
  }

  /**
   * Shows pause button on the control bar
   */
  showPauseButton = () => {
    const pauseButton = document.getElementById('btn-pause');
    pauseButton.removeAttribute('hidden');
  }

  /**
   * Hides pause button on the control bar
   */
  hidePauseButton = () => {
    const pauseButton = document.getElementById('btn-pause');
    pauseButton.setAttribute('hidden', true);
  }

  /**
   * Shows continue button on the control bar
   */
  showContinueButton = () => {
    const continueButton = document.getElementById('btn-continue');
    continueButton.removeAttribute('hidden');
  }

  /**
   * Hides continue button on the control bar
   */
  hideContinueButton = () => {
    const continueButton = document.getElementById('btn-continue');
    continueButton.setAttribute('hidden', true);
  }

  /**
   * Shows the stop sort button on the control bar
   */
  showStopSortinButton = () => {
    const stopSortingButton = document.getElementById('btn-stop-sort');
    stopSortingButton.removeAttribute('hidden');
  }

  /**
   * Hides stop sort button on the control bar
   */
  hideStopSortingButton = () => {
    const stopSortingButton = document.getElementById('btn-stop-sort');
    stopSortingButton.setAttribute('hidden', true);
  }

  /**
   * Disables Array and Algorithm related features
   * and enables Sorting realted features
   */
  manageControlBarFeaturesWhenSortingStarts = () => {
    this.disableArrayAlgorithmInputs();
    this.disableArrayAlgorithmTexts();
    this.hideStartSortingButton();
    this.showPauseButton();
    this.showStopSortinButton();
  }

  /**
   * Enables Array and Algorithm related features
   * and enables Sorting realted features
   */
  manageControlBarFeaturesWhenSortingStops = () => {
    this.enableArrayAlgorithmInputs();
    this.enableArrayAlgorithmTexts();
    this.hidePauseButton();
    this.hideContinueButton();
    this.hideStopSortingButton();
    this.showStartSortingButton();
  }

  /**
   * Disables the control bar's feature 
   * and starts sorting
   */
  startSorting = () => {
    this.manageControlBarFeaturesWhenSortingStarts();
    this.props.startSorting();
  }

  /**
   * Pauses the sorting
   */
  pauseSorting = () => {
    this.props.pauseSorting();
    this.hidePauseButton();
    this.showContinueButton();
  }

  /**
   * Continues the paused sorting process
   */
  continueSorting = () => {
    this.hideContinueButton();
    this.showPauseButton();
    this.props.continueSorting();
  }

  /**
   * Stops the current storting process
   */
  stopSorting = () => {
    this.manageControlBarFeaturesWhenSortingStops();
    this.props.stopSorting();
  }

  /**
   * Checks if sorting is completed
   * and calls the required control
   * bar manager functions
   */
  handleIfSortingCompleted = () => {
    this.props.sortingRunStatus === 'COMPLETED' && this.manageControlBarFeaturesWhenSortingStops();
  }

  componentDidMount() {
    this.resetArray(DEFAULT_ARRAY_SIZE);
  }


  render() {
    const { array, algorithms, defaultAlgorithm } = this.props;
    const arraySize = array.length;

    this.handleIfSortingCompleted();

    return (
      <div className='nav navbar navbar-dark bg-dark text-center pt-2 pb-2'>
        <div className='navbar navbar-brand col-sm-12 col-md-6 col-lg-4 text-center m-0 p-0'>
          <h2>SORTING VISUALIZER</h2>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 m-0 p-0">
          <button className='btn btn-white btn-round mt-1 mb-1 mr-2 input-disable-when-running  array-algo-button'
            onClick={() => { this.resetArray(arraySize) }}>
            Generate New Array
          </button>

          <div className="btn-group array-algo-button">
            <button
              type="button"
              id="dropdown-algo-selector"
              className="btn btn-success dropdown-toggle input-disable-when-running col-12"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              {defaultAlgorithm.name}
            </button>
            <div className="dropdown-menu">
              <h1 className="dropdown-header text-large">Select Algorithm</h1>
              {
                algorithms.map((this_algorithm) => {
                  return (
                    <div key={this_algorithm.id}>
                      <div className="dropdown-divider"></div>
                      <button className="dropdown-item"
                        onClick={() => this.changeAlgorithm(this_algorithm)}>
                        {this_algorithm.name}
                      </button>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>

        <div className='col-md-12 col-lg-3 row slider-controls text-justify-end'>
          <div className='text-white text-center text-disable-when-running text-slider slider-controls col-sm-4 col-md-6 col-lg-6 mt-1 mb-1'>
            Array Size :
          </div>
          <input
            className='input-disable-when-running text-center slider-controls slider-range col-sm-7 col-md-6 col-lg-6 mt-1 mb-1'
            type="range"
            min={MIN_ARRAY_SIZE}
            max={MAX_ARRAY_SIZE}
            defaultValue={DEFAULT_ARRAY_SIZE}
            onChange={this.changeArraySize}
          />
          <div className='text-white text-center text-slider slider-controls col-sm-4 col-md-6 col-lg-6 mb-1'>
            Sorting Speed :
          </div>
          <input
            className='text-center slider-controls slider-range col-sm-7 col-md-6 col-lg-6 mb-1'
            type="range"
            min="1"
            max={SORTING_SPEED_UPPER_LIMIT}
            defaultValue={DEFAULT_SELECTED_SPEED}
            onChange={this.changeSpeed}
          />
        </div>

        <div className="col-sm-12 col-md-12 col-lg-2 text-center mt-1 mb-1">
          <button
            id="btn-sort"
            className="btn btn-success"
            onClick={this.startSorting}>
            START SORTING
          </button>

          <button
            id="btn-pause"
            className="btn btn-default btn-when-running mr-1"
            onClick={this.pauseSorting}
            hidden>
            Pause
          </button>

          <button
            id="btn-continue"
            className="btn btn-default btn-when-running mr-1"
            onClick={this.continueSorting}
            hidden>Continue
          </button>

          <button
            id="btn-stop-sort"
            className="btn btn-danger btn-when-running"
            onClick={this.stopSorting}
            hidden>
            Stop
          </button>

        </div>

      </div>
    )
  }
}

export default ControlBar;