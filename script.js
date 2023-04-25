
const popupForm = document.querySelector('.popup-form');
const goToFormButton = popupForm.querySelector('.go-to-form-button');
const closeFormPopap = document.querySelector('.popup-form-close')

document.addEventListener('mouseleave', () => {
  popupForm.classList.add('show');
});

//поп-ап 
setTimeout(() => {
  popupForm.classList.add('show');
}, 20000);

goToFormButton.addEventListener('click', () => {
  popupForm.classList.remove('show');
  document.querySelector('.footer-form').scrollIntoView({ behavior: 'smooth' });
});
closeFormPopap.addEventListener('click', () => {
    popupForm.classList.remove('show')
})
//дата
const currentDate = new Date();

    let pastDate = new Date();
    pastDate.setDate(currentDate.getDate() - 5);

    let year = pastDate.getFullYear();
    let month = ('0' + (pastDate.getMonth() + 1)).slice(-2);
    let day = ('0' + pastDate.getDate()).slice(-2);

    let formattedDate = day + '-' + month + '-' + year;

    document.querySelector('.day-public').innerHTML = formattedDate;

//таймер
const countDownDate = new Date().getTime() + 600000; 


const x = setInterval(function() {
  const now = new Date().getTime();

  let distance = countDownDate - now;

  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("time").innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Швидше оформлюй заявку";
  }
}, 1000);
