const ratingBtns = document.querySelectorAll('input[name="rating-button"]');
const submitBtn = document.querySelector('.submit-button');

const selectedConfirmed = document.querySelector('.text-container');

const beforeMenu = document.querySelector('.container-before');
const afterMenu = document.querySelector('.container-after');

submitBtn.addEventListener('click', () => {
    let selected;
    for (const rating of ratingBtns) {
        if (rating.checked) {
            selected = rating.value;
        }
    }

    if (selected != null) {
        beforeMenu.style.display = 'none';
        afterMenu.style.display = 'block';

        selectedConfirmed.innerHTML = `You selected ${selected} out of 5`;
    }
});