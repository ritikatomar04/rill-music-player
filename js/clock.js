function updateTime() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var ampm = hours >= 12 ? 'PM': 'AM';
  hours = hours % 12;
  hours = hours ? hours: 12; // Convert 0 to 12
  minutes = minutes < 10 ? '0' + minutes: minutes;
  var timeString = hours + ':' + minutes + ' ' + ampm;

  var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  };
  var dateString = today.toLocaleDateString(undefined, options);

  var timeDiv = document.getElementById('time');
  var dateDiv = document.getElementById('date');
  timeDiv.textContent = timeString;
  dateDiv.textContent = dateString;
}

updateTime(); // Initial call to display immediately
setInterval(updateTime, 1000); // Update every second
