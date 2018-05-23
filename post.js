"use strict";
{
  let post = {
    bindings: {
      title: "<",
      body: "<"
    },
    template: `<h2>{{$ctrl.title}}</h2>
              <p>{{ $ctrl.body }}</p> <input type="button" id="xbutton" name="delete" value="x" ng-click="$.ctrl.delete()">`,
    controller: function(){
      let vm = this;

     }

}
  angular
  	.module("appBook")
  	.component("post", post);
}
