// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen){
    sidebar.classList.add("sidebar-responsive")
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen){
    sidebar.classList.remove("sidebar-responsive")
    sidebarOpen = false;
  }
}

function gotoSignin() {
  window.location.href = "../MP-SignIn/SignIn-Index.html"; 
}

function gotoGrid() {
  window.location.href = "../MP-PixelGrid/MPIndex.html"; 
}

var barChartOptions = {
  series: [{
    data: [10,8,6,4,2],
    name: "Paintings",
}],
  chart: {
  type: 'bar',
  backround: "transparent",
  height: 350,
  toolbar: {
    show: false,
  },
},
colors: [
  "#2962ff",
  "#9962ff",
  "#f962ff",
  "#a962ff",
  "#6262ff",
],

plotOptions: {
  bar: {
    distributed: true,
    borderRadius: 4,
    horizontal: false,
    columnWidth:"40%",
  }
},
dataLabels: {
  enabled: false
},
fill: {
  opacity: 1,
},
grid: {
  borderColor: "#555999",
  yaxis: {
    lines: {
      show: true,
    },
  }, 

  xaxis: {
    lines: {
      show: true,
    },
  }, 
},
legend: {
  labels: {
    colors: "#f5f5f5",
  },
  show: true,
  position: "top",
},

stroke: {
  colors: ["transparent"],
  show: true,
  width: 2,
},

tooltip: {
  shared: true,
  intersect: false,
  theme: "dark",
},

xaxis: {
  categories: ["Mona Lisa", "Girl With A Pearl Earing", "Starry Starry Night", "American Gothic", "Persistance Of Time"],
  title: {
    style: {
      color: "#f5f5f5",
    },
  },
},

yaxis: {
  title: {
    text: "Popularity",
    style: {
      color: "f5f5f5",
    },
  },
},

axisBorder: {
  color: "#55596e",
  show: true,
},

axisTicks: {
  color: "#55596e",
  show: true,
},

labels: {
  style: {
    colors: "f5f7ff",
  },
},

};

var chart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
chart.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Your Likes',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Friends Likes',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#00ab57', '#d50000'],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();
