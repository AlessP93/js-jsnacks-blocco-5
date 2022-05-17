// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

// Infine stampa separatamente i 3 array.

const automobili = [
    {
        marca: "Fiat",
        modello: "500",
        alimentazione: "Gpl",
    },
    {
        marca: "Bmw",
        modello: "Serie 3",
        alimentazione: "Metano",
    },
    {
        marca: "Mercedes",
        modello: "Cls",
        alimentazione: "Diesel",
    },
    {
        marca: "Jaguar",
        modello: "e-pace",
        alimentazione: "Diesel",
    },
    {
        marca: "Ferrari",
        modello: "458",
        alimentazione: "Benzina",
    },
    {
        marca: "Audi",
        modello: "Rs6",
        alimentazione: "Benzina",
    },
    {
        marca: "Volkswagen",
        modello: "Golf",
        alimentazione: "Metano",
    },
    {
        marca: "Lancia",
        modello: "Thema",
        alimentazione: ">Benzina",
    },
    {
        marca: "Porsche",
        modello: "Carrera",
        alimentazione: "Benzina",
    },
    {
        marca: "Tesla",
        modello: "Model x",
        alimentazione: "elettrica",
    },
    
];

const benzina = [];
const Diesel = [];
const restoAuto = [];

automobili.forEach((elm,) => {
   if(elm.alimentazione === "benzina") {
       automobili.push(elm)
   }
});