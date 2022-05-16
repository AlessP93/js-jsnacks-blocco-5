// Crea 10 oggetti che rappresentano una zucchina.

const zucchine = [
    {
        varietà: "varietà 1",
        peso: 1,
        lunghezza: "12",
    },
    {
        varietà: "varietà 2",
        peso: 14,
        lunghezza: "13",
    },
    {
        varietà: "varietà 3",
        peso: 65,
        lunghezza: "14",
    },
    {
        varietà: "varietà 8",
        peso: 1,
        lunghezza: "9",
    },
    {
        varietà: "varietà 9",
        peso: 1,
        lunghezza: "7",
    },
 
];

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.

const zucchineLong = [
    {
        varietà: "varietà 5",
        peso: 7,
        lunghezza: "16",
    },
    {
        varietà: "varietà 6",
        peso: 18,
        lunghezza: "17",
    },
    {
        varietà: "varietà 7",
        peso: 29,
        lunghezza: "18",
    },
    {
        varietà: "varietà 10",
        peso: 1,
        lunghezza: "19",
    },
];

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

let totale = 0;
for (let i = 0; i < zucchine.length; i++) {
   totale += zucchine[i].peso
};

console.log(`Il peso delle zucchine inferiori di 15 cm è è ${totale}`);

let totale2 = 0;
for (let i = 0; i < zucchineLong.length; i++) {
   totale2 += zucchineLong[i].peso
};

console.log(`Il peso delle zucchine maggiore di 15 cm è ${totale2}`);

