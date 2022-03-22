import { DOCUMENT } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { attraction } from '../models/Attraction';
import { AttractionService } from '../services/attractionsService';
import { MapService } from '../services/map.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit{

  // listAttraction:attraction[]=[];
  listAttraction:any[]=[];
  display:boolean = true;
  
  constructor(
    private _service :AttractionService,
    private mapService : MapService,
    @Inject(DOCUMENT) document
  ) {



    this.listAttraction = [{"nom":"Musée Marthe Donas","imageUrl":null,"description":null,"geoLat":50.651414551,"geoLong":4.267790476,"adresse":"Rue de la Montagne 36","codePostal":1460,"localite":"ITTRE","siteUrl":"http://www.marthedonas.be","categories":null},{"nom":"Musée International du Carnaval et du Masque","imageUrl":null,"description":null,"geoLat":50.408975771,"geoLong":4.165652194,"adresse":"Rue Saint-Moustier 10","codePostal":7130,"localite":"BINCHE","siteUrl":"http://www.museebinche.be","categories":null},{"nom":"Musée de la Photographie","imageUrl":null,"description":null,"geoLat":50.388135559,"geoLong":4.404502509,"adresse":"Avenue Paul Pastur 11","codePostal":6032,"localite":"CHARLEROI","siteUrl":"http://www.museephoto.be","categories":null},{"nom":"Musée Keramis - Centre de la Céramique de la FWB","imageUrl":null,"description":null,"geoLat":50.46962,"geoLong":4.187166715,"adresse":"Place des Fours Bouteilles 1","codePostal":7100,"localite":"LA LOUVIERE","siteUrl":"http://www.keramis.be","categories":null},{"nom":"Musée L - Louvain","imageUrl":null,"description":null,"geoLat":50.668366569,"geoLong":4.620072033,"adresse":"Place des Sciences 3-bte L6.07.01","codePostal":1348,"localite":"OTTIGNIES-LOUVAIN-LA-NEUVE","siteUrl":"http://www.museel.be","categories":null},{"nom":"Musée Orfèvrerie - Château de Seneffe","imageUrl":null,"description":null,"geoLat":50.525925636,"geoLong":4.267751226,"adresse":"Rue Lucien Plasman 9","codePostal":7180,"localite":"SENEFFE","siteUrl":"http://www.chateaudeseneffe.be","categories":null},{"nom":"Musée de l'Imprimerie et des Lettres de Wallonie","imageUrl":null,"description":null,"geoLat":50.342336172,"geoLong":4.285745223,"adresse":"Rue Verte 1B","codePostal":6530,"localite":"THUIN","siteUrl":"http://www.maison-imprimerie.net","categories":null},{"nom":"Musée Bois du Luc - Musée de la Mine et du Développement Durable","imageUrl":null,"description":null,"geoLat":50.470071577,"geoLong":4.151217221,"adresse":"Rue Saint-Patrice 2B","codePostal":7110,"localite":"LA LOUVIERE","siteUrl":"http://www.ecomuseeboisduluc.be","categories":null},{"nom":"Musée de l'Eau et de la Fontaine","imageUrl":null,"description":null,"geoLat":50.6574,"geoLong":4.57919,"adresse":"Allée du Bois des Rêves (Domaine du Bois des Rêves) 1","codePostal":1340,"localite":"OTTIGNIES","siteUrl":"http://www.lemuseedeleauetdelafontaine.be","categories":null},{"nom":"Musée le Bois du Cazier","imageUrl":null,"description":null,"geoLat":50.381179222,"geoLong":4.44380329,"adresse":"Rue du Cazier 80","codePostal":6001,"localite":"CHARLEROI","siteUrl":"http://www.leboisducazier.be","categories":null},{"nom":"Centre de la Gravure et de l'image Imprimée","imageUrl":null,"description":null,"geoLat":50.474293167,"geoLong":4.185220904,"adresse":"Rue des Amours 10","codePostal":7100,"localite":"LA LOUVIERE","siteUrl":"http://www.centredelagravure.be","categories":null},{"nom":"Musée Ianchelevici","imageUrl":null,"description":null,"geoLat":50.479002556,"geoLong":4.185948422,"adresse":"Place communale 21","codePostal":7100,"localite":"LA LOUVIERE","siteUrl":"http://www.lemill.be","categories":null},{"nom":"Mariemont","imageUrl":null,"description":null,"geoLat":50.467853,"geoLong":4.232704,"adresse":"Chaussée de Mariemont 100","codePostal":7140,"localite":"MORLANWELZ","siteUrl":"http://www.musee-mariemont.be/","categories":null},{"nom":"Musée du Verre","imageUrl":null,"description":null,"geoLat":50.381179959,"geoLong":4.443819961,"adresse":"Bois du Cazier - Rue du Cazier 80","codePostal":6001,"localite":"CHARLEROI","siteUrl":"http://www.charleroi-museum.be/musee-du-verre","categories":null},{"nom":"Les ciné-débats, Maison de la Laïcité","imageUrl":null,"description":null,"geoLat":50.39743767973928,"geoLong":4.331115068204576,"adresse":"Place Degauque 1","codePostal":6142,"localite":"Leernes","siteUrl":"https://www.fontaine-leveque.be/","categories":null},{"nom":"Ciné4 Nivelles","imageUrl":null,"description":null,"geoLat":50.597658895857435,"geoLong":4.321783997739975,"adresse":"Rue de Soignies 4","codePostal":1400,"localite":"Nivelles","siteUrl":"https://www.cine4.be/","categories":null},{"nom":"Ciné-club du Centre Culturel de Genappe","imageUrl":null,"description":null,"geoLat":50.61288503271879,"geoLong":4.451088198143141,"adresse":"Rue de Bruxelles 14a","codePostal":1470,"localite":"Genappe","siteUrl":"https://www.ccgenappe.be/","categories":null},{"nom":"Centre culturel Gabrielle Bernard","imageUrl":null,"description":null,"geoLat":50.457681711403865,"geoLong":4.692484208570252,"adresse":"Rue de la Fabrique 4C","codePostal":5190,"localite":"Moustier-sur-Sambre","siteUrl":"https://www.facebook.com/ccgbmoustier/","categories":null},{"nom":"Cinéscope Louvain-la-Neuve","imageUrl":null,"description":null,"geoLat":50.66908395263599,"geoLong":4.611427396552592,"adresse":"Grand Place 55","codePostal":1348,"localite":"Louvain-la-Neuve","siteUrl":"https://www.cinescope.be/","categories":null},{"nom":"Centre culturel de Floreffe","imageUrl":null,"description":null,"geoLat":50.43343916249665,"geoLong":4.760546562861522,"adresse":"Rue Joseph Piret 7","codePostal":5150,"localite":"Floreffe","siteUrl":"https://www.centreculturelfloreffe.be/","categories":null},{"nom":"Kinepolis Imagibraine","imageUrl":null,"description":null,"geoLat":50.668710979201485,"geoLong":4.378724184652972,"adresse":"Boulevard de France","codePostal":1420,"localite":"Braine-l'Alleud","siteUrl":"https://kinepolis.be/fr/cinemas/kinepolis-imagibraine?main-section=presales","categories":null},{"nom":"Centre culturel de Braine-L'Alleud","imageUrl":null,"description":null,"geoLat":50.683880197981004,"geoLong":4.372345069546699,"adresse":"Rue Jules Hans 4","codePostal":1420,"localite":"Braine-l'Alleud","siteUrl":"https://www.acte2.be/cineclub/cine-club","categories":null},{"nom":"Ciné-Club Riva-Bella","imageUrl":null,"description":null,"geoLat":50.684325231645985,"geoLong":4.383523413489478,"adresse":"Athénée Royal Riva Bella  - Boulevard de l'Europe 35","codePostal":1420,"localite":"Braine-l'Alleud","siteUrl":"https://www.facebook.com/events/ath%C3%A9n%C3%A9e-royal-riva-bella-de-braine-lalleud/cin%C3%A9-club-riva-bella/2194661444123536/","categories":null},{"nom":"CinéClub Louvain-la-Neuve","imageUrl":null,"description":null,"geoLat":50.66908395263599,"geoLong":4.611427396552592,"adresse":"Cinescope - Grand Place 55","codePostal":1348,"localite":"Louvain-la-Neuve","siteUrl":"https://www.facebook.com/cineclublouvainlaneuve/","categories":null},{"nom":"Pathé Charleroi","imageUrl":null,"description":null,"geoLat":50.41883539277473,"geoLong":4.458990893667778,"adresse":"Grand Rue 141","codePostal":6000,"localite":"Charleroi","siteUrl":"https://www.pathe.be/","categories":null},{"nom":"Cinéma Stuart","imageUrl":null,"description":null,"geoLat":50.475338122395534,"geoLong":4.186176726973699,"adresse":"Rue Sylvain Guyaux 16","codePostal":7100,"localite":"La Louvière","siteUrl":"http://www.cinemastuart.be/","categories":null},{"nom":"Cinéma Cameo Tamines","imageUrl":null,"description":null,"geoLat":50.44193720690823,"geoLong":4.608186310416598,"adresse":"Rue Notre Dame 27","codePostal":5060,"localite":"Tamines","siteUrl":"http://cinecameo.be/","categories":null},{"nom":"Cin’Agro, ciné-club de l’AG à Gembloux","imageUrl":null,"description":null,"geoLat":50.561767819630546,"geoLong":4.696674113428759,"adresse":"Passage des Déportés 2","codePostal":5030,"localite":"Gembloux","siteUrl":"http://www.agrogembloux.be/","categories":null},{"nom":"Waux-Hall Nivelles","imageUrl":null,"description":null,"geoLat":50.59801677865419,"geoLong":4.322475346601893,"adresse":"Place Albert 1er","codePostal":1400,"localite":"Nivelles","siteUrl":"https://www.centrecultureldenivelles.be/agenda/category/cc-nivelles/cinema-cc-nivelles/","categories":null},{"nom":"Quai 10","imageUrl":null,"description":null,"geoLat":50.40647563451659,"geoLong":4.4411572327537305,"adresse":"Quai Arthur Rimbaud 10","codePostal":6000,"localite":"Charleroi","siteUrl":"https://www.quai10.be/","categories":null},{"nom":"Quai 10 Côté Parc","imageUrl":null,"description":null,"geoLat":50.40809258199072,"geoLong":4.446196611627557,"adresse":"Rue de Montigny 58","codePostal":6000,"localite":"Charleroi","siteUrl":"https://www.quai10.be/","categories":null},{"nom":"Centre culturel local Le Sablon","imageUrl":null,"description":null,"geoLat":50.44291748851773,"geoLong":4.25440972832905,"adresse":"Place de Carnières 36","codePostal":7141,"localite":"Carnières","siteUrl":"https://www.morlanwelz.be/loisirs/culture/sablon","categories":null},{"nom":"Atrium57, Centre culturel de Gembloux","imageUrl":null,"description":null,"geoLat":50.563668176512955,"geoLong":4.69355800583201,"adresse":"Rue du Moulin 57","codePostal":5030,"localite":"Gembloux","siteUrl":"https://atrium57.be/agenda-cinema/","categories":null}];
    // this._service.getAll().subscribe({
    //   next:(data:attraction[])=>{
    //     this.listAttraction = data;
    //     console.log(data);

    //   }      
    // })

  }

  ngOnInit(): void {
    
  }
  

  map  : HTMLElement
  divMap : any

  @ViewChild("map2", {read: ElementRef, static: true}) map2: ElementRef; // gets #target1
  ngAfterViewInit()
  { 
    console.log(this.map2)
    this.map = document.createElement('div');
    // console.log(this.map)
    this.divMap  = this.mapService.initMap(this.map).innerHTML;
    console.log(this.divMap)
  }

 
  setDisplay() {
    this.display = !this.display;
    console.log(this.display)
  }
  
}
