import { ImageDetectionService } from './../shared/image-detection.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
const URL = 'http://localhost:8080/api/upload';
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
 array:any;
   url = '';
   showImage:boolean=false;
   showLoader:boolean=false;
   errorImage:boolean=false;
   public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; 
     this.showImage=false;
     this.array=[];  
  };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         this.showLoader=true; 
         if(JSON.parse(response).image!=undefined){
          this.imageDetectionService.detectObjectsService(JSON.parse(response).image).subscribe((data)=>{
          this.array=data;
          if(data===undefined)
             this.errorImage=true;
          this.showLoader=false;
         })
         this.showImage=true;
        }
        else{
            this.errorImage=true;
        }
        
     };
  
  }
  constructor(private imageDetectionService: ImageDetectionService) {

  }
  title = 'app';

   onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;
      }
    }
  }

}
