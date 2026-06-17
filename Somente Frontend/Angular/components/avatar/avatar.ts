import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,  // ← importante para standalone components
  imports: [],       // ← sem imports adicionais
  templateUrl: './avatar.html',
  styleUrls: ['./avatar.css']  // ← styleUrl no plural quando tem array
})
export class AvatarComponent {
  @Input() name: string = '';
  @Input() size: number = 50;
  @Input() src: string = '';

  get initials(): string {
    if (!this.name) return '?';
    return this.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }
}