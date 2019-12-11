import { Contato } from './Entities/contato.model';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as cloneDeep from 'lodash/cloneDeep';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'agenda';
  contacts : Contato[];
  tmpContact : Contato;
  selectedContactRef : Contato;
  Id = 0;
  IsUpdate = false;
  SearchBox = "";
  ngOnInit(): void {
    this.tmpContact = new Contato(0,'','','',false);
    this.contacts = new Array();
  }

  getContacts() : Contato[] {
    var that = this;
    var results = _.filter(this.contacts,function(obj) {
      return obj.name.indexOf(that.SearchBox) !== -1;
    });

    return _.orderBy(results.length == 0? this.contacts : results, ['name'],['asc']);
  }

  NewContact() : void {
    if(this.IsUpdate)
    {
      this.UpdateContact();
      return;
    }
    this.tmpContact.id = this.Id;
    this.tmpContact.isNew = true;
    let obj = cloneDeep(this.tmpContact); 
    this.contacts.push(obj);

    setTimeout(() => {
      obj.isNew = false; 
    }, 10000);

    this.ClearContact();
    this.Id += 1;
    $("#modalNew .close").click();
  }

  getHighlight(selectedContact : Contato) : string {
    if(selectedContact.isNew) 
      return "#ff9a00";
    else 
      return "#ffffff";
  }

  OpenUpdateContact(selectedContact : Contato) : void {
    this.IsUpdate = true;
    
    this.tmpContact.name = selectedContact.name;
    this.tmpContact.email = selectedContact.email;
    this.tmpContact.phone = selectedContact.phone;
    this.tmpContact.isNew = false; 
    this.selectedContactRef = selectedContact;
  }

  UpdateContact() : void {
    this.selectedContactRef.name = this.tmpContact.name;
    this.selectedContactRef.email = this.tmpContact.email;
    this.selectedContactRef.phone = this.tmpContact.phone;
    this.selectedContactRef.isNew = false; 

    this.ClearContact();
    $("#modalNew .close").click();
  }

  OpenDeleteContact(selectedContact : Contato) : void {
    this.selectedContactRef = selectedContact;
  }

  DeleteContact() : void {
    let index = 0;
    let indexSelected = 0;
    
    this.contacts.forEach(x => {
      if(x.id == this.selectedContactRef.id)
      {
        indexSelected = index;
      }
      index++;
    });
    this.contacts.splice(indexSelected,1);
    $("#modalDelete .close").click();
  }

  ClearContact() : void {
    this.tmpContact.name = "";
    this.tmpContact.email = "";
    this.tmpContact.phone = "";
    this.tmpContact.isNew = false; 
    this.IsUpdate = false;
  }

  getColor(name) : string {
    name = name.toLowerCase();

    if(name.charAt(0) == 'a') return '#ff9a00';
    if(name.charAt(0) == 'b') return '#87c735';
    if(name.charAt(0) == 'c') return '#00a5f9';
    if(name.charAt(0) == 'd') return '#ffef00';
    if(name.charAt(0) == 'e') return '#682cbf';
    if(name.charAt(0) == 'f') return '#ff9a00';
    if(name.charAt(0) == 'g') return '#00bcd9';
    if(name.charAt(0) == 'h') return '#d40c00';
    if(name.charAt(0) == 'i') return '#ff9a00';
    if(name.charAt(0) == 'j') return '#87c735';
    if(name.charAt(0) == 'k') return '#00a5f9';
    if(name.charAt(0) == 'l') return '#ffef00';
    if(name.charAt(0) == 'm') return '#00bcd9';
    if(name.charAt(0) == 'n') return '#ff9a00';
    if(name.charAt(0) == 'o') return '#d40c00';
    if(name.charAt(0) == 'p') return '#ff9a00';
    if(name.charAt(0) == 'q') return '#87c735';
    if(name.charAt(0) == 'r') return '#00a5f9';
    if(name.charAt(0) == 's') return '#ffef00';
    if(name.charAt(0) == 't') return '#682cbf';
    if(name.charAt(0) == 'u') return '#ff9a00';
    if(name.charAt(0) == 'v') return '#00bcd9';
    if(name.charAt(0) == 'w') return '#d40c00';
    if(name.charAt(0) == 'x') return '#ff9a00';
    if(name.charAt(0) == 'y') return '#87c735';
    if(name.charAt(0) == 'z') return '#00a5f9';

  }

}
