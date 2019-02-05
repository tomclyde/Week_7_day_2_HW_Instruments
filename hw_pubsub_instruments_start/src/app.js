const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentFamiliesInfoView = require('./views/instrument_families_info_view.js');
const InstrumentsData = require('./data/instrument_family_data')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const selectElement = document.querySelector('select#instrument-families');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  console.log(InstrumentsData);
  const InstrumentsDataSource = new InstrumentFamilies(InstrumentsData);
  InstrumentsDataSource.bindEvents();
});
