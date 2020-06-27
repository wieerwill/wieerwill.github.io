import { Component, OnInit } from '@angular/core';

import { CERTIFICATES } from "./certificates";

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  certificates: any = CERTIFICATES;

  constructor() { }

  ngOnInit(): void {
  }

}
