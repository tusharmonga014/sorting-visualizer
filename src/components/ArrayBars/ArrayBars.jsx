import React, { Component } from "react"
import { BAR_COLOUR_PIVOT, BAR_COLOUR_SORTED, BAR_COLOUR_WHILE_CHECKING, BAR__COLOUR_DEFAULT, DELAY_AFTER_COMPLETESORT_EFFECT, DELAY_BEFORE_COMPLETESORT_EFFECT, MARGIN_BETWEEN_BARS, SCREEN_PERCENTAGE_TO_OCCUPY, TIME_BETWEEN_EACH_BAR_EFFECT } from "../../defaults";
import "./ArrayBars.css";

class ArrayBars extends Component {

    getMarginBetweenBars = (arraySize) => {
        const marginBetween = MARGIN_BETWEEN_BARS(arraySize);
        return marginBetween;
    }

    getBarsDisplayAreaWidth = (arraySize) => {
        const screenWidth = window.screen.width;
        const barsDisplayAreaWidth = Math.floor(screenWidth * SCREEN_PERCENTAGE_TO_OCCUPY(arraySize));
        return barsDisplayAreaWidth;
    }

    getBarWidth = (arraySize, barsDisplayAreaWidth, marginBetween) => {
        const barWidth = (barsDisplayAreaWidth - (marginBetween * arraySize)) / arraySize;
        return barWidth;
    }

    showBarHeight = (event) => {
        /**
         * Obataining bar and its height display 
         * box id from the event
         */
        const barId = event.target.id;
        const barIdForHeightDisplay = 'bar' + barId;

        /**
         * Getting the HTML element through their ids
         */
        const bar = document.getElementById(barId);
        const barHeightDisplayBox = document.getElementById(barIdForHeightDisplay);

        /**
         * Opacity becomes 0.5 when mouse enters the bar,
         * Height Display Box becomes visible,
         * Z-index of box is set to 1 to bring it forward than bar
         */
        bar.style.opacity = 0.5;
        barHeightDisplayBox.removeAttribute('hidden');
        barHeightDisplayBox.style.zIndex = 1;
    }

    hideBarHeight = (event) => {
        /**
         * Obataining bar and its height display 
         * box id from the event
         */
        const barId = event.target.id;
        const barIdForHeightDisplay = 'bar' + barId;

        /**
         * Getting the HTML element through their ids
         */
        const bar = document.getElementById(barId);
        const barHeightDisplayBox = document.getElementById(barIdForHeightDisplay);

        /**
         * Opacity becomes normal when mouse leaves the bar,
         * Height Display Box again becomes hidden,
         * Z-index of box is again set to -1 to prevent its area
         * from stopping mouse over effect for its bar
         */
        bar.style.opacity = 1;
        barHeightDisplayBox.setAttribute('hidden', true);
        barHeightDisplayBox.style.zIndex = -1;
    }

    giveSortingCompletedEffectWhenCompleted = () => {
        const { array, sortingRunStatus } = this.props;

        /**
         * Length of store's state array
         */
        const arraySize = array.length;

        // If sorting is commpleted show effect
        if (sortingRunStatus === 'COMPLETED') {
            const allBars = document.getElementsByClassName('bar');

            // After DELAY_BEFORE_COMPLETESORT_EFFECT ms of sorting completion show effect
            setTimeout(() => {

                // Iterating on each bar at gap of TIME_BETWEEN_EACH_BAR_EFFECT ms
                for (let barsIterator = 0; barsIterator < allBars.length; barsIterator++) {
                    setTimeout(() => {
                        // Add effect class which has background color as !important
                        allBars[barsIterator].classList.add('complete-sort-effect');
                    }, TIME_BETWEEN_EACH_BAR_EFFECT(arraySize) * barsIterator);
                }
            }, DELAY_BEFORE_COMPLETESORT_EFFECT(arraySize));

            /**
             * Remove efect after : (as all setTimeouts start together in a loop)
             * DELAY_BEFORE_COMPLETESORT_EFFECT (waiting time for showing effect)
             * (TIME_BETWEEN_EACH_BAR_EFFECT * arraySize) ms (time taken for each effect)
             * DELAY_AFTER_COMPLETESORT_EFFECT stop and display time for effect
             */
            setTimeout(() => {
                // Iterating on each bar
                for (let barsIterator = 0; barsIterator < allBars.length; barsIterator++) {
                    allBars[barsIterator].classList.remove('complete-sort-effect');
                }
            }, DELAY_BEFORE_COMPLETESORT_EFFECT(arraySize) + (TIME_BETWEEN_EACH_BAR_EFFECT(arraySize) * arraySize) + DELAY_AFTER_COMPLETESORT_EFFECT);
        }
    }

    render() {

        const { array, currentlyChecking, pivot, sortedArray, sortingRunStatus } = this.props;

        const arraySize = array.length;
        const barsDisplayAreaWidth = this.getBarsDisplayAreaWidth(arraySize);
        const marginBetween = this.getMarginBetweenBars(arraySize);
        const barWidth = this.getBarWidth(arraySize, barsDisplayAreaWidth, marginBetween);
        const displayBarHeight = window.screen.width >= 500 && arraySize < 23 ? true : false;

        this.giveSortingCompletedEffectWhenCompleted();

        return (
            <div>
                <div className="bars" style={{ width: barsDisplayAreaWidth }}>
                    {
                        array.length > 0 && array.map((bar, idx) => {
                            let backgroundColor = idx === pivot ? BAR_COLOUR_PIVOT : BAR__COLOUR_DEFAULT;
                            backgroundColor = sortedArray.includes(idx) || sortingRunStatus === 'COMPLETED' ? BAR_COLOUR_SORTED : backgroundColor;
                            backgroundColor = currentlyChecking.includes(idx) && sortingRunStatus !== 'COMPLETED' ? BAR_COLOUR_WHILE_CHECKING : backgroundColor;
                            const barIdForHeightDisplay = 'bar' + idx;

                            return (
                                <div key={idx}>

                                    {/* bar height display box */}
                                    <div
                                        id={barIdForHeightDisplay}
                                        className="bar-height-display"
                                        hidden>
                                        {bar}
                                    </div>

                                    {/* bar */}
                                    <div
                                        id={idx}
                                        className="bar"
                                        style={{ width: barWidth, height: bar, backgroundColor: backgroundColor, marginLeft: marginBetween }}
                                        onMouseOver={this.showBarHeight}
                                        onMouseLeave={this.hideBarHeight}>
                                        {displayBarHeight ? bar : ''}
                                    </div>

                                </div>
                            );
                        })
                    }
                </div >

                <div className='base-block bg-dark text-center'></div>

            </div >
        )
    }
}

export default ArrayBars;