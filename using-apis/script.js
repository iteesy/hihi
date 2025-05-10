
const spaceContainerISS = document.getElementById("craft-iss");
const spaceContainerTian = document.getElementById("craft-tiangong");
const allCrafts = document.querySelectorAll(".craft");

function checkForAstronauts(button) {
    button.style.display = "none"; // hide button

    fetch('http://api.open-notify.org/astros.json') // get astronaut data
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 

            // Update the Message
            const statusElement = document.getElementById("status");
            statusElement.innerHTML = `Whoa there are ${data.number} people in space rn!!`;
            statusElement.style.fontSize = "36px";
            statusElement.style.transition = "transform 0.5s ease-in-out, font-size 0.5s ease-in-out";
            statusElement.style.transform = "scale(1.2)";
            setTimeout(() => {
                statusElement.style.transform = "scale(1)";
            }, 500);
            document.getElementById("status").style.transition = 'transform 0.5s ease-in-out';

            // Add each Astronaut to their craft
            var astros = data.people;
            astros.forEach(astro => {
                AddAstro(astro);
            });
        })
        .catch(error => {
            console.error('Error loading JSON:', error);

        });
}

function AddAstro(astro) {
    let div = document.createElement("div");
    div.classList.add("astro");
    div.innerHTML = astro.name;
    div.style.backgroundColor = "white";
    div.style.color = "limegreen";
    div.style.fontFamily = "Arial Narrow";
    if (astro.craft == "ISS") {
        spaceContainerISS.appendChild(div);
        div.style.position = "absolute";
        div.style.left = `${Math.random() * 80}%`;
        div.style.top = `${Math.random() * 80}%`;        
    } else if (astro.craft == "Tiangong") {
        spaceContainerTian.appendChild(div);

    }
} 