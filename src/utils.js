import localforage from "localforage";

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

// Set the preferred theme
export async function setPreferredTheme() {

    const preferredTheme = await getPreferredTheme();
    await setTheme(preferredTheme);
    return preferredTheme;
}

// Use the preferred theme
export function usePreferredTheme() {
    return setPreferredTheme();
}


export function truncateString(string) {
    if (string.length <= 20) {
        return string;
    } else {
        return string.substring(0, 20) + '...';
    }
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
