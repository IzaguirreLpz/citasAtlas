function radioValue(v) {
  var anotherDiv = document.getElementsByClassName("divButton");
  for (let index = 0; index < anotherDiv.length; index++) {
    if (anotherDiv[index].classList.contains("divButton_selected")) {
      anotherDiv[index].classList.remove("divButton_selected");
    }
  }
  var div = v.parentElement.parentElement;
  div.classList.add("divButton_selected");
}

document
  .getElementById("btn_presencial")
  .addEventListener("click", function () {
    document.getElementById("section_presencial").style.display = "block";
    document.getElementById("btn_virtual").classList.add("button_unSelected");
    document
      .getElementById("btn_presencial")
      .classList.remove("button_unSelected");
    document.getElementById("btn_presencial").classList.add("button_selected");
    document.getElementById("section_videollamada").style.display = "none";
  });

document.getElementById("btn_virtual").addEventListener("click", function () {
  document.getElementById("section_presencial").style.display = "none";
  document.getElementById("btn_virtual").classList.remove("button_unSelected");
  document.getElementById("btn_presencial").classList.add("button_unSelected");
  document.getElementById("btn_virtual").classList.add("button_selected");
  document.getElementById("section_videollamada").style.display = "block";
});

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    //document.getElementById("nextBtn").disabled = true;
    document.getElementById("nextBtn").value = "Agendar";
    document.getElementById("nextBtn").type = ["submit"];
    document
      .getElementById("terminosCondiciones")
      .addEventListener("click", function () {
        document.getElementById("nextBtn").disabled = false;
      });
    document.getElementById("prevBtn").addEventListener("click", function () {
      document.getElementById("nextBtn").disabled = false;
    });
  } else if (currentTab == 0) {
    document.getElementById("nextBtn").value = "Elegir Fecha y Hora";
  } else {
    document.getElementById("nextBtn").value = "Continuar";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

//datetime picker
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".datepicker");
  var instances = M.Datepicker.init(elems, {
    format: "dd/mm/yyyy",
    setDefaultDate: false,
    defaultDate: new Date(tomorrow),
    disableWeekends: false,
    firstDay: 1,
    minDate: new Date(tomorrow),
    i18n: {
      months: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      monthsShorts: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ],
      weekDays: [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo",
      ],
      weekdaysShort: ["Dom", "Lun", "Mar", "Mier", "Juev", "Vier", "Sab"],
      weekdaysAbbrev: ["D", "L", "M", "M", "J", "V", "S"],
    },
  });
});
var dateModal = document.getElementsByClassName("datepicker-modal ");

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
}

/* Validacion terminos y condiciones */
