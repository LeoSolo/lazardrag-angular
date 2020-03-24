import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
  Input,
  AfterContentChecked
} from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.less']
})
export class ImageLoaderComponent implements OnInit, AfterContentChecked {

  @Output() onLoadImage: EventEmitter<string> = new EventEmitter<string>();
  @Input() value: string;
  imageUrl: any = null;
  fileReader: FileReader;
  @ViewChild("img", {static: false}) img: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    if (this.value && this.img && !this.fileReader) {
      this.imageUrl = this.value;
      this.img.nativeElement.src = this.value;
    }
  }

  loadImage(event) {
    if(event.target.files && event.target.files[0]) {
      this.fileReader = new FileReader();

      this.fileReader.onload = ((e: any) => {
        this.img.nativeElement.src = e.target.result;
        this.imageUrl = e.target.result;
        this.onLoadImage.emit(this.imageUrl);
      });

      this.fileReader.readAsDataURL(event.target.files[0])
    }
  }
}
