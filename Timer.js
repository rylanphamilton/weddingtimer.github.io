function getTimeRemaining(start) {
  var totalSeconds = Math.floor((new Date() - start) / 1000);

  var years = Math.floor(totalSeconds / (3600 * 24 * 365));
  totalSeconds %= (3600 * 24 * 365);

  var months = Math.floor(totalSeconds / (3600 * 24 * 30));
  totalSeconds %= (3600 * 24 * 30);

  var days = Math.floor(totalSeconds / (3600 * 24));
  totalSeconds %= (3600 * 24);

  var hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;

  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;

  return {
    'years': years,
    'months': months,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(start) {
  var timer = document.getElementById('timer');

  function updateClock() {
    var timeRemaining = getTimeRemaining(start);

    timer.innerHTML =
      ('0' + timeRemaining.years).slice(-2) + ':' +
      ('0' + timeRemaining.months).slice(-2) + ':' +
      ('0' + timeRemaining.days).slice(-2) + ':' +
      ('0' + timeRemaining.hours).slice(-2) + ':' +
      ('0' + timeRemaining.minutes).slice(-2) + ':' +
      ('0' + timeRemaining.seconds).slice(-2);
  }

  updateClock();
  setInterval(updateClock, 1000);
}

var start = new Date(2021, 7, 14); // Month is 0-based
initializeClock(start);

