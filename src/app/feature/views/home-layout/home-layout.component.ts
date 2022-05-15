import { Component, OnInit } from '@angular/core';
import { FakeStoreApiService } from '../../services/fake-store-api.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  constructor(private fakeService: FakeStoreApiService) { }

  ngOnInit(): void {

  }

}
