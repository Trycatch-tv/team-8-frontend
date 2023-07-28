import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigationCategories',
  templateUrl: './navigationCategories.component.html',
  styleUrls: ['./navigationCategories.component.css']
})
export class NavigationCategoriesComponent implements OnInit {

  constructor() { }

  categories=[
    {
      label:'Cursos virtuales',
      path:'#',
      imgUrl:'https://oferta.senasofiaplus.edu.co/sofia-oferta/images/tecnicavirtual.png'
    },
    {
      label:'Cursos virtuales cortos',
      path:'#',
      imgUrl:'https://oferta.senasofiaplus.edu.co/sofia-oferta/images/virtual.png'
    },
   
  ]

  ngOnInit() {
  }

}
