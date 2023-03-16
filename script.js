const opBtn = document.getElementById('open-Button');
const cBtn = document.getElementById('close-Button');
const sNav = document.getElementById('sNav');

opBtn.addEventListener('click', () => {
  sNav.style.width = '100%';
});
cBtn.addEventListener('click', () => {
  sNav.style.width = '0';
});

const spData = [
  {
    id: 1,
    Name: 'Grey Nguyen',
    Title: 'Senior Software Developer with more than 15 years experience', 
    Desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: './images/speaker_2.png',
  },
  {
    id: 2,
    Name: 'Lila tretikov', 
    Title: 'Executive Director of the Wikipedia Foundation', 
    Desc: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
    image: './images/speaker_1.png',
  },
  {
    id: 3,
    Name: 'Kilnam Chon', 
    Title: 'CEO and Founder of Technotion org', 
    Desc: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    image: './images/speaker_3.png',
  },
  {
    id: 4,
    Name: 'Julia Leda', 
    Title: 'President of Red Hat organization', 
    Desc: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    image: './images/speaker_4.png',
  },
  {
    id: 5,
    Name: 'Ryan Merkley',
    Title: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment', 
    Desc: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    image: './images/speaker_5.png',
  },
  {
    id: 6,
    Name: 'Yochai Benkler',
    Title:'Senior Software Developer with more than 15 years experience', 
    Desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: './images/speaker_6.png',
  },
];

const loadBtn = document.getElementById('more-button');
const speakerCards = document.getElementById('sp-cards');
let out = '';

const loadItem = 2;
const screenSize = window.innerWidth;
window.addEventListener('load', () => {
  for (let i = 0; i < spData.length; i += 1) {
    const element = spData[i];
    if (screenSize < 768 && i < loadItem) {
      out += `
      <div class="sp-card">
        <img src="${element.image}" alt="icon">
        <div class="spcard-content">
            <h4>${element.Name}</h4>
            <p>${element.Title}</p>
            <hr>
            <small>${element.Desc}</small>
        </div>
      </div>
      `;
    } else if (screenSize >= 768) {
      out += `
      <div class="sp-card">
      <img src="${element.image}" alt="icon">
      <div class="sp-card-content">
            <h4>${element.Name}</h4>
            <p>${element.Title}</p>
            <hr>
            <small>${element.Desc}</small>
        </div>
      </div>
      `;
    }
  }
  const div = document.createElement('div');
  div.classList.add('sp-grid');
  speakerCards.insertBefore(div, loadBtn);
  div.innerHTML = out;

  loadBtn.addEventListener('click', () => {
    for (let i = 0; i < spData.length - 2; i += 1) {
      const element = spData[i];
      out += `
      <div class="sp-card">
      <img src="${element.image}" alt="image">
      <div class="sp-card-content">
            <h4>${element.Name}</h4>
            <p>${element.Title}</p>
            <hr>
            <small>${element.Desc}</small>
        </div>
      </div>
      `;
    }
    div.innerHTML = out;
    loadBtn.style.display = 'none';
  });
});
