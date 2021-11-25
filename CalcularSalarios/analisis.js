//Helpers
function esPar(numero) {
    return (numero % 2 === 0);
};

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) { // Se define una valor por defecto para iniciar
            return valorAcumulado + nuevoElemento;
        }
    ); //Metodo de los array para ir sumando cada uno de los elementos de la lista o array

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.lenght / 2);

    if (esPar(lista.lenght)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica(personaMitad1, personaMitad2);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};


const salariosCost = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salriosCostSorted = salariosCost.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB
    }
);

const medianaGeneralCostaRica = medianaSalarios(salriosCostSorted);

//Mediana del top 10%
const spliceStart = (salriosCostSorted.length * 90) / 100;
const spliceCount = salriosCostSorted.length - spliceStart;


const salariosCostaTop10 = salriosCostSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10CostaRica = medianaSalarios(salariosCostaTop10);

console.log({

    medianaGeneralCostaRica,
    medianaTop10CostaRica,
    //medianaSalarios(salriosCostSorted)
});