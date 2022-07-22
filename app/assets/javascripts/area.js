var area = [
  "Data science",
  "IT operations management and engineering",
  "Product and delivery management",
  "QAT analysis and testing",
  "Technical development",
  "User centered design"
  ]
  var element = document.querySelector('#area')
  var id = 'autocomplete-default'
  accessibleAutocomplete({element: element, id: id, source: area})
