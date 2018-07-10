import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular'
import { SpaceXApiProvider } from '../../providers/space-x-api/space-x-api';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, GoogleMapsMapTypeId } from '@ionic-native/google-maps';
import { Launchpads } from '../../models/launchpads/Launchpads';
import { Location } from '../../models/launchpads/Location';

@Component({
  selector: 'page-google-map',
  templateUrl: 'google-map.html',
})
export class GoogleMapPage {
  map: GoogleMap;
  siteId : string;
  launchpad : Launchpads;
  launchpads : Launchpads[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private spaceXService: SpaceXApiProvider, public loadingCtrl: LoadingController) {
      console.log("constructor");  
    this.siteId = navParams.data;
    }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let loader = this.loadingCtrl.create({
      content: 'Chargement...',
      });
      loader.present().then(() => {
        this.spaceXService.getAllLaunchpads().subscribe(data =>{
          console.log("data");  
          for(var i = 0; i < data.length; i++){
            console.log(data[i].id + "==" + this.siteId);
            if(data[i].id == this.siteId){
              this.launchpad = data[i];   
              break;
            }
          }
          console.log(data.length)
          this.launchpads = data;
          console.log(this.launchpads.length)



          let mapOptions: GoogleMapOptions = {
            camera: {
               target: {
                 lat: this.launchpad.location.latitude,
                 lng: this.launchpad.location.longitude
               },
               zoom: 16,
               tilt: 30,
             },
             mapType : GoogleMapsMapTypeId.SATELLITE
          };
      
          this.map = GoogleMaps.create('map', mapOptions);
          for(var i = 0; i < this.launchpads.length; i++){
            this.map.addMarker({
              title: this.launchpads[i].full_name,
              icon: 'blue',
              animation: 'DROP',
              position: {
                lat: this.launchpads[i].location.latitude,
                lng: this.launchpads[i].location.longitude
              },
              snippet: this.launchpads[i].details
              
            });
          }
        });
        loader.dismiss();
      });
  }
}