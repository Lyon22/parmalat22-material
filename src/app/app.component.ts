import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedColumns: string[] = ['id'];
  data: any[] = [];
  loading: boolean = false;
  page: number = 1;
  totalPages: number = 5;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    // Replace 'your-api-endpoint' with your actual API endpoint
    /*const apiUrl =
      'https://api.github.com/repos/openai/openai-python/issues?page=' + this.page + '&per_page=5';*/

    const apiUrl =
      'https://api.github.com/repos/openai/openai-python/issues?page=' + this.page;
    this.http.get(apiUrl)
    .pipe(
      tap(val => console.log(val))
    )
    .subscribe((response: any) => {
      this.data = [...this.data, ...response]
      this.page++;
      console.log('page: ', this.page);
      this.loading = false;
    });
  }

  loadMoreData() {
    if (this.page <= this.totalPages && !this.loading) {
      this.loadData();
    }
  }
}
