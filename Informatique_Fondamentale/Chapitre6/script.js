// Fonction pour générer une couleur aléatoire
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Faire pivoter le fantôme et changer la couleur de fond lorsqu'on clique dessus
document.querySelector(".ghost").addEventListener("click", function () {
  // Changer la couleur de fond
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;

  // Faire pivoter le fantôme
  this.style.transition = "transform 0.5s";
  this.style.transform = "rotate(360deg)";
  setTimeout(() => {
    this.style.transform = "rotate(0deg)";
  }, 500);
});

// Changer la taille de la police de caractères lorsque la souris survole un titre h4
document.querySelectorAll("h4").forEach(function (element) {
  element.addEventListener("mouseover", function () {
    this.style.fontSize = "2em";
  });
  element.addEventListener("mouseout", function () {
    this.style.fontSize = "initial";
  });
});

// Afficher une alerte lorsqu'on soumet le formulaire
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Le formulaire a été soumis");
});

function createTable(data) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const headerRow = document.createElement("tr");

  // Créez les en-têtes de colonnes
  ["Nom", "Diamètre (m)", "Vitesse (km/s)", "Date d'approche"].forEach(
    (column) => {
      const th = document.createElement("th");
      th.textContent = column;
      headerRow.appendChild(th);
    }
  );

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Créez les lignes de données
  data.forEach((item) => {
    const row = document.createElement("tr");
    const name = document.createElement("td");
    const diameter = document.createElement("td");
    const velocity = document.createElement("td");
    const approachDate = document.createElement("td");

    name.textContent = item.name;
    diameter.textContent = item.diameter;
    velocity.textContent = item.velocity;
    approachDate.textContent = item.approachDate;

    row.appendChild(name);
    row.appendChild(diameter);
    row.appendChild(velocity);
    row.appendChild(approachDate);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  return table;
}

// Récupérer et afficher les données JSON
fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
  .then((response) => response.json())
  .then((data) => {
    const nearEarthObjects = data.near_earth_objects.map((obj) => ({
      name: obj.name,
      diameter: obj.estimated_diameter.meters.estimated_diameter_min.toFixed(2),
      velocity: parseFloat(
        obj.close_approach_data[0]?.relative_velocity.kilometers_per_second
      ).toFixed(2),
      approachDate: obj.close_approach_data[0]?.close_approach_date,
    }));

    // Filtrer les données (diamètre > 500 m et vitesse > 10 km/s)
    const filteredData = nearEarthObjects.filter(
      (item) => item.diameter > 500 && item.velocity > 10
    );

    // Créez et ajoutez le tableau au DOM
    const asteroidTable = document.getElementById("asteroid-table");
    const table = createTable(filteredData);
    asteroidTable.appendChild(table);
  });
