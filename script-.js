function updateClock() {
    var date = new Date();
    
    // Array para los nombres de los días de la semana
    var daysOfWeek = ['Domin', 'Lun', 'Mar', 'Miér', 'Jue', 'Vier', 'Sáb'];
    
    // Array para los nombres de los meses
    var months = ['ene', 'febr', 'mar', 'abr', 'mayo', 'jun', 'jul', 'agos', 'sept', 'octu', 'nov', 'dic'];
    
    // Obtener el nombre del día de la semana, el número del día, el mes y el año
    var dayOfWeek = daysOfWeek[date.getDay()];
    var dayOfMonth = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    
    // Obtener la hora, los minutos y los segundos
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    var seconds = date.getSeconds().toString().padStart(2, '0');
    
    // Formatear la fecha y la hora
    var dateString = `${dayOfWeek} ${dayOfMonth} ${month} ${year}`;
    var timeString = `${hours}:${minutes}:${seconds}`;
  
    document.getElementById('date').textContent = dateString;
    document.getElementById('time').textContent = timeString;
  }
  
  // Actualizar el reloj cada segundo
  setInterval(updateClock, 1000);
  
  // Actualizar el reloj una vez al cargar la página
  updateClock();
  