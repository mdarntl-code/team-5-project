import axios from 'axios';

// Базовий URL для API
axios.defaults.baseURL = 'https://sound-wave.b.goit.study/api';

// Отримати список артистів, 
// потрібно передати номер сторінки і кількість артистів на сторінку
export function getArtists({ page = 1, limit }) {
  return axios.get('/artists', {
    params: { page, limit },
  });
}

// Отримати одного артиста за ID, 
// потрібно передати ID артиста
export function getArtistById(id) {
  return axios.get(`/artists/${id}`);
}

// Отримати альбоми артиста за ID,
// потрібно передати ID артиста
export function getArtistAlbums(id) {
  return axios.get(`/artists/${id}/albums`);
}


// Отримати відгуки,
// потрібно передати кількість відгуків
export function getFeedbacks(limit) {
  return axios.get('/feedbacks', {
    params: { limit },
  });
}