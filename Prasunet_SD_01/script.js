function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;

    let celsius, fahrenheit, kelvin;

    if (isNaN(temperature)) {
        alert("Please enter a valid number");
        return;
    }

    if (unit === "Celsius") {
        celsius = temperature;
        fahrenheit = (temperature * 9/5) + 32;
        kelvin = temperature + 273.15;
    } else if (unit === "Fahrenheit") {
        celsius = (temperature - 32) * 5/9;
        fahrenheit = temperature;
        kelvin = celsius + 273.15;
    } else if (unit === "Kelvin") {
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = temperature;
    }

    document.getElementById('celsiusResult').innerText = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('fahrenheitResult').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('kelvinResult').innerText = `Kelvin: ${kelvin.toFixed(2)} K`;
}
