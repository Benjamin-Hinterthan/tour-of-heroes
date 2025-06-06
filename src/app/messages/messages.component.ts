import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { NgIf, NgFor } from '@angular/common';


@Component({
    selector: 'app-messages',
    imports: [NgIf, NgFor],
    templateUrl: './messages.component.html',
    styleUrl: './messages.component.css'
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}
