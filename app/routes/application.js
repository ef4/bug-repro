/* eslint no-console: 0 */
/* eslint no-debugger: 0 */

import Ember from 'ember';
import autosize from "npm:autosize";
import tok from "npm:@opentok/client";
import bowser from "npm:bowser";
import pubhub from "npm:pubnub";
import uuid from "npm:uuid";
import railsT from "npm:rails-timezone";

export default Ember.Route.extend({
  beforeModel() {
    console.log(autosize);
    console.log(tok);
    console.log(bowser);
    console.log(pubhub);
    console.log(uuid);
    console.log(railsT);
    debugger;
  }
});
