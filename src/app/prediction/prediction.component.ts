import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent {
  selectedFile: File = null;
  predictionResult: any = null;
  timeUnit: string = 'Daily';
  forecastDuration: number = 10;
  isLoading: boolean = false;

  constructor(private http: HttpClient) { }

  onFileSelected(event: { target: { files: File[]; }; }) {
    this.selectedFile = <File>event.target.files[0];
  }

  onSubmit() {
    this.isLoading = true;

    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('selection', this.timeUnit);
    formData.append('duration', String(this.forecastDuration));

    this.http.post<any>('http://localhost:5000/flask', formData)
      .subscribe(
        response => {
          console.log(response);
          this.predictionResult = response;
          this.isLoading = false;
        },
        error => {
          console.log(error);
          this.predictionResult = null;
          this.isLoading = false;
        }
      );
  }
}
