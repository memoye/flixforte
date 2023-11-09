
import localforage from "localforage";

export const apprx = Math.round

export function roundToNearestHalf(value) {
    // Get the integer part of the value
    const integerPart = Math.floor(value);

    // Get the decimal part of the value
    const decimalPart = value - integerPart;

    // If the decimal part is greater than or equal to 0.25, round up to the nearest half
    if (decimalPart >= 0.25) {
        return integerPart + 0.5;
    }

    // Otherwise, round down to the nearest half
    else {
        return integerPart;
    }
}

export function formatDate(date, part) {
    const dateObject = new Date(date),
        year = dateObject.getFullYear(),
        month = dateObject.getMonth() + 1,
        day = dateObject.getDate();

    // Get the month name from the month number.
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    switch (part) {
        case 'year':
            return year;
        case 'month':
            return month;
        case 'day':
            return day;
        default:
            return `${day} ${monthNames[month - 1]}, ${year}`;
    }
}


// To toggle light or dark mode
export async function setTheme(theme) {
    const availableThemes = ['dark', 'light'];
    document.body.classList.remove(...availableThemes);

    try {
        await localforage.setItem('preferredTheme', theme);
        document.body.classList.add(availableThemes[theme]);
    } catch (err) {
        console.log(err);
    }
}

// Get the preferred theme from local storage or the user's device settings
export async function getPreferredTheme() {
    let preferredTheme = await localforage.getItem('preferredTheme');

    if (preferredTheme === null) {
        // If the preferred theme is not set in local storage, check the user's device settings
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            preferredTheme = 0;
        } else {
            preferredTheme = 1;
        }
    }

    return preferredTheme;
}

// Use the preferred theme
export async function usePreferredTheme() {
    const preferredTheme = await getPreferredTheme();
    await setTheme(preferredTheme);
    return preferredTheme;
}

export function stopBubbling(event) {
    event.stopPropagation();
}

// a debounce function
export function debounce(func, wait = 100) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func(...args);
        }, wait);
    };
}

export function truncateString(str) {
    if (str.length > 25) {
        return {
            truncated: true,
            str: str.slice(0, 25) + '...'
        } // Truncate and add '...' to indicate truncation
    } else {
        return {
            truncated: false,
            str,
        }; // Return the original string if less
    }
}

export function isReleased(dateString) {
    const currentDate = new Date();
    const inputDate = new Date(dateString);

    // Compare the input date with the current date
    return inputDate < currentDate;
}