const opBtn = document.getElementById('open-Button');
const cBtn = document.getElementById('close-Button');
const sNav = document.getElementById('sNav');

opBtn.addEventListener('click', () => {
  sNav.style.width = '100%';
});
cBtn.addEventListener('click', () => {
  sNav.style.width = '0';
});

const data_speakers = [
  {
    id: 1,
    name: 'Grey Nguyen',
    title: 'Introducing Antares & Our New Corporate Cards',
    desc: 'More ways to spend your funds, and contextualize your data.',
    image: './images/speaker_1.png',
  },
  {
    id: 2,
    name: 'Marcella Plazas',
    title:
      'Discovering a Constellation: Meet Tiffany',
    desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: './images/speaker_2.png',
  },
  {
    id: 3,
    name: 'Yochai Benkler',
    title:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: './images/speaker_3.png',
  },
  {
    id: 4,
    name: 'Yochai Benkler',
    title:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: './images/speaker_4.png',
  },
  {
    id: 5,
    name: 'Yochai Benkler',
    title:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: './images/speaker_5.png',
  },
  {
    id: 6,
    name: 'Yochai Benkler',
    title:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: './images/speaker_6.png',
  },
];

const loadBtn = document.getElementById('more-button');
const spCards = document.getElementById('sp-cards');
let out = '';

const loadItems = 2;
const scSize = window.innerWidth;
window.addEventListener('load', () => {
  for (let i = 0; i < data_speakers.length; i += 1) {
    const element = dataObj[i];
    if (scSize < 768 && i < loadItems) {
      out += `
      <div class="sp-card">
        <img src="${element.image}" alt="icon">
        <div class="spcard-content">
            <h4>${element.name}</h4>
            <p>${element.title}</p>
            <hr>
            <small>${element.desc}</small>
        </div>
      </div>
      `;
    } else if (screenSize >= 768) {
      out += `
      <div class="sp-card">
      <img src="${element.image}" alt="icon">
      <div class="sp-card-content">
            <h4>${element.name}</h4>
            <p>${element.title}</p>
            <hr>
            <small>${element.desc}</small>
        </div>
      </div>
      `;
    }
  }
  const div = document.createElement('div');
  div.classList.add('sp-grid');
  spCards.insertBefore(div, loadBtn);
  div.innerHTML = out;

  loadBtn.addEventListener('click', () => {
    for (let i = 0; i < data_speakers.length - 2; i += 1) {
      const element = data_speakers[i];
      out += `
      <div class="sp-card">
      <img src="${element.image}" alt="icon">
      <div class="sp-card-content">
            <h4>${element.name}</h4>
            <p>${element.title}</p>
            <hr>
            <small>${element.desc}</small>
        </div>
      </div>
      `;
    }
    div.innerHTML = out;
    loadBtn.style.display = 'none';
  });
});
