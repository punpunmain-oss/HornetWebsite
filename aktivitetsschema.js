fetch("aktivitetsschema.json")
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById("schema-grid");

    document.getElementById("week-title").textContent = data.week;
    document.getElementById("week-dates").textContent = data.dates;

    data.days.forEach(day => {
      const card = document.createElement("div");
      card.className = "day-card";

      let content = `<h3>${day.day}</h3>`;

      if (day.activities.length === 0) {
        content += `<p class="no-activity">Inga schemalagda aktiviteter</p>`;
      } else {
        day.activities.forEach(activity => {
          content += `
            <div class="activity-item">
              <div class="activity-name">${activity.name}</div>
              <div class="activity-time">${activity.time}</div>
            </div>
          `;
        });
      }

      card.innerHTML = content;
      grid.appendChild(card);
    });

    const note = document.createElement("div");
    note.className = "schema-note";

    const text = document.createElement("p");
    text.textContent = "Schemat kan ändras. Kontakta oss vid frågor.";

    const contactLink = document.createElement("a");
    contactLink.href = "kontakt.html";
    contactLink.textContent = "Kontakta oss";
    contactLink.classList.add("contact-link");

    note.appendChild(text);
    note.appendChild(contactLink);
    grid.parentElement.appendChild(note);


  })
  .catch(err => {
    console.error("Kunde inte ladda schema:", err);
  });
