//IDEA: large sidewalk widths will show flower, small sidewalk widths show car emoji

function goOutside() {
    fetch('https://data.sfgov.org/resource/4g86-grxu.json?$query=SELECT%0A%20%20%60objectid%60%2C%0A%20%20%60class%60%2C%0A%20%20%60width_min%60%2C%0A%20%20%60width_reco%60%2C%0A%20%20%60sidewalk_f%60%2C%0A%20%20%60side%60%2C%0A%20%20%60data_as_of%60%2C%0A%20%20%60data_loaded_at%60%2C%0A%20%20%60analysis_neighborhood%60')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 
        
            const flowerElement = document.getElementById("flower");
            const carElement = document.getElementById("car");
            flowerElement.innerHTML = ""; 
            carElement.innerHTML = "";

            // get the container dimensions
            const containerWidth = window.innerWidth;
            const containerHeight = window.innerHeight;

            data.forEach(item => {
                if (item.sidewalk_f > item.width_reco) {
                    const flowerEmoji = document.createElement("div");
                    const flowerOptions = ["🪻", "🌸", "🦋", "🌿", "💐", "🌼", "🌷"];
                    flowerEmoji.textContent = flowerOptions[Math.floor(Math.random() * flowerOptions.length)];
                    flowerEmoji.style.fontSize = "24px";
                    flowerEmoji.style.position = "absolute";
                    // random position
                    flowerEmoji.style.left = `${Math.random() * containerWidth}px`;
                    flowerEmoji.style.top = `${Math.random() * containerHeight}px`;
                    // transition effects
                    flowerEmoji.style.opacity = "0";
                    flowerEmoji.style.transform = "translateY(20px)";
                    // random delay
                    const randomDelay = Math.random() * 2;
                    flowerEmoji.style.transition = `opacity 0.5s ease-out, transform 0.5s ease-out`;
                    flowerElement.appendChild(flowerEmoji);
                    // start transition after delay
                    setTimeout(() => {
                        flowerEmoji.style.opacity = "1";
                        flowerEmoji.style.transform = "translateY(0)";
                    }, randomDelay * 1000);
                } else { 
                    const carEmoji = document.createElement("div");
                    const carOptions = ["🚗", "🥀"];
                    carEmoji.textContent = carOptions[Math.floor(Math.random() * carOptions.length)];
                    carEmoji.style.fontSize = "24px";
                    carEmoji.style.position = "absolute";
                    // random position
                    carEmoji.style.left = `${Math.random() * containerWidth}px`;
                    carEmoji.style.top = `${Math.random() * containerHeight}px`;
                    // transition effects
                    carEmoji.style.opacity = "0";
                    carEmoji.style.transform = "translateY(20px)";
                    // random delay
                    const randomDelay = Math.random() * 2;
                    carEmoji.style.transition = `opacity 0.5s ease-out, transform 0.5s ease-out`;
                    carElement.appendChild(carEmoji);
                    // start transition after delay
                    setTimeout(() => {
                        carEmoji.style.opacity = "1";
                        carEmoji.style.transform = "translateY(0)";
                    }, randomDelay * 1000);
                }
            });
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
}

goOutside();