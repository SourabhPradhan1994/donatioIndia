import { LightningElement } from 'lwc';
import myResource from '@salesforce/resourceUrl/Jharkhandi';
import myResource1 from '@salesforce/resourceUrl/ImgInsurance';
import myResource2 from '@salesforce/resourceUrl/Punjabi';

export default class CarouselImageCmp extends LightningElement {
    Jharkhandi=myResource; 
    Punjabi=myResource2;
    ImgInsurance=myResource1;
}