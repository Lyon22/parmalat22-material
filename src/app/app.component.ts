import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  dataSource: any[];
  displayedColumns: string[] = ['id', 'name']; // Add more column names here

  constructor() {
    this.dataSource = this.generateData(20); // Generate 20 registers
  }

  generateData(count: number): any[] {
    const data = [];
    for (let i = 1; i <= count; i++) {
      const row = {
        id: i,
        name: `Row ${i}`,
      };
      data.push(row);
    }
    return data;
  }
}
