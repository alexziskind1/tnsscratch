import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'rotatePipe'
})

export class RotatePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return `rotate(${value})`;
    }
}