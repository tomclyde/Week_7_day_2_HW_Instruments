const PubSub = require('../helpers/pub_sub.js');


const InstrumentFamilies = function(data) {
  this.data = data;
};


InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('Instruments:all-instruments-ready', this.data);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishInstrumentsDetail(selectedIndex);
  });
};


InstrumentFamilies.prototype.publishInstrumentsDetail = function(InstrumentIndex){
  const selectedInstrument = this.data[InstrumentIndex];
  PubSub.publish('Instruments:selected-instruments-ready', selectedInstrument)
};


module.exports = InstrumentFamilies;
