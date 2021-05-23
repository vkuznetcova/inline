var btnUp = document.querySelector('.btn-up');
window.addEventListener('scroll', ()=>{
  (window.pageYOffset >= 300) ? 
  btnUp.classList.add('visible') : 
  btnUp.classList.remove('visible');
});
btnUp.onclick=()=>{
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
}

var readMore = document.querySelector('.company-info__txt-more'),
    count = 0;
 readMore.onclick=()=>{
    document.querySelector('.company-info__txt-desc').classList.toggle('active');
    readMore.innerHTML = "Свернуть";
    count++;
    if (count % 2 == 0) readMore.innerHTML = "Читать всё"
 }   
