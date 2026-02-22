// exercise3

const filterBar = document.querySelector('#filter-bar');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');

filterBar.addEventListener('click', function(event) {

  // 1. Guard using matches()
  if (!event.target.matches('.filter-btn')) return;

  // 2. Update active button
  filterBtns.forEach(function(btn) {
    btn.classList.remove('active');
  });

  event.target.classList.add('active');

  // 3. Get filter value
  const filter = event.target.dataset.filter;

  // 4. Filter cards
  cards.forEach(function(card) {

    if (filter === 'all') {
      card.classList.remove('hidden');
      return;
    }

    const shouldHide = card.dataset.category !== filter;
    card.classList.toggle('hidden', shouldHide);
  });
});