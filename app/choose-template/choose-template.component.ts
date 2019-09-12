import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-choose-template',
  templateUrl: './choose-template.component.html',
  styleUrls: ['./choose-template.component.css']
})
export class ChooseTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;
 
  slidesChangeMessage = '';
 
  slides = [
    {image: 'assets/images/nature/1.jpg'},
    {image: 'assets/images/nature/2.jpg'},
    {image: 'assets/images/nature/3.jpg'},
    {image: 'assets/images/nature/4.jpg'},
    {image: 'assets/images/nature/5.jpg'},
    {image: 'assets/images/nature/6.jpg'},
    {image: 'assets/images/nature/7.jpg'},
    {image: 'assets/images/nature/8.jpg'},
    {image: 'assets/images/nature/1.jpg'},
    {image: 'assets/images/nature/2.jpg'}
  ];
 
  onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }
}