import { Component, OnInit } from '@angular/core';

import { CERTIFICATES } from "./certificates";

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  certificates: any = CERTIFICATES;
  show: any = false;

  constructor() { }

  ngOnInit(): void {
  }

  showModal(chosen: String){
    console.log("show "+ chosen )
    this.show = chosen
  }

  hideModal(){
    this.show = false;
  }

}
