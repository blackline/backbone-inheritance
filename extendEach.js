(function () {

  function extendEach () {
    var args  = Array.prototype.slice.call(arguments),
        child = this;

    _.each(args, function (proto) {
      child = child.extend(proto);
    });

    return child;
  }

  Backbone.Model.extendEach        =
    Backbone.Collection.extendEach =
    Backbone.Router.extendEach     =
    Backbone.View.extendEach       = extendEach;

})();