import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fileToUpload: File = null;
  prediction: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  onSubmit(timeUnit: string, duration: number) {
    const formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);
    formData.append('selection', timeUnit);
    formData.append('duration', duration.toString());
    this.http.post('http://localhost:5000/flask', formData).subscribe(
      () => {
        console.log('File uploaded successfully');
        this.getPrediction();
      },
      error => console.error('Error uploading file', error)
    );
  }

  getPrediction() {
    this.http.get('http://localhost:5000/prediction').subscribe(
      data => {
        console.log('Prediction received', data);
        this.prediction = data;
      },
      error => console.error('Error getting prediction', error)
    );
  }

}
