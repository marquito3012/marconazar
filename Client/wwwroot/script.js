fetch("http://express70558099.azurewebsites.net")
            .then(response => {
                if (!response.ok){
                    throw new Error('Hubo un problema con la solicitud: ' + response.statusText);
                }
                return response.json()
            })
            .then(data => {
                // Crear la tabla y agregar los datos
                const tabla = document.getElementById('miTabla').getElementsByTagName('tbody')[0];
                data.forEach(fila => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${fila.tiempoJuego}</td>
                        <td>${fila.fecha}</td>
                        <td>${fila.puntuacion}</td>
                        <td>${fila.nombre}</td>
                    `;
                    tabla.appendChild(tr);
                });
            })
            .catch(error => console.error('Error al obtener los datos:', error));