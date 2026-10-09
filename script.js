const resourceData = {
  1: { title: 'The History of English', image: 'assets/resource1.png', alt: 'Diagram of the historical stages of English and the peoples and events influencing them.' },
  2: { title: 'The Etymology of Ice', image: 'assets/resource2.png', alt: 'Etymological dictionary entry for the English word ice.' },
  3: { title: 'British Malaya', image: 'assets/resource3.png', alt: 'Historical chart of British Malaya and British Borneo.' },
  4: { title: 'Additional Evidence', image: 'assets/resource4.png', alt: 'Timeline of British influence in Malaysia, from 1786 to 1957.' }
};
const viewer = document.querySelector('#viewer');
const image = document.querySelector('#viewer-image');
const original = document.querySelector('#open-original');
function openResource(n) {
  const resource = resourceData[n];
  if (!resource) return;
  document.querySelector('#viewer-number').textContent = `RESOURCE ${String(n).padStart(2, '0')}`;
  document.querySelector('#viewer-title').textContent = resource.title;
  image.src = resource.image;
  image.alt = resource.alt;
  original.href = resource.image;
  if (!viewer.open) viewer.showModal();
}
document.querySelectorAll('[data-resource]').forEach(button => button.addEventListener('click', () => openResource(Number(button.dataset.resource))));
document.querySelector('#viewer-close').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', e => { if (e.target === viewer) viewer.close(); });
viewer.addEventListener('close', () => { image.removeAttribute('src'); });
