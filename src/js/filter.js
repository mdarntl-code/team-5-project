import { getGenres } from './api';
import { filterState } from './filterState';
import { loadArtists } from './artists';

const resetBtn = document.getElementById('resetBtn');
const resetEmpty = document.getElementById('resetEmpty');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

const sortDropdown = document.getElementById('sortDropdown');
const genreDropdown = document.getElementById('genreDropdown');
const genresList = document.getElementById('genresList');
const openBtn = document.getElementById('openFilter');
const filterPanel = document.getElementById('filterPanel');

/* ---------- OPEN PANEL ---------- */

openBtn.addEventListener('click', () => {
  filterPanel.classList.toggle('active');
  openBtn.classList.toggle('active');
});

/* ---------- UTILS ---------- */

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
}

/* ---------- GENRES ---------- */

async function loadGenres() {
  const genres = await getGenres();
  if (!genres) return;

  genresList.innerHTML = '';

  genres.forEach(g => {
    const li = document.createElement('li');
    li.textContent = g.name;

    li.addEventListener('click', () => {
      filterState.genre = g.id;
      closeAllDropdowns();
      loadArtists(true);
    });

    genresList.appendChild(li);
  });
}

/* ---------- DROPDOWNS ---------- */

sortDropdown.querySelector('.dropdown-header').addEventListener('click', () => {
  closeAllDropdowns();
  sortDropdown.classList.toggle('open');
});

genreDropdown.querySelector('.dropdown-header').addEventListener('click', () => {
  closeAllDropdowns();
  genreDropdown.classList.toggle('open');
});

sortDropdown.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => {
    filterState.sort = li.dataset.sort;
    closeAllDropdowns();
    loadArtists(true);
  });
});

/* ---------- SEARCH ---------- */

searchBtn?.addEventListener('click', () => {
  filterState.search = searchInput.value.trim();
  loadArtists(true);
});

searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    filterState.search = searchInput.value.trim();
    loadArtists(true);
  }
});

/* ---------- RESET ---------- */

function resetFilters() {
  filterState.search = '';
  filterState.sort = 'default';
  filterState.genre = null;

  searchInput.value = '';
  closeAllDropdowns();
  loadArtists(true);
}

resetBtn?.addEventListener('click', resetFilters);
resetEmpty?.addEventListener('click', resetFilters);

/* ---------- INIT ---------- */

loadGenres();
