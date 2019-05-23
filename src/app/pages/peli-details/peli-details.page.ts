import { Component, OnInit } from '@angular/core';
import { PeliService } from 'src/app/services/peli.service';
import { ActivatedRoute } from '@angular/router';
import { IPelis } from '../../models/iPelis.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-peli-details',
  templateUrl: './peli-details.page.html',
  styleUrls: ['./peli-details.page.scss'],
})
export class PeliDetailsPage implements OnInit {
  content: IPelis = null;

  constructor(private peliService: PeliService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.peliService.getDetails(id).subscribe(result => this.content = result);
  }

}
