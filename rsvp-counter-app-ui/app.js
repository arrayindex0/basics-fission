const eventData = {
  id: "evt_9942x",
  title: "Tech Builders Mixer 2026",
  location: {
    venue: "Venia Business Hub",
    city: "Ikeja",
    state: "Lagos"
  },
  organizers: ["Regal Media", "SME Growth Network"],
  baseMetrics: {
    totalCapacity: 150,
    registeredCount: 89
  }
};

const {title, location : { city, state }, baseMetrics: { totalCapacity }} = eventData
const updatedMetrics = {...eventData.baseMetrics, registeredCount : 100}

const eventTitle = document.getElementById('event_title')
const eventLocation = document.getElementById('event_location')
const guestCount = document.getElementById('guest_count')

eventTitle.textContent = title
eventLocation.textContent = `${city}, ${state}`
guestCount.textContent = `Guest Count: ${updatedMetrics.registeredCount}/${totalCapacity}`