const incomingEvents = [
  { id: "e1", title: "Tech Builders Mixer", city: "Ikeja", premium: true },
  { id: "e2", title: "Front-end Dev Hangout", city: "Lekki", premium: false },
  { id: "e3", title: "SME Networking Summit", city: "Ikeja", premium: false },
  { id: "e4", title: "Design Thinking Workshop", city: "Yaba", premium: true }
];

const ikejaEvents = incomingEvents.filter((event) => {
    return event.city == 'Ikeja'
})

console.log(ikejaEvents);

const eventHeadlines = incomingEvents.map((event) => {
    return event.title
})

console.log(eventHeadlines);
