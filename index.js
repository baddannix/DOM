const plusButtons = document.querySelectorAll('.fa-plus-circle');
const minusButtons = document.querySelectorAll('.fa-minus-circle');
const deleteButtons = document.querySelectorAll('.fa-trash-alt');
const likeButtons = document.querySelectorAll('.fa-heart');
const totalPriceElement = document.querySelector('.total');

function updateTotal() {
  const productCards = document.querySelectorAll('.card-body');
  let total = 0;
  productCards.forEach(card => {
    const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace('$', '').trim());
    const quantity = parseInt(card.querySelector('.quantity').textContent, 10);
    total += unitPrice * quantity;
  });
  totalPriceElement.textContent = `${total} $`;
}

plusButtons.forEach(button => {
  button.addEventListener('click', () => {
    const quantityElement = button.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent, 10);
    quantity++;
    quantityElement.textContent = quantity;
    updateTotal();
  });
});

minusButtons.forEach(button => {
  button.addEventListener('click', () => {
    const quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent, 10);
    if (quantity > 0) {
      quantity--;
      quantityElement.textContent = quantity;
      updateTotal();
    }
  });
});

deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.card-body');
    productCard.remove();
    updateTotal();
  });
});

likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.style.color = button.style.color === 'red' ? 'black' : 'red';
  });
});

updateTotal();