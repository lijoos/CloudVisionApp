import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImageDetectionService {

  constructor(private http:HttpClient) { }
  detectObjectsService(imageName:string)
  {
    console.log(imageName);
    const header=new HttpHeaders().set('Content-Type','application/json')
   return this.http.post('/api/images?imageName='+imageName,null);
  }
}
