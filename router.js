App.Router.map(function(){
  this.resource('auctions', {path: '/'}, function() {
    this.resource('new-auction');
  });
  this.resource('auction', {path: '/:auction_id'}, function() {
    this.resource('new-item');
  });
  this.resource('item', {path: '/:item_id'});
});
