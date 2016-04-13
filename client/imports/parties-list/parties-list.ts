import 'reflect-metadata';
import 'zone.js/dist/zone';
import {NgZone, Component} from 'angular2/core';
import {Tracker} from 'meteor/tracker';
import {Parties} from '../../../collections/parties.ts';
import {PartiesForm} from '../parties-form/parties-form.ts';
import {RouterLink} from 'angular2/router';

@Component({
   selector: 'parties-list',
  templateUrl: 'client/imports/parties-list/parties-list.html',
  directives: [PartiesForm, RouterLink]
})
export class PartiesList {

  parties: Mongo.Cursor<Party>;
 
  constructor () {
    this.parties = Parties.find();
  }

  removeParty(party) {
    Parties.remove(party._id);
  }

}