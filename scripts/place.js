
// Footer dynamic content
const currentDate = new Date();
document.getElementById("currentyear").innerText = currentDate.getFullYear();
document.getElementById("lastModified").innerText = `Last Modification: ${document.lastModified}`;


function calculateWindChill(temperature, windSpeed) {
  return 13.12 + (0.6215 * temperature) - (11.37 * windSpeed ** 0.16) + (0.3965 * temperature * windSpeed ** 0.16);
}


const temperature = 10;
const windSpeed = 5;

const windChill =
  temperature <= 10 && windSpeed > 4.8
    ? `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`
    : "N/A";

document.getElementById("windchill").textContent = windChill;