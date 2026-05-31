import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TableColumn {
  label: string;
  key: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.html',  // ← nome correto
  styleUrls: ['./table.css']
})
export class TableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() striped: boolean = true;
  @Input() hover: boolean = true;
  @Input() bordered: boolean = false;
}