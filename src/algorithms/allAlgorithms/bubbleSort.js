import { store } from "../../store";
import { swapValues } from "../../actions/array";
import { setCurrentlyChecking } from "../../actions/currentlyChecking";
import { addToSortedArray } from "../../actions/sortedArray";
import { sortingCompleted } from "../../actions/sortingRunStatus";
import continueAfterDelayIfNotStopped from ".././helpers/continueAfterDelayIfNotStopped";

/**
 * BUBBLE SORT : 
 * 
 * Bubble Sort is the simplest sorting algorithm that works by repeatedly 
 * swapping the adjacent elements if they are in wrong order.
 * 
 * It works on the principle of keeping the heaviest element(or bubble)
 * at last position in each iteration and working on remaining in next.
 */

/**
 * Performs Bubble Sort on the store's Array
 */
async function bubbleSort() {


    /** 
     * Gets current state object
     */
    const state = store.getState();

    /** 
     * Store's state Array
     */
    const localArray = state.array;

    /**
     * length of array
     */
    const arraySize = state.array.length;

    /**
     * Aborts the sort if value is false
     */
    let continueSort = true;

    // Bubble Sort Algorithm 

    // Outer loop
    for (let outerLoopIterator = 0; outerLoopIterator < arraySize - 1; outerLoopIterator++) {
        let innerLoopIterator = 0;

        //Inner loop
        for (innerLoopIterator = 0; innerLoopIterator < arraySize - outerLoopIterator - 1; innerLoopIterator++) {

            // Check if stopped or paused - delay accoring to selected speed - again check
            continueSort = await continueAfterDelayIfNotStopped();
            // Return if stopped
            if (!continueSort)
                return;

            // Setting the current indices which are being checked to currentlyChecking
            store.dispatch(setCurrentlyChecking([innerLoopIterator, innerLoopIterator + 1]));

            if (localArray[innerLoopIterator] > localArray[innerLoopIterator + 1]) {

                // Check if stopped or paused - delay accoring to selected speed - again check
                continueSort = await continueAfterDelayIfNotStopped();
                // Return if stopped
                if (!continueSort)
                    return;

                // Swaps the values in store's state Array
                store.dispatch(swapValues(innerLoopIterator, innerLoopIterator + 1));
            }

            // Check if stopped or paused - delay accoring to selected speed - again check
            continueSort = await continueAfterDelayIfNotStopped();
            // Return if stopped
            if (!continueSort)
                return;
        }

        // Adding the 'j' which has been sorted to sortedArray
        store.dispatch(addToSortedArray(innerLoopIterator));
    }

    // Removing the first bar as currentlyChecking
    store.dispatch(setCurrentlyChecking([]));

    // First bar needs to be marked explicitly as 
    // it doesn't go inside inner loop
    store.dispatch(addToSortedArray(0));

    // After sorting sets the Sorting Running Status to COMPLETED
    store.dispatch(sortingCompleted());
}

export default bubbleSort;