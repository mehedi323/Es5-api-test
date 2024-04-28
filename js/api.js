 
const shop = {
     owner: {
        name: 'mehedi Hasna',
        address: {
            street: 'Piyaratola purbopara',
            city: 'jibbanngar',
            country: 'Bangladesh'
        },
        product: ['computer', 'monitor', 'bike', 'car', 'leptop'],
        isClend: true,
        reverans : 35750,
        isOpen: true,
        isNew: false
     }
} 
console.log(shop);
// Object To String 
const stringiFy = JSON.stringify(shop);
console.log(typeof stringiFy);
// String to Object
const parse = JSON.parse(stringiFy);
console.log(typeof parse);