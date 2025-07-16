import { Sorter } from "./Sorter";

export class CharactersCollections extends Sorter {
    constructor(public data: string) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIdx: number, rightIdx: number): boolean {
        return this.data[leftIdx].toLocaleLowerCase() > this.data[rightIdx].toLowerCase();
    }

    swap(leftIdx: number, rightIdx: number): void {
        const charArr = this.data.split('');
        const leftValue = charArr[leftIdx];
        charArr[leftIdx] = charArr[rightIdx];
        charArr[rightIdx] = leftValue;

        this.data = charArr.join('');
    }
}