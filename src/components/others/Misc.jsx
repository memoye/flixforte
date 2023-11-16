export const HelpfulError = ({ string }) => {
    const contactTMDbIndex = string.indexOf('Contact TMDb');
    if (contactTMDbIndex !== -1) {
        const stringBeforeContactTMDb = string.substring(0, contactTMDbIndex),
            stringAfterContactTMDb = string.substring(contactTMDbIndex + 12);

        return (
            <span>
                { stringBeforeContactTMDb }
                <a
                    href="https://www.themoviedb.org/talk/category/5047951f760ee3318900009a"
                    target="_blank"
                    className="link hover:link-neutral"
                >
                    Contact TMDb
                </a>
                { stringAfterContactTMDb }
            </span>
        );
    } else {
        return <span>{ string }</span>;
    }
}
// testing new account
