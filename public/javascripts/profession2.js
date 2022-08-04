var profession2 = [
  "Analysis",
  "Commercial and procurement",
  "Communications",
  "Counter fraud",
  "Digital, data and technology",
  "Finance"
  ]
  var element = document.querySelector('#profession2')
  var id = 'autocomplete-default'
  accessibleAutocomplete({element: element, id: id, source: profession2})
