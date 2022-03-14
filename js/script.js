function bmi() {
    let bmi;
    const m = document.getElementById("mass").value; 
    const h = document.getElementById("height").value;
    const result = document.getElementById("result");
    if (m <= 0) {
        result.innerHTML = "Informe um valor positivo para o peso!"
    } else if (h <= 0) {
        result.innerHTML = "Informe um valor positivo para a altura!"
    } else {
        bmi = m / (h * h);
        if (bmi < 18.5) {
            color="#FFF7C5";
            result.innerHTML = "<div style='background-color: "+color+"'>" + "O IMC é: " + bmi + " - Baixo peso" + " </div>";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            color="#F7E09F";
            result.innerHTML = "<div style='background-color: "+color+"'>" + "O IMC é: " + bmi + " - Peso normal" + " </div>";
        } else if (bmi >= 25 && bmi <= 29.9) {
            color="#F9BF73";
            result.innerHTML = "<div style='background-color: "+color+"'>" + "O IMC é: " + bmi + " - Excesso de peso" + " </div>";
        } else if (bmi >= 30 && bmi <= 34.9) {
            color="#FBB03B";
            result.innerHTML = "<div style='background-color: "+color+"'>" + "O IMC é: " + bmi + " - Obesidade de Classe 1" + " </div>";
        } else if (bmi >= 35 && bmi <= 39.9) {
            color="#F7931E";
            result.innerHTML = "<div style='background-color: "+color+"'>" + "O IMC é: " + bmi + " - Obesidade de Classe 2" + " </div>";
        } else {
            color="#F15A24";
            result.innerHTML = "<div style='background-color: "+color+"'>" + "O IMC é: " + bmi + " - Obesidade de Classe 3" + " </div>";
        }
    }
}