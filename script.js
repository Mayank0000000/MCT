const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not(.taken');
const seats = document.getElementById('seats');
const price = document.getElementById('price');
const list = document.getElementById('list');

let ticketPrice = Number(list.value);


function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
  
    
  
    const selectedSeatsCount = selectedSeats.length;
  
    seats.innerText = selectedSeatsCount;
    price.innerText = selectedSeatsCount * ticketPrice;
  }
  
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('taken')) {
      e.target.classList.toggle('selected');    
    }
    updateSelectedCount();

});

list.addEventListener('change', (e) => {
    ticketPrice = Number(e.target.value);
   
    updateSelectedCount();
  });
