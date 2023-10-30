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
// export async function setPreferredTheme() {


// }

// Use the preferred theme
export async function usePreferredTheme() {
    const preferredTheme = await getPreferredTheme();
    await setTheme(preferredTheme);
    return preferredTheme;
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

export const nowPlaying = {
    "dates": {
        "maximum": "2023-11-01",
        "minimum": "2023-09-14"
    },
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/j1tsaNApV08jGHd5MuZnbOLEh1b.jpg",
            "genre_ids": [
                27,
                53
            ],
            "id": 507089,
            "original_language": "en",
            "original_title": "Five Nights at Freddy's",
            "overview": "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
            "popularity": 1854.647,
            "poster_path": "/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg",
            "release_date": "2023-10-27",
            "title": "Five Nights at Freddy's",
            "video": false,
            "vote_average": 8.6,
            "vote_count": 34
        },
        {
            "adult": false,
            "backdrop_path": "/azD31DjpV3PJfjF3h72LVw2WCSD.jpg",
            "genre_ids": [
                27
            ],
            "id": 807172,
            "original_language": "en",
            "original_title": "The Exorcist: Believer",
            "overview": "When his daughter and her friend show signs of demonic possession, it unleashes a chain of events that forces single father, Victor Fielding, to confront the nadir of evil. Terrified and desperate, he seeks out the only person alive who's witnessed anything like it before.",
            "popularity": 1379.224,
            "poster_path": "/qVKirUdmoex8SdfUk8WDDWwrcCh.jpg",
            "release_date": "2023-10-06",
            "title": "The Exorcist: Believer",
            "video": false,
            "vote_average": 5.8,
            "vote_count": 221
        },
        {
            "adult": false,
            "backdrop_path": "/iQcCAm8hKWZyUntqrvzyEGtXyJl.jpg",
            "genre_ids": [
                878,
                28,
                53
            ],
            "id": 670292,
            "original_language": "en",
            "original_title": "The Creator",
            "overview": "Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.",
            "popularity": 185.233,
            "poster_path": "/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
            "release_date": "2023-09-29",
            "title": "The Creator",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 447
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [],
            "id": 1174928,
            "original_language": "en",
            "original_title": "A Weekend to Forget",
            "overview": "\"A Weekend to Forget\" follows a group of seven friends who reunite for a weekend getaway after years of being apart. However, their reunion is not as smooth as they hoped it would be, as old tensions and unresolved issues resurface. Things take a turn for the worse when one of the friends is found dead.",
            "popularity": 14.324,
            "poster_path": "/qwO7vjOcmcGLGzirCILSqmQVa32.jpg",
            "release_date": "2023-09-22",
            "title": "A Weekend to Forget",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                18,
                28
            ],
            "id": 1190800,
            "original_language": "en",
            "original_title": "Merry Men 3",
            "overview": "The film tells the story of four Abuja’s most eligible and notorious bachelors. Their lives are wrapped in flamboyancy with their network and thriving businesses, fast cars, luxury homes, and the women in their lives in exc",
            "popularity": 1.824,
            "poster_path": null,
            "release_date": "2023-10-13",
            "title": "Merry Men 3",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [],
            "id": 1174934,
            "original_language": "en",
            "original_title": "Something Like Gold",
            "overview": "Hilarious and heartwarming story of two strangers who meet at a gold shop and end up falling in love. But their relationship is not as smooth as they hope, as they have to deal with family drama, cultural differences, and a gold heist gone wrong",
            "popularity": 1.415,
            "poster_path": null,
            "release_date": "2023-09-29",
            "title": "Something Like Gold",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [],
            "id": 1174922,
            "original_language": "en",
            "original_title": "Kanaani",
            "overview": "The movie tells how it all began during the journey of Slavery prostitution in africa and in our society",
            "popularity": 1.4,
            "poster_path": "/kiBBKu91FswvT5iSIdhA5gxxZwM.jpg",
            "release_date": "2023-09-15",
            "title": "Kanaani",
            "video": false,
            "vote_average": 5,
            "vote_count": 2
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                35,
                80
            ],
            "id": 1186415,
            "original_language": "en",
            "original_title": "Charlie and the Boys",
            "overview": "Charles Omokwe is released from jail after serving just 13 months of a 7-year prison sentence for a failed heist. Realizing he was betrayed by his employer; he plots his revenge to steal the artifact while staying a step ahead of the law.",
            "popularity": 1.372,
            "poster_path": null,
            "release_date": "2023-09-29",
            "title": "Charlie and the Boys",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                10751
            ],
            "id": 1187511,
            "original_language": "en",
            "original_title": "Pind America",
            "overview": "Embarks on a journey that traverses the rustic essence of a Pind (village) in India and the bustling, vibrant life of America. It’s not just a movie; it’s a story that promises to resonate with many, especially those who’ve lived between two cultures, two worlds, and two lifestyles.",
            "popularity": 1.273,
            "poster_path": null,
            "release_date": "2023-10-06",
            "title": "Pind America",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                35
            ],
            "id": 1181000,
            "original_language": "en",
            "original_title": "A Bag of Trouble",
            "overview": "After receiving a token of appreciation from a wealthy politician, a young man’s life takes a tumble. Realizing the burden of being rich, he must now stand up and fight the evil he perceives are closing in or slide back into a world of poverty he knows too well.",
            "popularity": 0.845,
            "poster_path": null,
            "release_date": "2023-09-18",
            "title": "A Bag of Trouble",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        }
    ],
    "total_pages": 1,
    "total_results": 10
}