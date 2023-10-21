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
