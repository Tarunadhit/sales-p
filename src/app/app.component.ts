import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sales-prediction';

  constructor(private http: HttpClient) {}

  public selectedFile!: File;
  public predictionResult: any;
  public isPredictionComplete = false;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    formData.append('selection', 'Daily'); // Replace with your desired time unit selection
    formData.append('duration', '30'); // Replace with your desired forecast duration
    this.http.post('http://localhost:5000/flask', formData).subscribe((res: any) => {
      console.log(res);
      this.isPredictionComplete = true;
      this.predictionResult = 'http://localhost:5000/static/image2.jpg'; // Replace with the path to your predicted sales chart
    });
  }

  onSignIn(username: string, password: string) {
    const payload = {
      username: username,
      password: password
    };
    this.http.post('http://localhost:5000/signin', payload).subscribe((res: any) => {
      console.log(res);
      if (res.result === 'success') {
        // Perform any desired actions upon successful login
      } else {
        // Handle login failure
      }
    });
  }

  onSignUp(username: string, password1: string, password2: string) {
    const payload = {
      username: username,
      password1: password1,
      password2: password2
    };
    this.http.post('http://localhost:5000/signup', payload).subscribe((res: any) => {
      console.log(res);
      if (res.status === 'success') {
        // Perform any desired actions upon successful signup
      } else if (res.status === 'exists') {
        // Handle existing username
      } else if (res.status === 'mismatch') {
        // Handle password mismatch
      }
    });
  }
}
