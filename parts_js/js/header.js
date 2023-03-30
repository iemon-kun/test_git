'use strict';
{
    const $header = document.getElementById('header');
    let webPageTitle = document.title;

    $header.insertAdjacentHTML('afterbegin', `
        <h1>${webPageTitle}</h1>
        <header>
            <nav>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">NEWS</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    `);
}