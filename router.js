App.Router.map(function(){
  this.resource('auctions', {path: '/'}, function() {
    this.resource('auction', {path: '/:auction_id'}),
    this.resource('new-auction')
  });
});
