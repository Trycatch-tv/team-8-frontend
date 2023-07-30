import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {
  routes = [
    {
      label: 'Inicio',
      path: 'home'

    },
    {
      label: 'Buscar oferta',
      path: 'search-offer'

    },
    {
      label: 'Certificados',
      path: 'search offer'

    },
    {
      label: 'Ayuda y soporte',
      path: 'help'

    }
  ]
  constructor(private modalService:ModalService) { }
  
  openModal(){
    this.modalService.openModal()
  }

  ngOnInit() {
  }

}
