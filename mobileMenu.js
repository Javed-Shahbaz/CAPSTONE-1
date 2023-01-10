function closeMobile() {
  const Mobile = document.querySelector('.mobileMenu');

  Mobile.style.display = 'none';
}

function openMobile() {
  const Mobile = document.querySelector('.mobileMenu');
  Mobile.style.display = 'flex';
}

closeMobile();
openMobile();
