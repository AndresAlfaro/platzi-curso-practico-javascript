//Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
};

function areaCuadrado(lado) {
    return lado * lado;
};

console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
};

console.groupEnd();


//Circulo
console.group("Circulos");

function diametroCirculo(radio) {
    return radio * 2;
};

const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

function areaCirculo(radio) {
    return (radio * radio) * PI;
};

console.groupEnd();



//Conexion con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

};

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;


    const area = perimetroCuadrado(value);
    alert(area);

};


//Calculos con el triangulo

function calcularPerimetrotriangulo() {
    const ladoUno = document.getElementById("lado1");
    const value1 = Number(ladoUno.value);
    const ladoDos = document.getElementById("lado2");
    const value2 = Number(ladoDos.value);
    const base = document.getElementById("base");
    const value3 = Number(base.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);

};