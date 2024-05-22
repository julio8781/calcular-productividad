/* script.js */
document.getElementById('productivityForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    // Obtenemos el valor del campo de minutos, si está vacío o no es un número, asignamos cero
    const minutesWorked = document.getElementById('minutesWorked').value ? parseFloat(document.getElementById('minutesWorked').value) : 0;
    const linesOfCode = parseInt(document.getElementById('linesOfCode').value);
    
    // Convertir minutos a horas
    const totalHoursWorked = hoursWorked + (minutesWorked / 60);

    // Definir las líneas por hora para cada nivel
    const linesPerHourBien = 37.5;
    const linesPerHourMedio = 28.125;
    const linesPerHourMal = 18.75;

    // Calcular las líneas requeridas para cada nivel basado en el total de horas trabajadas
    const requiredLinesBien = linesPerHourBien * totalHoursWorked;
    const requiredLinesMedio = linesPerHourMedio * totalHoursWorked;
    const requiredLinesMal = linesPerHourMal * totalHoursWorked;

    let resultMessage;

    if (linesOfCode >= requiredLinesBien) {
        resultMessage = '¡Bien! Has cumplido con la productividad requerida.';
    } else if (linesOfCode >= requiredLinesMedio) {
        resultMessage = 'Medio. Has cumplido parcialmente con la productividad requerida.';
    } else if (linesOfCode >= requiredLinesMal) {
        resultMessage = 'Mal. Necesitas más líneas  para cumplir con la productividad.';
    } else {
        resultMessage = 'Muy Mal. Tu productividad es insuficiente te van a despedir.';
    }

    document.getElementById('result').innerText = resultMessage;
});


