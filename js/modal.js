const modalCloseBtn = document.querySelector(".closeBtn");
const modal = document.querySelector('.modal');
const imgCards = document.querySelectorAll('.card-section-type1 .card');

imgCards.forEach(imgCard => {
  imgCard.addEventListener('click', (e) => {
    modal.classList.add('modal-showw');
    modal.classList.remove('modal-unshow');

    let srcImage = e.target.src; 
    document.querySelector('.modalImg img').src = srcImage;
  });
});

modalCloseBtn.addEventListener('click', (e) => {
  modal.classList.remove('modal-showw');
  modal.classList.add('modal-unshow');
});