import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-home',
  templateUrl: './modal-home.component.html',
  styleUrls: ['./modal-home.component.css']
})
export class ModalHomeComponent implements OnDestroy {

  isOpen = true;
  private subscription: Subscription;

  constructor(private modalService: ModalService) {
    this.subscription = this.modalService.isOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }

  closeModal() {
    this.modalService.closeModal();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
