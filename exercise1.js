// exercise1

const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function(event) {

  // 1. Find closest trigger
  const trigger = event.target.closest('.accordion-trigger');
  if (!trigger) return; // Click was not on a trigger

  // 2. Find the parent accordion item
  const item = trigger.closest('.accordion-item');

  // 3. Close all accordion items
  const allItems = document.querySelectorAll('.accordion-item');
  allItems.forEach(function(i) {
    if (i !== item) {
      i.classList.remove('open');
    }
  });

  // 4. Toggle the clicked item
  item.classList.toggle('open');
});