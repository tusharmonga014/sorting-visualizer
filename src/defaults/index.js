/**
 * Array's lowest value
 */
const ARRAY_MIN_VALUE = 40;
/**
 * Array's largest value
 * ARRAY_MAX_VALUE > 500 will overlap with Control-Bar
 */
const ARRAY_MAX_VALUE = window.screen.width <= 700 ? 350 : 425;

/**
 * Sorting speed range
 * SORTING_SPEED_LOWER_LIMIT is 0 always
 */
const SORTING_SPEED_UPPER_LIMIT = 500;
const DEFAULT_SELECTED_SPEED = 500;

/**
 * Minimum array length
 */
const MIN_ARRAY_SIZE = 10;
/**
 * Maximum array length
 */
const MAX_ARRAY_SIZE = window.screen.width <= 600 ? 100 : 200;
const DEFAULT_ARRAY_SIZE = MAX_ARRAY_SIZE / 1.5;

/**
 * Bar colour when its neither sorted 
 * nor in the process of being sorted
 */
const BAR__COLOUR_DEFAULT = 'rgb(0, 204, 255)';
// const BAR__COLOUR_DEFAULT = 'rgb(0, 255, 145)';
/**
 * Bar colour when its in the process for sorting
 */
const BAR_COLOUR_WHILE_CHECKING = 'blue';
/**
 * Bar colour when it has been sorted
 */
const BAR_COLOUR_SORTED = 'purple';
/**
 * Bar colour when it is pivot
 */
const BAR_COLOUR_PIVOT = 'rgb(102, 255, 51)';


/**
 * Default selected sorting algorithm Id
 * shown in dropdown algo selector
 */
const DEFAULT_SELECTED_ALGORITHM_ID = 0;

/**
 * tells margin between bars
 * @param {*} arraySize the length of array 
 * @returns space between each bar depending upon the arraySize
 */
const MARGIN_BETWEEN_BARS = (arraySize) => {
    return arraySize <= 10 ? 4
        : arraySize <= 50 ? 2
            : 1
};

/**
 * tells the amount of screen to occupy
 * @param {*} arraySize the length of the array
 * @returns the amount of screen to occupy in 
 *          terms of decimal from 0-1 where 
 *          0 shows empty space and
 *          1 shows full screen 
 */
const SCREEN_PERCENTAGE_TO_OCCUPY = (arraySize) => {
    return window.screen.width <= 600 ? 0.80
        : arraySize <= 16 ? 0.50
            : 0.66;
}

/**
 * .............................
 * EXPORTS
 * ............................. 
 */
export {
    ARRAY_MIN_VALUE,
    ARRAY_MAX_VALUE,
    SORTING_SPEED_UPPER_LIMIT,
    DEFAULT_SELECTED_SPEED,
    MIN_ARRAY_SIZE,
    MAX_ARRAY_SIZE,
    DEFAULT_ARRAY_SIZE,
    BAR__COLOUR_DEFAULT,
    BAR_COLOUR_WHILE_CHECKING,
    BAR_COLOUR_SORTED,
    BAR_COLOUR_PIVOT,
    DEFAULT_SELECTED_ALGORITHM_ID,
    MARGIN_BETWEEN_BARS,
    SCREEN_PERCENTAGE_TO_OCCUPY
}