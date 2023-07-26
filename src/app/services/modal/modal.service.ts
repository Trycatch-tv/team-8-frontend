import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private isOpenSubject = new Subject<boolean>();
  
  isOpen$ = this.isOpenSubject.asObservable();

  openModal() {
    this.isOpenSubject.next(false);
  }

  closeModal() {
    this.isOpenSubject.next(true);
    console.log('hola')
  }
}
