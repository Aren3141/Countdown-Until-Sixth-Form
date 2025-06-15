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
  
  function createCountdownCard(event) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${event.name}</h2>
      <div class="date">${event.date.toDateString()}</div>
      <div class="timer" id="timer-${event.name.replace(/\s/g, '')}">
        <div><span>00</span><small>Days</small></div>
        <div><span>00</span><small>Hours</small></div>
        <div><span>00</span><small>Minutes</small></div>
        <div><span>00</span><small>Seconds</small></div>
      </div>
    `;
    return card;
  }
  
  function updateCountdowns() {
    const now = new Date();
  
    events.forEach(event => {
      const id = `timer-${event.name.replace(/\s/g, '')}`;
      const container = document.getElementById(id);
      if (!container) return;
  
      const diff = event.date - now;
  
      if (diff <= 0) {
        container.innerHTML = "<strong>🎉 It's here!</strong>";
        return;
      }
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
  
      container.innerHTML = `
        <div><span>${String(days).padStart(2, '0')}</span><small>Days</small></div>
        <div><span>${String(hours).padStart(2, '0')}</span><small>Hours</small></div>
        <div><span>${String(minutes).padStart(2, '0')}</span><small>Minutes</small></div>
        <div><span>${String(seconds).padStart(2, '0')}</span><small>Seconds</small></div>
      `;
    });
  }
  
  // Initial render
  const container = document.getElementById("countdown-container");
  events.forEach(event => {
    container.appendChild(createCountdownCard(event));
  });
  
  // Live update every second
  setInterval(updateCountdowns, 1000);
  updateCountdowns();