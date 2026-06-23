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


// Task 1 (Destructure): Look at the nested object example above. Try to pull title, city (nested inside location), and registeredCount (nested inside baseMetrics) in a single execution line.

const { title, location : { city }, baseMetrics : { registeredCount }} = eventData

console.log(title);
console.log(city);
console.log(registeredCount);



// Task 2 (Spread Object): Look at the premiumPlan example. Create updatedMetrics by spreading eventData.baseMetrics and overwriting registeredCount to 90.

const updatedMetrics = {...eventData.baseMetrics, registeredCount : 90}

console.log(eventData);
console.log(updatedMetrics);



// Task 3 (Spread Array): Look at the upgradedSkills example. Create allSponsors by spreading eventData.organizers and appending "Lagos Tech Hub"
const allSponsors = [...eventData.organizers, "Lagos Tech Hub"]

console.log(allSponsors);
console.log(eventData);

