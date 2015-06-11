App.NewItemController = Ember.Controller.extend({
  needs: ['auction'],
  actions: {
    save: function() {
      var newItem = this.store.createRecord('item', {
        name: this.get('name'),
        description: this.get('description'),
        price: this.get('price'),
        image: this.get('image')
      });
      newItem.save();

      var auction = this.get('controllers.auction.model');
      auction.get('items').pushObject(newItem);
      auction.save();

      this.transitionToRoute('auction', auction.id);

      this.set('title', null),
      this.set('description', null),
      this.set('price', null),
      this.set('image', null)
    }
  }
})
