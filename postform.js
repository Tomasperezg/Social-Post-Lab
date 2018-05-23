"use strict";
{
  let postform = {
    template: `<post ng-repeat="p in $ctrl.post" title ="p.title" body ="p.body"></post>`,
    controller: function(){
      let vm = this;
      vm.post = [
    {
      title: "breaking news", body: "Chimp wins the lottery"
    },

    {
      title: "fire sale", body: "you're missing out"
    },

    {
      title: "slim shady beefs meijer", body: "he got mad couse didn't had vitagummy"
    }
    ];




     }

  }


  angular
    .module("appBook")
    .component("postForm", postform);
}
