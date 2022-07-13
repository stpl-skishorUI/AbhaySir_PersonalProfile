

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()

$(document).ready(function () {
  // saveData();
  saveData();
});

function saveData() {
  let PersonName = $('#PersonName').val();
  let MobileNo = $('#MobileNo').val();
  let WardNo = $('#WardNo').val();
  let LocationName = $('#LocationName').val();
  let Description = $('#Description').val();

  if (PersonName == "" || MobileNo == "" || WardNo == "") {

  }
  let queryparams;
  queryparams = 'PersonName=' + PersonName + '&MobileNo=' + MobileNo+ '&WardNo=' + WardNo+ '&LocationName=' + 'ddsf' + '&Description=' + 'sdfds';
  //console.log(JSON.stringify(queryparams));
  $.ajax({
      type: "POST",
      url: "http://electionsurvey.erpguru.in/service.asmx/insert_surveydata_1_0?" + queryparams,
      headers: { 'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept', 'Accept': 'application/json,application/text,*/*' },
      //data: JSON.stringify(queryparams),
      dataType: "json",
      contentType: "text/plain",
      processdata: false,
      success: function (data) {
      },
      error: function () {
          ///alert("Error Occured");
      }
  })

}

function validateMobileNumber(mobileNo) {
  var regex = /(^[6-9]\d{9}$)/;
  var filter = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;
  if (regex.test(mobileNo)) {
      return true;
  } else {
      return false;
  }
}