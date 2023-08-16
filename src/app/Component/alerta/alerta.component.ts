import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css'],
})
export class AlertaComponent implements OnInit {
  @Input() Color!: string;
  @Input() mensaje!: string;
  constructor() {}

  ngOnInit(): void {}
}
