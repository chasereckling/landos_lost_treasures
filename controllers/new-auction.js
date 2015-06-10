App.NewAuctionController = Ember.Controller.extend({
  actions: {
    save: function(){
      var newAuction = this.store.createRecord('auction', {
        title: this.get('title'),
        body: this.get('body'),
        date: this.get('date')
      });
      newAuction.save();
      this.transitionToRoute('auctions');

      this.set('title', null),
      this.set('body', null),
      this.set('date', null)
    }
  }
});
