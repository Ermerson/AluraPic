import { Resolve } from '@angular/router';
import { PhotoListResolver } from './photo-list.resolver';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter = '';

  constructor(private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
   this.photos =  this.activatedRoute.snapshot.data['photos'];
  }

}
