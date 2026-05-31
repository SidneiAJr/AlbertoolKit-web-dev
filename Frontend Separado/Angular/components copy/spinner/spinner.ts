import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [],
  templateUrl: './spinner.html',
  styleUrls: ['./spinner.css']  // ← styleUrl corrigido para styleUrls
})
export class SpinnerComponent {  // ← mudou de Spinner para SpinnerComponent
}