import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardsDevs',
  templateUrl: './cardsDevs.component.html',
  styleUrls: ['./cardsDevs.component.scss']
})
export class CardsDevsComponent implements OnInit {
  devs=[
    {
      name:'Jhon',
      description:'Fullstack',
      linkedinUrl:''
    },
    {
      name:'Miguel',
      description:'Fullstack',
      linkedinUrl:''
    },
    {
      name:'Julian',
      description:'Frontend',
      linkedinUrl:''
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
