App.AuctionController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    delete:function() {
      if(confirm('Are you sure?')){
        this.get('model').destroyRecord();
        this.transitionToRoute('auctions');
      }
    },
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
    },
    showModal: function(item) {
      this.set('currentItem', item)
      $("#myModal").modal('show');
    }
  }
});
