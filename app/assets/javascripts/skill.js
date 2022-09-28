var skill = [
  "Agile working",
  "Analysis",
  "Commercial",
  "Communication skills",
  "Customer service management",
  "Data",
  "Digital"
  ]
  var element = document.querySelector('#skill')
  var id = 'autocomplete-default'
  accessibleAutocomplete({element: element, id: id, source: skill})
