import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrls: ['./button.css']  // ← styleUrl corrigido para styleUrls
})
export class ButtonComponent {  // ← mudou de Button para ButtonComponent
  @Input() variant: 'primary' | 'danger' | 'success' = 'primary';
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();
}