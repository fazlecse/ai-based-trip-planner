"use strict";
// Preloader area
const preloader = document.getElementById("preloader");
const preloaderFunction = () => {
  preloader.style.display = "none";
};
// toggleSideMenu start
const toggleSideMenu = () => {
  document.body.classList.toggle("toggle-sidebar");
};
// toggleSideMenu end
// Tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// cmn select2 start
$(document).ready(function () {
  $(".cmn-select2").select2();
});
// cmn select2 end

// cmn-select2-modal
$(".modal-select").select2({
  dropdownParent: $("#formModal"),
});

// cmn-select2 with image start
$(document).ready(function () {
  $(".cmn-select2-image").select2({
    templateResult: formatState,
    templateSelection: formatState,
  });
});

// select2 function
function formatState(state) {
  if (!state.id) {
    return state.text;
  }
  var baseUrl = "assets/img/mini-flag";
  var $state = $(
    '<span><img src="' +
      baseUrl +
      "/" +
      state.element.value.toLowerCase() +
      '.svg" class="img-flag" /> ' +
      state.text +
      "</span>"
  );
  return $state;
}
// cmn-select2 with image start

$(document).ready(function () {
  // offer start
  var swiper = new Swiper(".offer-swiper", {
    centeredSlides: true,
    effect: "fade",
    autoplay: {
      false: true,
      delay: 4000,
      disableOnInteraction: false,
    },
    autoplay: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // offer slider end

  //Multi step progress section start

  // Jquery UI start
  if ($("#datepicker").length) {
    $("#datepicker").datepicker({
      buttonImageOnly: false,
    });
  }
  // Jquery UI end

  // Apexcharts start
  // Piechart
  if ($("#pieChart").length) {
    var options = {
      series: [44, 55, 13, 33],
      chart: {
        type: "donut",
        height: "300",
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "right",
        offsetY: 0,
        height: 230,
      },
    };

    var chart = new ApexCharts(document.querySelector("#pieChart"), options);
    chart.render();
  }
  // Apexcharts end
});

// Dark theme start
const toggleBtn = document.getElementById("toggle-btn");
const body = document.querySelector("body");
toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("dark-theme", 1);
  } else {
    localStorage.setItem("dark-theme", 0);
  }
  setTheme();
});

function setTheme() {
  const isDarkTheme = localStorage.getItem("dark-theme");
  if (isDarkTheme == 1) {
    document.querySelector("body").classList.add("dark-theme");
    document.getElementById("moon").style.display = "none";
    document.getElementById("sun").style.display = "block";
  } else {
    document.querySelector("body").classList.remove("dark-theme");
    document.getElementById("moon").style.display = "block";
    document.getElementById("sun").style.display = "none";
  }
}
setTheme();
// Dark theme end
