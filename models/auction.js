App.Auction = DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  date: DS.attr(),
  items: DS.hasMany('item', {async: true})
});
