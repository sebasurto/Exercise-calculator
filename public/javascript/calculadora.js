// Definición de la función flecha
const funcionPredeterminada = () => {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        let valorPorHora = document.getElementById("valorPorHora").value;
        let interfazHoras = document.getElementById("interfazHoras").value;
        let testing = document.getElementById("testing").value;
        let programacion = document.getElementById("programacion").value;
        let total = (parseInt(valorPorHora)+parseInt(testing)+parseInt(programacion)) * parseInt(interfazHoras);
        total = "$ " + total;
        document.getElementById("valorTotal").value = total;
        
      })
};
  
  // Invocación de la función
  funcionPredeterminada();
  