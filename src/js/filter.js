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

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
}

async function loadGenres() {
  const genres = await getGenres();
  genresList.innerHTML = '';

  genres.forEach(g => {
    const li = document.createElement('li');
    li.textContent = g.name;

    li.onclick = () => {
      filterState.genre = g.id;
      closeAllDropdowns();
      loadArtists(true);
    };

    genresList.appendChild(li);
  });
}

sortDropdown.querySelector('.dropdown-header').onclick = () => {
  closeAllDropdowns();
  sortDropdown.classList.toggle('open');
};

genreDropdown.querySelector('.dropdown-header').onclick = () => {
  closeAllDropdowns();
  genreDropdown.classList.toggle('open');
};

sortDropdown.querySelectorAll('li').forEach(li => {
  li.onclick = () => {
    filterState.sort = li.dataset.sort;
    closeAllDropdowns();
    loadArtists(true);
  };
});

searchBtn.onclick = () => {
  filterState.search = searchInput.value.trim();
  loadArtists(true);
};

searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    filterState.search = searchInput.value.trim();
    loadArtists(true);
  }
});

function resetFilters() {
  filterState.search = '';
  filterState.sort = 'default';
  filterState.genre = null;

  searchInput.value = '';
  closeAllDropdowns();
  loadArtists(true);
}

resetBtn.onclick = resetFilters;
resetEmpty.onclick = resetFilters;

loadGenres();
