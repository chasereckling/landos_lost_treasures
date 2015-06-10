App.NewItemController = Ember.Controller.extend({
  needs: ['auction'],
  actions: {
    save: function() {
      var newItem = this.store.createRecord('item', {
        title: this.get('title'),
        description: this.get('description'),
        price: this.get('price'),
        image: this.get('image')
      })
      newItem.save();

      var auction = this.get('controllers.auction.model');
      auction.get('items').pushObject(newItem);
      auction.save();

      this.transitionToRoute('auction', auction.id)
    }
  }
})
