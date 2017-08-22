import { Item } from "./item";
import { View } from "ui/core/view";
import { Image } from "ui/image/image";

export interface ItemEvent {
    item: Item;
    listItemImage: Image;
}