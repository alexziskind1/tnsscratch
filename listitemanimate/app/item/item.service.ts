import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper", pic: 'cat1.jpeg' },
        { id: 3, name: "Piqué is another dude with a long name and last name", role: "Defender", pic: 'cat2.jpg' },
        { id: 4, name: "I. Rakitic", role: "Midfielder", pic: 'cat3.jpeg' },
        { id: 5, name: "Sergio", role: "Midfielder", pic: 'cat4.jpeg' },
        { id: 6, name: "Denis Suárez", role: "Midfielder", pic: 'cat5.jpg' },
        { id: 7, name: "Arda", role: "Midfielder", pic: 'dog1.jpg' },
        { id: 8, name: "A. Iniesta", role: "Midfielder", pic: 'dog2.jpg' },
        { id: 9, name: "Suárez", role: "Forward", pic: 'dog3.jpg' },
        { id: 10, name: "Messi", role: "Forward", pic: 'dog4.jpg' },
        { id: 11, name: "Neymar", role: "Forward", pic: 'dog5.jpg' },
        { id: 12, name: "Rafinha", role: "Midfielder", pic: 'cat1.jpeg' },
        { id: 13, name: "Cillessen", role: "Goalkeeper", pic: 'cat2.jpg' },
        { id: 14, name: "Mascherano", role: "Defender", pic: 'cat3.jpeg' },
        { id: 17, name: "Paco Alcácer", role: "Forward", pic: 'cat4.jpeg' },
        { id: 18, name: "Jordi Alba", role: "Defender", pic: 'cat5.jpg' },
        { id: 19, name: "Digne", role: "Defender", pic: 'dog1.jpg' },
        { id: 20, name: "Sergi Roberto", role: "Midfielder", pic: 'dog2.jpg' },
        { id: 21, name: "André Gomes", role: "Midfielder", pic: 'dog3.jpg' },
        { id: 22, name: "Aleix Vidal", role: "Midfielder", pic: 'dog4.jpg' },
        { id: 23, name: "Umtiti", role: "Defender", pic: 'dog5.jpg' },
        { id: 24, name: "Mathieu", role: "Defender", pic: 'cat1.jpeg' },
        { id: 25, name: "Masip", role: "Goalkeeper", pic: 'cat2.jpg' },
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
