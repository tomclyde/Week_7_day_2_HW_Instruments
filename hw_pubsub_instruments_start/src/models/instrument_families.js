const PubSub = require('../helpers/pub_sub.js');


const InstrumentFamilies = function(data) {
  this.data = data;
};


InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('Instruments:all-instruments-ready', this.data);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishAnimalDetail(selectedIndex);
  });
};

module.exports = InstrumentFamilies;
