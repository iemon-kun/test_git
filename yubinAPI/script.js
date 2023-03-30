const contactForm = document.forms.contact;
const prefectureInput = contactForm.querySelector('input[name=prefecture]');
const cityInput = contactForm.querySelector('input[name=city]');
const townInput = contactForm.querySelector('input[name=town]');


contactForm.postcode.addEventListener('input', e => {
    if(e.target.value.length === 7){
        console.log('7文字入力されました');
        let number = contactForm.postcode.value;
        fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${number}`)
        .then(responese => responese.json())
        .then(data => {
            console.log(data.results[0].address1); // 都道府県名
            console.log(data.results[0].address2); // 市区町村名
            console.log(data.results[0].address3); // 町域名

            prefectureInput.value = data.results[0].address1;
            cityInput.value = data.results[0].address2;
            townInput.value = data.results[0].address3;
        })
        .catch(error => console.log(error))
    };
})