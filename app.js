const contentBox = document.querySelector('.content-box');


contentBox.addEventListener('click', () => {
  contentBox.classList.toggle('box-scaler');
  document.querySelector('.flower-image').classList.toggle('blur-filter');
})