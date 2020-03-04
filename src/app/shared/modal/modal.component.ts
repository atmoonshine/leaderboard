import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    @ViewChild('confirmButton') confirmButton: ElementRef<HTMLButtonElement> | undefined;

    constructor() {}
}
