import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Restaurant } from 'src/restaurant.mock';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  formValue: FormGroup;
  restaurants: Restaurant[] | any;
  closeModal: boolean = false;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {
    this.formValue = '' as unknown as FormGroup;
  }

  ngOnInit(): void {
    const url = 'http://localhost:5000/restaurants';
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      service: [''],
    });

    this.getRestaurants(url).subscribe((res) => (this.restaurants = res));
  }

  onSubmit = () => {
    const url = 'http://localhost:5000/restaurants';
    const obj: Restaurant = {
      name: this.formValue.value.name,
      email: this.formValue.value.email,
      service: this.formValue.value.service,
    };

    this.api.postRestaurant(obj, url).subscribe({
      next: (url) => {
        this.getRestaurants(url).subscribe((res) => {
          console.log('response===', res);
          this.restaurants = res;
        });
      },
      complete: () => {
        this.formValue.reset();
        alert('Successfully inserted in db.');
      },
      error: () => {
        alert('Something wrong happened');
      },
    });
  };

  getRestaurants = (url: string) => {
    return this.api.getRestaurant(url);
  };
}
