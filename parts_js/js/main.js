'use strict';
{
    const $main = document.getElementById('main');
    
    $main.insertAdjacentHTML('afterbegin', `
        <input type="text" id="input">
        <div id="text_box"></div>
    `);

    // 各要素を取得
    const $input = document.getElementById('input');
    const $text_box = document.getElementById('text_box');

    // inputの状態を監視し、入力された値をtext_boxに反映
    $input.addEventListener('input', function(){
        $text_box.textContent = this.value;
    })
}