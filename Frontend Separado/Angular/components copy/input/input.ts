import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.html',
  styleUrls: ['./input.css']  // ← styleUrl corrigido para styleUrls
})
export class InputComponent {  // ← mudou de Input para InputComponent
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() value: string = '';
}