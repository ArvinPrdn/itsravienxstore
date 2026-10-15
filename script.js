const phone = '62881081000634';
const cards = [...document.querySelectorAll('.product-card')];
const dialog = document.querySelector('#product-dialog');
const closeButton = document.querySelector('#dialog-close');
const detailButton = document.querySelector('#order-detail-button');
const selectedType = document.querySelector('#selected-type');
const selectedPrice = document.querySelector('#selected-price');
const detailKicker = document.querySelector('#detail-kicker');
const detailTitle = document.querySelector('#detail-title');
const detailDescription = document.querySelector('#detail-description');
const detailExtra = document.querySelector('#detail-extra');
const detailPhoto = document.querySelector('#detail-photo');
const detailImage = document.querySelector('#detail-image');
const photoPlaceholder = document.querySelector('#detail-photo-placeholder');
const detailUnitPrice = document.querySelector('#detail-unit-price');
const detailTotalPrice = document.querySelector('#detail-total-price');
const detailBuy = document.querySelector('#detail-buy');
const commandPreview = document.querySelector('#detail-command-preview');
const quantityOutput = document.querySelector('#quantity');
const minusButton = document.querySelector('#quantity-minus');
const plusButton = document.querySelector('#quantity-plus');
const formatPrice = (value) => `Rp${new Intl.NumberFormat('id-ID').format(value)}`;

let selectedCard = cards[0];
let quantity = 1;

function updateOrder() {
  const price = Number(selectedCard.dataset.price);
  quantityOutput.textContent = quantity;
  detailTotalPrice.textContent = formatPrice(price * quantity);
  minusButton.disabled = quantity === 1;
  plusButton.disabled = quantity === 99;
  const command = `!beli ${selectedCard.dataset.command} ${quantity}`;
  commandPreview.textContent = command;
  detailBuy.href = `https://wa.me/${phone}?text=${encodeURIComponent(command)}`;
}

function selectCard(card) {
  selectedCard = card;
  cards.forEach((item) => {
    const active = item === card;
    item.classList.toggle('is-selected', active);
    item.setAttribute('aria-checked', String(active));
    item.tabIndex = active ? 0 : -1;
  });
  selectedType.textContent = `Atheena ${card.dataset.type}`;
  selectedPrice.textContent = formatPrice(Number(card.dataset.price));
  detailKicker.textContent = `ATHEENA ${card.dataset.type} · LICENSE KEY`;
  detailTitle.textContent = `Atheena ${card.dataset.type}`;
  detailDescription.textContent = card.dataset.description;
  detailExtra.textContent = card.dataset.detail;
  detailUnitPrice.textContent = formatPrice(Number(card.dataset.price));
  detailPhoto.classList.toggle('is-pro', card.dataset.type === 'PRO');
  const photo = card.dataset.photo.trim();
  detailImage.hidden = !photo;
  photoPlaceholder.hidden = Boolean(photo);
  if (photo) {
    detailImage.src = photo;
    detailImage.alt = `Foto Atheena ${card.dataset.type}`;
  } else {
    detailImage.removeAttribute('src');
    detailImage.alt = '';
  }
  quantity = 1;
  updateOrder();
}

detailImage.addEventListener('error', () => {
  detailImage.hidden = true;
  photoPlaceholder.hidden = false;
});

function openDetail(card) {
  selectCard(card);
  dialog.showModal();
}

cards.forEach((card, index) => {
  card.addEventListener('click', () => openDetail(card));
  card.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const step = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1;
    const next = cards[(index + step + cards.length) % cards.length];
    selectCard(next);
    next.focus();
  });
});

detailButton.addEventListener('click', () => openDetail(selectedCard));
closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
minusButton.addEventListener('click', () => {
  if (quantity > 1) quantity -= 1;
  updateOrder();
});
plusButton.addEventListener('click', () => {
  if (quantity < 99) quantity += 1;
  updateOrder();
});

selectCard(selectedCard);
