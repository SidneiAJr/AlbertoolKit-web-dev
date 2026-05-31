// components/badge/badge.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.html',
  styleUrls: ['./badge.css']
})
export class BadgeComponent {
  @Input() count: number = 0;
  @Input() color: string = '#f44336';
  @Input() max: number = 99;

  get displayCount(): string {
    if (this.count > this.max) return `${this.max}+`;
    return this.count.toString();
  }
}