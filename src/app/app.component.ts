import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-tech';

  constructor(private modal: NgbModal) {}

  ver(modalRegistro) {
    this.modal.open(modalRegistro);
  }
}
