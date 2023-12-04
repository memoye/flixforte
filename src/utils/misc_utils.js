
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
            return `${monthNames[month - 1]?.slice(0, 3)} ${day}, ${year}`;
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

export function truncateString(str, max_length = 25) {
    if (str.length > max_length) {
        return {
            truncated: true,
            str: str.slice(0, max_length) + '...'
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

export function validate(values) {
    const errors = {}

    if (!values.username) {
        errors.username = 'Required ⚠️';
    }

    if (!values.password) {
        errors.lastName = 'Required ⚠️';
    } else if (values.password.length < 4) {
        errors.password = '❌ Password must be at least 4 characters';
    }

    return errors
}

export const noInternet = {
    message: 'Connection lost!',
    code: 'NO_INTERNET',
    response:
    {
        data: {
            success: false,
            status_code: 0,
            status_message: "No internet: Please check your connection and try again."
        }
    }
}

export async function handleShowPassword(setShowPassword) {
    await setShowPassword(true)
    setTimeout(() => {
        setShowPassword(false)
        eyeToggle.click()
    }, 3000);
}

export const hasExpired = (dateStr) => {
    const expirationDate = new Date(dateStr),
        currentTime = new Date().getTime();

    return expirationDate.getTime() < currentTime;
}

export const getImage = path => `https://image.tmdb.org/t/p/original${path}`

export const getRatingPercentage = vote_average => {
    const percentage = Math.round(vote_average * 10)
    if (percentage < 0 || percentage > 100) {
        throw new Error('Percentage must be between 0 and 100');
    }

    const breakpoints = [0, 25, 50, 70, 100];
    const colors = ['red-500', 'orange-500', 'yellow-500', 'lime-500', 'green-500'];

    for (let i = 0; i < breakpoints.length - 1; i++) {
        if (percentage >= breakpoints[i] && percentage < breakpoints[i + 1]) {
            return { percentage, color: colors[i] };
        }
    }
}
