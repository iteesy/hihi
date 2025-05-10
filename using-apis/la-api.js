
const streetName = document.getElementById("street-name");

function getStreetName() {
    const button = document.getElementById("button");
    button.style.display = "none"; // hide button

    fetch('https://data.lacity.org/resource/hntu-mwxc.json') // street name data
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            // pick a random street name
            const randomStreet = data[Math.floor(Math.random() * data.length)].ofcl_str_nm;

            // update the Message
            const revealName = document.getElementById("reveal-name");
            revealName.innerHTML = `what's up, ${randomStreet}!!!`;
            revealName.style.fontSize = "36px";
            revealName.style.transition = "transform 0.5s ease-in-out, font-size 0.5s ease-in-out";
            revealName.style.transform = "scale(1.2)";
            setTimeout(() => {
                revealName.style.transform = "scale(1)";
            }, 500);
            document.getElementById("reveal-name").style.transition = 'transform 0.5s ease-in-out';

        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
}
