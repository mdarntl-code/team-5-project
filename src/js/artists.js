import { getArtists } from './api';
import { showPush } from './pushMessage';
import { renderArtistCards } from './render-functions';
import { filterState } from './filterState';

const loadMore = document.querySelector('.artists-button');

let page = 1;
const limit = 8;

let artists = [];
let totalArtists = 0;

function showLoadMoreBtn() {
  loadMore.classList.remove('is-hidden');
}

function hideLoadMoreBtn() {
  loadMore.classList.add('is-hidden');
}

export async function loadArtists(reset = false) {
  if (reset) {
    page = 1;
    artists = [];
  }

  const params = {
    page,
    limit,
    ...filterState,
  };

  const data = await getArtists(params);
  if (!data) return;

  totalArtists = data.totalArtists;

  if (reset) {
    renderArtistCards(data.artists, true);
  } else {
    renderArtistCards(data.artists);
  }

  artists = [...artists, ...data.artists];

  if (artists.length < totalArtists) {
    showLoadMoreBtn();
  } else {
    hideLoadMoreBtn();
  }

  if (reset && data.artists.length === 0) {
    document.getElementById('emptyState')?.classList.remove('hidden');
  } else {
    document.getElementById('emptyState')?.classList.add('hidden');
  }
}

loadArtists(true);

loadMore.addEventListener('click', loadMoreBtnHandler);

async function loadMoreBtnHandler(e) {
  e.preventDefault();
  page += 1;
  loadMore.disabled = true;
  loadMore.classList.add('loading');

  await loadArtists(false);

  loadMore.classList.remove('loading');
  loadMore.disabled = false;

  if (artists.length >= totalArtists) {
    hideLoadMoreBtn();
    showPush('You have reached the limit', 'error');
  }
}