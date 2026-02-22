// exercise2

const tagInput = document.querySelector('#tag-input');
const tagContainer = document.querySelector('#tag-container');

// Add tag when Enter is pressed
tagInput.addEventListener('keydown', function(event) {
  if (event.key !== 'Enter') return;

  const value = tagInput.value.trim();
  if (!value) return;

  const tag = document.createElement('div');
  tag.className = 'tag';
  tag.innerHTML = `${value} <span class="tag-remove">&times;</span>`;

  tagContainer.appendChild(tag);
  tagInput.value = '';
});

// Delegated remove
tagContainer.addEventListener('click', function(event) {

  // Use matches() to check if remove button was clicked
  if (!event.target.matches('.tag-remove')) return;

  event.target.closest('.tag').remove();
});