/*
  This file is run on the front-end, and is
  embedded via "raw_header_select_js.txt".
*/

;(function () {
  var document = window.document
  var location = window.location
  var arr = location.pathname.split('/')
  var len = arr.length
  var path = arr[len - 1] || arr[len - 2]
  var el = document.getElementById('isg_header_select')
  var list = el.querySelectorAll('option')

  Array.prototype.forEach.call(list, function (item, i) {
    if (path === item.value) {
      el.selectedIndex = i
    }
  })

  el.onchange = function () {
    var value = el.value
    var url = '../' + value
    location.href = url
  }
})()
