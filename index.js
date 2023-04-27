
const altura = document.querySelector('#imp-altura')
const peso = document.querySelector('#imp-peso')
const restultado = document.querySelector('#resultado')

const calcIMC = () => {

    const name = document.getElementById('imp-name').value;

    if(altura.value != '' && peso.value != ''){

        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)

        let classification = ''

        if(imc < 18.5){
            classification = "Abaixo do peso"
        }
        else if(imc < 25){
            classification = "Peso normal"
        }
        else if(imc < 30){
            classification = "Acima do peso"
        }
        else{
            classification = "Obesidade"
        }

        restultado.innerHTML = ` ${name}, o seu resultado de IMC é: ${imc}, o seu peso é considerado "${classification}".`
    }

}

