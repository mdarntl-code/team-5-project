import { getFeedbacks } from './api';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@fortawesome/fontawesome-free/css/all.min.css';

const LIMIT = 10;
let swiperInstance = null;

document.addEventListener('DOMContentLoaded', loadFeedbackSlider);

async function loadFeedbackSlider() {
  const response = await getFeedbacks(LIMIT);
  const feedbacks = response?.data;

  if (!Array.isArray(feedbacks) || feedbacks.length === 0) return;

  renderFeedbackSlides(feedbacks);
  initFeedbackSwiper();
}

function renderFeedbackSlides(feedbacks) {
  const wrapper = document.getElementById('feedbackList');
  wrapper.innerHTML = '';

  feedbacks.forEach(({ name, rating, descr }) => {
    wrapper.insertAdjacentHTML(
      'beforeend',
      `
      <div class="swiper-slide feedback-card">
        ${renderStars(rating)}
        <p class="feedback-text">"${descr}"</p>
        <p class="feedback-author">${name}</p>
      </div>
      `
    );
  });
}

function renderStars(rating = 0) {
  const rounded = Math.round(rating);

  return `
    <div class="feedback-rating">
      ${[1, 2, 3, 4, 5]
        .map(
          i => `
        <i class="fa-star ${
          i <= rounded ? 'fa-solid active-star' : 'fa-solid inactive-star'
        }"></i>
      `
        )
        .join('')}
    </div>
  `;
}

function initFeedbackSwiper() {
  if (swiperInstance) swiperInstance.destroy(true, true);

  swiperInstance = new Swiper('.feedback-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    grabCursor: true,

    navigation: {
      nextEl: '.feedback-next',
      prevEl: '.feedback-prev',
    },

    pagination: {
      el: '.feedback-pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3,
    },
  });
}
