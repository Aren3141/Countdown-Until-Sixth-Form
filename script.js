const events = [
    {
      name: "GCSE Results Day",
      date: new Date("August 21, 2025 09:00:00")
    },
    {
      name: "Start of Sixth Form",
      date: new Date("September 2, 2025 08:00:00")
    }
  ];
  
  function updateCountdowns() {
    const countdownContainer = document.getElementById("countdown");
    countdownContainer.innerHTML = ""; // Clear previous content
  
    events.forEach(event => {
      const now = new Date();
      const diff = event.date - now;
  
      let countdownText;
  
      if (diff <= 0) {
        countdownText = `<p><strong>${event.name}</strong><br>🎉 This event has started!</p>`;
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
  
        countdownText = `
          <div class="event-block">
            <h2>${event.name}</h2>
            <p><em>${event.date.toDateString()}</em></p>
            <div class="timer">
              <div><span>${String(days).padStart(2, '0')}</span><small>Days</small></div>
              <div><span>${String(hours).padStart(2, '0')}</span><small>Hours</small></div>
              <div><span>${String(minutes).padStart(2, '0')}</span><small>Minutes</small></div>
              <div><span>${String(seconds).padStart(2, '0')}</span><small>Seconds</small></div>
            </div>
          </div>
        `;
      }
  
      countdownContainer.innerHTML += countdownText;
    });
  }
  
  setInterval(updateCountdowns, 1000);
  updateCountdowns();