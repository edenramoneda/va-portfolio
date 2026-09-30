document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.querySelector('#project-lightbox');
  const image = document.querySelector('#project-lightbox-image');
  const title = document.querySelector('#project-lightbox-title');
  const closeButton = document.querySelector('[data-lightbox-close]');

  if (!dialog || !image || !title || !closeButton) return;

  document.querySelectorAll('[data-lightbox-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      image.src = trigger.dataset.imageSrc;
      image.alt = trigger.dataset.imageAlt;
      title.textContent = trigger.dataset.imageTitle;
      dialog.showModal();
    });
  });

  closeButton.addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});
