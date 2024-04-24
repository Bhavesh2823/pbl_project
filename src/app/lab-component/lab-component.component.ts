import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-component',
  templateUrl: './lab-component.component.html',
  styleUrls: ['./lab-component.component.css']
})
export class LabComponentComponent implements OnInit {

  @Input() lab_name: string = "Card Title";
  @Input() inch_name: string = "Card Title";
  @Input() ass_name: string = "Card Title";
  @Input() equip: string = "Card Title";
  @Input() area: string = "Card Title";
  @Input() QC: string = "QC";
  @Input() CC: string = "CC";
  @Input() QP: string = "QP";
  @Input() CP: string = "CP";
  @Input() QU: string = "QU";
  @Input() CU: string = "CU";


  constructor() { }

  ngOnInit(): void {
  }

}
