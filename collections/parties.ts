import {Mongo} from 'meteor/mongo';
 
export var Parties = new Mongo.Collection<Party>('parties');


