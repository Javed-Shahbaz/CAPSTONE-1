const speakers = {
  1: {
    name: 'Yochai Benkler',
    photo: 'img/speaker_01.svg',
    ranking: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    works: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  2: {
    name: 'SohYeong Noh',
    photo: 'img/speaker_02.svg',
    ranking: 'Director of Art Centre Nabi and a board member of CC Korea',
    works: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  3: {
    name: 'Lila tretikov',
    photo: 'img/speaker_03.svg',
    ranking: 'Executive Director of the Wikimedia Foundation',
    works: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  4: {
    name: 'Kilnam Chon',
    photo: 'img/speaker_04.svg',
    ranking: 'Ph.D in Systems Engineering from UCLA',
    works: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society\'s (ISOC) Internet Hall of Fame',
  },
  5: {
    name: 'Julia Leda',
    photo: 'img/speaker_05.svg',
    ranking: 'President of Young Pirates of Europe',
    works: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda\'s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  6: {
    name: 'Ryan Merkley',
    photo: 'img/speaker_06.svg',
    ranking: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    works: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment.',
  },
};

const countSpeakers = Object.keys(speakers).length;

function createSpeakerMob() {
  let string = '';
  for (let i = 1; i <= countSpeakers; i += 1) {
    string += `<article class="speaker">
                    <img class="speakerPh" src="${speakers[i].photo}" alt="speaker_photo">
                    <section class="speakerDet">
                      <h4>${speakers[i].name}</h4>
                      <p class="speakerRanking">${speakers[i].ranking}</p>
                      <img src="img/speakers_underline.svg" alt="underline">
                      <p class="speakerWork" >${speakers[i].works}</p>
                      </section>
                </article>`;
  }
  return string;
}

document.addEventListener('DOMContentLoaded', () => {
  const speakers = createSpeakerMob();
  document.querySelector('.fSpeakers').innerHTML = speakers;
});