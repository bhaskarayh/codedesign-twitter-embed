const darkModeButton = document.querySelector('#switch');
const body = document.body;
const dataTheme = body.getAttribute('data-theme');
// const storedTheme =
//     localStorage.getItem('theme') ||
//     (window.matchMedia('(prefers-color-scheme: dark)').matches
//         ? 'dark'
//         : 'light');

console.log({ dataTheme });
darkModeButton.addEventListener('click', (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
        body.setAttribute('data-theme', 'dark');
        // body.classList.add('dark');
    } else {
        body.setAttribute('data-theme', 'light');
        // body.classList.remove('dark');
    }
});
