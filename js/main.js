document.querySelectorAll('[role="tabpanel"]').forEach(element => {
  let functionName = element.getAttribute('data-content')

  element.innerHTML = window[functionName]()
})


