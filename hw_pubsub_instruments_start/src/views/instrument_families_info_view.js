const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamiliesInfoView = function(container){
  this.container = container;
};

InstrumentFamiliesInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:selected-instruments-ready', (evt) => {
    const instruments = evt.detail;
    this.render(instruments);
  });
};

InstrumentFamiliesInfoView.prototype.render = function(instruments){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `Instrument Type Name: ${instruments.name}
                               Description: ${instruments.description}
                               Example Instruments: ${instruments.instruments}`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = InstrumentFamiliesInfoView;
