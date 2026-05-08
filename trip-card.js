const tripData = [
    { id: 1, name: "Zurich HB", time: "08:30" },
    { id: 2, name: "Bern", time: "09:15" },
    { id: 3, name: "Lausanne", time: "10:05" },
    { id: 4, name: "Geneva Airport", time: "10:45" }
];

const stopsListEl = document.getElementById('stopsList');
const cardEl = document.getElementById('tripCard');
let selectedStopId = null;

// Render Stops
function renderStops() {
    stopsListEl.innerHTML = '';
    tripData.forEach(stop => {
        const li = document.createElement('li');
        li.className = `stop-item ${selectedStopId === stop.id ? 'selected' : ''}`;
        li.onclick = (e) => selectStop(e, stop.id); // Handle selection
        
        li.innerHTML = `
            <div>
                <div style="font-weight:600">${stop.name}</div>
                <div class="stop-time">${stop.time}</div>
            </div>
            <button class="select-btn" onclick="event.stopPropagation()">Select</button>
        `;
        stopsListEl.appendChild(li);
    });
}

// Toggle Dropdown
function toggleTripDetails(event) {
    // Prevent toggling if clicking a button inside
    if (event.target.tagName === 'BUTTON') return;
    cardEl.classList.toggle('open');
}

// Select a stop
function selectStop(event, id) {
    event.stopPropagation(); // Prevent card toggle
    selectedStopId = id;
    renderStops();
    
    // Optional: Log selection or trigger action
    const stopName = tripData.find(s => s.id === id).name;
    console.log(`Selected stop: ${stopName}`);
    
    // Close card after selection (optional UX choice)
    // cardEl.classList.remove('open'); 
}

// Initialize
renderStops();