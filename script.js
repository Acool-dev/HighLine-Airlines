document.getElementById('loyalty-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const messageDiv = document.getElementById('loyalty-message');
  const pointsDiv = document.getElementById('loyalty-points');
  
  let users = JSON.parse(localStorage.getItem('loyaltyUsers')) || [];
  let user = users.find(u => u.username === username);
  
  if (!user) {
    const points = Math.floor(Math.random() * 100);
    user = { username, points };
    users.push(user);
    localStorage.setItem('loyaltyUsers', JSON.stringify(users));
  }
  
  messageDiv.textContent = `Thank you, ${username}! You have been added to our loyalty program.`;
  pointsDiv.textContent = `You have ${user.points} points.`;
});

const flights = [
  { number: 'FL123', destination: 'New York', departure: '10:00 AM', status: 'On Time' },
  { number: 'FL456', destination: 'Los Angeles', departure: '11:00 AM', status: 'Delayed' },
  { number: 'FL789', destination: 'Chicago', departure: '12:00 PM', status: 'On Time' }
];

const flightTable = document.getElementById('flight-schedule').getElementsByTagName('tbody')[0];

flights.forEach(flight => {
  const row = flightTable.insertRow();
  row.insertCell(0).textContent = flight.number;
  row.insertCell(1).textContent = flight.destination;
  row.insertCell(2).textContent = flight.departure;
  row.insertCell(3).textContent = flight.status;
});

document.getElementById('flight-search').addEventListener('input', function(event) {
  const query = event.target.value.toLowerCase();
  const filteredFlights = flights.filter(flight => flight.destination.toLowerCase().includes(query));
  
  flightTable.innerHTML = '';
  
  filteredFlights.forEach(flight => {
    const row = flightTable.insertRow();
    row.insertCell(0).textContent = flight.number;
    row.insertCell(1).textContent = flight.destination;
    row.insertCell(2).textContent = flight.departure;
    row.insertCell(3).textContent = flight.status;
  });
});

document.getElementById('booking-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const flightNumber = document.getElementById('flight-number').value;
  const bookingMessageDiv = document.getElementById('booking-message');
  
  bookingMessageDiv.textContent = `Thank you, ${username}! Your flight ${flightNumber} has been booked.`;
  
  window.location.href = `https://www.roblox.com/game-pass/${your-product-id}`;
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const contactMessageDiv = document.getElementById('contact-message');
  
  contactMessageDiv.textContent = `Thank you, ${name}! Your message has been sent.`;
});
