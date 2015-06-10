App.Item = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  image: DS.attr(),
  auction: DS.belongsTo('auction', {async: true})
});
