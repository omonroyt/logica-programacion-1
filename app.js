function ordenarNumeros() {
  // Solicitar los números
  let num1 = Number(prompt("Ingresa el primer número"));
  let num2 = Number(prompt("Ingresa el segundo número"));
  let num3 = Number(prompt("Ingresa el tercer número"));

  let resultadoDiv = document.getElementById("resultado");

  // Verificar si los tres números son iguales
  if (num1 === num2 && num2 === num3) {
    resultadoDiv.innerHTML = `
      <p>Los números son iguales:</p>
      <p>${num1}, ${num2}, ${num3}</p>
    `;
    return;
  }

  // Guardar los números en un array
  let numeros = [num1, num2, num3];

  // Ordenar de mayor a menor utilizando el método sort
  let mayorAMenor = [...numeros].sort((a, b) => b - a);

  // Ordenar de menor a mayor
  let menorAMayor = [...numeros].sort((a, b) => a - b);

  // Mostrar los resultados en el DOM
  resultadoDiv.innerHTML = `
    <p><strong>Mayor a menor:</strong></p>
    <p>${mayorAMenor.join(", ")}</p>

    <p><strong>Menor a mayor:</strong></p>
    <p>${menorAMayor.join(", ")}</p>
  `;
}
