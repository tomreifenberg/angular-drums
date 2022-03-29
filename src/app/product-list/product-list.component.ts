import { Component } from '@angular/core';
import { map } from 'rxjs';
import { fromReadableStreamLike } from 'rxjs/internal/observable/innerFrom';
import { timer } from 'rxjs/internal/observable/timer';

import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  instruments = ['high hat', 'snare', 'tom'];
  active = false;
  counter = 0;

  getCounterId() {
    this.counter = this.counter + 1;
    return this.counter;
  }

  share() {
    window.alert('The product has been shared!');
  }

  setActive() {
    console.log('called here');
    timer(0, 1000).pipe(
      map(() => {
        console.log('called');
        this.active = !this.active; // load data contains the http request
      })
    );
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
