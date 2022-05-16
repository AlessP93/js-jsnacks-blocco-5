// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

let somma = 0;
const zucchine = [
    {
        varietà: "varietà 1",
        peso: "1",
        lunghezza: "10",
    },
    {
        varietà: "varietà 2",
        peso: "14",
        lunghezza: "10",
    },
    {
        varietà: "varietà 3",
        peso: "65",
        lunghezza: "10",
    },
    {
        varietà: "varietà 4",
        peso: "22",
        lunghezza: "10",
    },
    {
        varietà: "varietà 5",
        peso: "7",
        lunghezza: "10",
    },
    {
        varietà: "varietà 6",
        peso: "18",
        lunghezza: "10",
    },
    {
        varietà: "varietà 7",
        peso: "29",
        lunghezza: "10",
    },
    {
        varietà: "varietà 8",
        peso: "1",
        lunghezza: "10",
    },
    {
        varietà: "varietà 9",
        peso: "1",
        lunghezza: "10",
    },
    {
        varietà: "varietà 10",
        peso: "1",
        lunghezza: "10",
    },
];

let totale = 0;
for (let i = 0; i < zucchine.length; i++) {
   totale += zucchine[i].peso
};

console.log(`Il peso è ${totale}`);