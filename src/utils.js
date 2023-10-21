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
        const value = await localforage.setItem('preferedTheme', theme)
        document.body.classList.add(value)
    } catch (err) {
        console.log(err)
    }
}

export async function usePreferedTheme() {
    // localforage.clear()
    let preferedTheme = await localforage.getItem('preferedTheme')
    console.log(preferedTheme)
    if (preferedTheme === null) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

        } else {

        }
    } else {
        setTheme(preferedTheme)
    }
}

setTheme(1)

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
