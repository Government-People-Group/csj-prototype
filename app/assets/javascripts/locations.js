var locations = [
  "1 Horse Guards Rd, London SW1A 2HQ",
  "70 Whitehall, London SW1A 2AS",
  "35 Great Smith St, London SW1P 3BU",
  "6 Central Square, Cardiff CF10 1EP",
  "3 Glass Wharf, Bristol BS2 0EL",
  "3 Arena Central, Bridge St, Birmingham B1 2AX"
  ]
  var element = document.querySelector('#locations')
  var id = 'autocomplete-default'
  accessibleAutocomplete({element: element, id: id, source: locations})
