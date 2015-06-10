App.NewAuctionController = Ember.Controller.extend({
  actions: {
    save:function(){
      var newAuction = this.store.createRecord('auction', {
        title: this.get('title'),
        body: this.get('body'),
        date: this.get('date')
      });
      newAuction.save();
      this.transitionToRoute('auctions');
    }
  }
});
