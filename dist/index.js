"use strict";
// Generics
/* type dataType = Person | Product; */
class DataCollection {
    constructor() {
        this.items = [];
        /* getNames(): string[] {
            return this.items.map(item => item.name);
        }
    
        getItemById(id: number): T | undefined {
            return this.items.find((item: T) => item.id === id);
        } */
    }
    addItem(newitem) {
        this.items.push(newitem);
    }
    getItems() {
        console.log(`List of items`, JSON.stringify(this.items));
    }
}
const productCollection = new DataCollection();
const newData2 = {
    id: 2,
    name: 'Beer',
    price: 333
};
productCollection.addItem(newData2);
productCollection.getItems();
