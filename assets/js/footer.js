// Footer Code
let currentPage = window.location.pathname;

document.querySelector(`main`).insertAdjacentHTML(`beforeend`,`<footer class="footer-info"><hr><a target="_blank" href="https://github.com/Ik1497/Ik1497.github.io/tree/main/${currentPage}" class="footer-edit mdi mdi-square-edit-outline"> Suggest Changes To This Page</a><p class="footer-update">Last updated: N/A</p></footer>`);
