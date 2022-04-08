const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");
const resultado = document.querySelector("span");
const botao = document.querySelector("button");

function calcularIMC(event) {
  event.preventDefault();
  if (altura.value !== "" && peso.value !== "") {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(1);

    if (imc <= 16.9) {
      resultado.innerText = `IMC: ${imc} (Muito abaixo do peso)`;
    } else if (imc >= 17 && imc <= 18.4) {
      resultado.innerText = `IMC: ${imc} (Abaixo do peso)`;
    } else if (imc >= 18.5 && imc <= 24.9) {
      resultado.innerText = `IMC: ${imc} (Peso normal)`;
    } else if (imc >= 25 && imc <= 29.9) {
      resultado.innerText = `IMC: ${imc} (Acima do peso)`;
    } else if (imc >= 30 && imc <= 34.9) {
      resultado.innerText = `IMC: ${imc} (Obesidade Grau I)`;
    } else if (imc >= 35 && imc <= 40) {
      resultado.innerText = `IMC: ${imc} (Obesidade Grau II)`;
    } else if (imc > 40) {
      resultado.innerText = `IMC: ${imc} (Obesidade Grau III)`;
    }
  } else {
    resultado.innerText = "Preencha corretamente!";
  }
}

botao.addEventListener("click", calcularIMC);
