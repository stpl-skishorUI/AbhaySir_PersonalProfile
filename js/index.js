

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
  toastr.options = {
    "showDuration": "2000",
  }
  bindWordNo();
  $("#button").click(function (e) {
    e.preventDefault();
    saveData();
  });
 
});


function bindWordNo() {
  let optWardNo;
  let wardNo = ['१', '२', '३', '४', '५', '६', '७', '८', '९', '१०']
  optWardNo += "<option value =''>वार्ड क्र. निवडा *</option>"
  wardNo.map((ele) => {
    optWardNo += "<option value=" + ele + ">" + ele + "</option>"
  })

  $('#WardNo').html(optWardNo);
}
function saveData() {

  let PersonName = $('#PersonName').val();
  let MobileNo = $('#MobileNo').val();
  let WardNo = $('#WardNo').val();
  let LocationName = $('#LocationName').val();
  let Description = $('#Description').val();
  if (Description.trim() == "") {
    toastr.error('कृपया निवडणुकी विषयी आपले मत टाका');
    return false;
  } else if (WardNo.trim() == "") {
    toastr.error('कृपया तुमचा वार्ड क्र. निवडा');
    return false;
  } else if (LocationName.trim() == "") {
    toastr.error('कृपया तुमचा राहत असलेला एरिया (गल्ली, वाडी, मळा )');
    return false;
  }
  let obj= {
    'PersonName': PersonName,
    'MobileNo':MobileNo,
    'WardNo':WardNo,
    'LocationName':LocationName,
    'Description':Description

  }


  MobileNoOrPanTxtChange(); //validation for mobile number
  $.ajax({
    type: "POST",
    url: "http://electionsurvey.erpguru.in/service.asmx/insert_surveydata_1_0?" ,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    data: obj,//JSON.parse(obj),
    dataType: "json",
    contentType: "application/json, text/plain",
    success: function (data) {
      if (data.data1.length) {
        $("#PersonName,#WardNo,#Description,#LocationName,#WardNo,#MobileNo").val('');
        $("#SuccessModal").modal('show');   
            }
    },
    error: function (data) {
      toastr.error("Error");
    }
  })

}

function MobileNoOrPanTxtChange() {
  let MobileNo = $('#MobileNo').val();
  var regex = /(^[6-9]\d{9}$)/;
  var filter = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;
  if (MobileNo != "") {
    if (regex.test(MobileNo)) {
      return true;
    } else {
      toastr.error('कृपया वैध मोबाईल क्रमांक प्रविष्ट करा ');
      return false;
    }
  }
}