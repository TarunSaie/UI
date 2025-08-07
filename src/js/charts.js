
     // bar chart  starts


     var options = {
        chart: {
            type: 'bar',
            height: 500
        },
        series: [
            {
                name: 'OTA',
                data: [77, 51, 86]
            },
            {
                name: 'OTD',
                data: [60, 94, 74]
            }
        ],
        xaxis: {
            categories: ['31-12-24', 'Yesterday', 'Today']
        },
        plotOptions: {
            bar: {
                columnWidth: "50%", // Adjust to create space between bars


                borderRadius: 4,
                dataLabels: {
                    position: "top"
                }
            }
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '14px',
                fontWeight: 'bold'
            },
            formatter: function (val) {
                return val + "%";
            }
        },
        colors: ["#1890ff", "#102A54"], // Light Blue & Dark Blue
        legend: {
            position: 'bottom'
        },
        grid: {
            borderColor: '#E0E0E0',
            strokeDashArray: 4 
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // bar chart ends


// vehicle age chart starts

var options = {
    chart: {
        type: 'pie',
        height: 100
    },
    series: [1485, 898, 572],
    labels: ["0 to 3 years", "4 to 5 years", "5 and above years"],
    colors: ["#009CDE", "#9BA9B4", "#002F5D"],
    dataLabels: { enabled: false },
    legend: { show: false }
};

var chart = new ApexCharts(document.querySelector("#pieChart"), options);
chart.render();

// vehicle age chart ends

// occupancy chart starts

function createPieChart(elementId, value, color) {
    var options = {
        chart: {
            type: 'pie',
            height: 100
        },
        series: [value, 100 - value],
        labels: ["Occupied", "Empty"],
        colors: [color, "#C0C7D2"], 
        dataLabels: { enabled: false },
        legend: { show: false }
    };

    var chart = new ApexCharts(document.querySelector("#" + elementId), options);
    chart.render();
}

createPieChart("sedanChart", 95.12, "#009CDE");
createPieChart("suvChart", 67.98, "#009CDE");
createPieChart("busChart", 52.39, "#009CDE");
// occupancy chart ends


// alerts chrat starts

var options = {
    chart: {
        type: 'pie',
        height: 260
    },
    series: [65, 10, 10, 5, 4, 3, 3], // Adjust proportions based on the image
    labels: ["SOS", "Geo-fence", "Network", "Speed", "Idle", "Delay", "Location"],
    colors: ["#FF0000", "#FFA500", "#4BA6A6", "#A98ACD", "#A6A6A6", "#FF66B2", "#C0960C"],
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['#fff'] // White border between slices
    },
    legend: {
        show: false // Hide default legend since we are using a custom legend
    }
};

var chart = new ApexCharts(document.querySelector("#alertsChart"), options);
chart.render();

// alerts charts ends



// heatmap code 

// function initMap() {
//     var center = { lat: 17.3850, lng: 78.4867 }; // Hyderabad center
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 11,
//         center: center,
//         mapTypeId: 'roadmap'
//     });

//     // Heatmap Data
//     var heatmapData = [
//         { location: new google.maps.LatLng(17.500, 78.400), weight: 3.3 }, // SW
//         { location: new google.maps.LatLng(17.600, 78.500), weight: 41.2 }, // NE
//         { location: new google.maps.LatLng(17.300, 78.600), weight: 41.0 }, // SE
//         { location: new google.maps.LatLng(17.450, 78.550), weight: 14.3 }  // NW
//     ];

//     // Create Heatmap Layer
//     var heatmap = new google.maps.visualization.HeatmapLayer({
//         data: heatmapData,
//         dissipating: true,
//         radius: 50,
//         gradient: [
//             'rgba(0, 0, 0, 0)',
//             'rgba(255, 0, 0, 0.3)',
//             'rgba(255, 0, 0, 0.6)',
//             'rgba(255, 0, 0, 0.9)'
//         ]
//     });
//     heatmap.setMap(map);

//     // Add Quadrants
//     var lineOptions = {
//         strokeColor: '#FF9800',
//         strokeOpacity: 1.0,
//         strokeWeight: 3,
//         map: map
//     };

//     // Horizontal & Vertical Lines
//     new google.maps.Polyline({ path: [{ lat: 17.7, lng: 78.3 }, { lat: 17.1, lng: 78.3 }], ...lineOptions });
//     new google.maps.Polyline({ path: [{ lat: 17.4, lng: 78.1 }, { lat: 17.4, lng: 78.8 }], ...lineOptions });

//     // Quadrant Labels
//     var labels = [
//         { lat: 17.6, lng: 78.2, text: "North-West\nPercentage: 14.3%\nAverage Distance: 11 km" },
//         { lat: 17.6, lng: 78.6, text: "North-East\nPercentage: 41.2%\nAverage Distance: 16 km" },
//         { lat: 17.2, lng: 78.2, text: "South-West\nPercentage: 3.3%\nAverage Distance: 9 km" },
//         { lat: 17.2, lng: 78.6, text: "South-East\nPercentage: 41.0%\nAverage Distance: 21 km" }
//     ];

//     labels.forEach(label => {
//         var marker = new google.maps.Marker({
//             position: { lat: label.lat, lng: label.lng },
//             map: map,
//             label: {
//                 text: label.text,
//                 fontSize: "14px",
//                 fontWeight: "bold",
//                 color: "#003366"
//             }
//         });
//     });
// }

// // Load Map
// window.onload = initMap;




// dummy map
     // Initialize the map and set its view to a specific location (Hyderabad)
     var map = L.map('map').setView([17.3850, 78.4867], 11); // Hyderabad

     // Load a tile layer from OpenStreetMap (No API key needed)
     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         attribution: '&copy; OpenStreetMap contributors',
         maxZoom: 18
     }).addTo(map);

     // Add a marker at Hyderabad
     L.marker([17.3850, 78.4867]).addTo(map)
         .bindPopup("<b>Hyderabad</b><br>This is a dummy marker.")
         .openPopup();



// noshows and cancellation chart starts


// ✅ Line Chart (Main Page)
var lineChartOptions = {
    chart: {
        type: 'line',
        height: 400,
        zoom: { enabled: false }
    },
    series: [
        {
            name: "No-Show",
            data: [0, 50, 150, 200, 170, 140, 100, 80, 60, 6]
        },
        {
            name: "Cancellation",
            data: [50, 30, 20, 50, 90, 160, 250, 200, 150, 100]
        }
    ],
    xaxis: {
        categories: ["07-01-2025", "Yesterday", "", "", "", "", "", "", "", "Today"],
        labels: { rotate: -45 }
    },
    yaxis: { min: 0, max: 250 },
    stroke: { curve: 'smooth', width: 2 },
    colors: ['#007bff', '#dc3545'],
    markers: { size: 6 },
    tooltip: {
        enabled: true,
        shared: false,
        custom: function({ series, seriesIndex, dataPointIndex, w }) {
            let label = w.globals.labels[dataPointIndex];
            let value = series[seriesIndex][dataPointIndex];
            return `<div style="background:white; padding:10px; border-radius:5px; box-shadow:0px 0px 10px rgba(0,0,0,0.1);">
                <strong>${label}</strong><br/>
                <span style="color:${w.config.colors[seriesIndex]}">●</span> ${w.globals.seriesNames[seriesIndex]}: <strong>${value}</strong>
            </div>`;
        }
    },
    annotations: {
        xaxis: [{
            x: "Today",
            borderColor: "#000",
            strokeDashArray: 5,
            label: {
                text: "Today",
                style: { color: "#000", background: "#fff" }
            }
        }]
    },
    legend: {
        position: "bottom",
        markers: { fillColors: ['#007bff', '#dc3545'] }
    },
    grid: {
        borderColor: '#E0E0E0',
        strokeDashArray: 4
    }
};

// ✅ Render Line Chart (Main Page)
var lineChart = new ApexCharts(document.querySelector("#noshowchart"), lineChartOptions);
lineChart.render();




var modalChart;

document.getElementById("verticalCenterModal").addEventListener("shown.bs.modal", function () {
    setTimeout(() => {
        if (!modalChart) {
            modalChart = new ApexCharts(document.querySelector("#modal-noshowchart"), lineChartOptions); // ✅ Ensure Line Chart loads in modal
            modalChart.render();
        } else {
            modalChart.updateOptions(lineChartOptions);
            modalChart.resize();
        }
    }, 200);
});


// employeeChart

var empOptions = {
    chart: {
        type: 'bar',
        height: 400
    },
    series: [{
        name: 'Percentage',
        data: [10, 15, 15, 18, 42] // Data values for each category
    }],
    xaxis: {
        categories: ['IT', 'Marketing', 'Sales', 'Operations', 'Support'], // X-axis labels
    },
    yaxis: {
        min: 0,
        max: 100
    },
    plotOptions: {
        bar: {
            borderRadius: 5,  // Adds rounded corners
            columnWidth: '40%', // Adjust the bar width
            distributed: true, // Different colors for each bar
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val + "%"; // Display percentage
        },
        style: {
            fontSize: '14px',
            fontWeight: 'bold',
            colors: ['#000'] // Label color
        },
        offsetY: -5
    },
    colors: ['#E0E0E0'], // Light gray bar color
    grid: {
        borderColor: '#E0E0E0',
        strokeDashArray: 4, // Dashed grid lines
    }
};

var chart = new ApexCharts(document.querySelector("#empchart"), empOptions);
chart.render();



var empChart;

document.getElementById("employeeModal").addEventListener("shown.bs.modal", function () {
    setTimeout(() => {
        if (!empChart) {
            empChart = new ApexCharts(document.querySelector("#modal-employeechart"), empOptions); // ✅ Ensure Line Chart loads in modal
            empChart.render();
        } else {
            empChart.updateOptions(empOptions);
            empChart.resize();
        }
    }, 200);
});



// trps performed chart






var tripsChartOptions = {
    series: [{
        data: [15, 60, 18, 7] // Chart Data
    }],
    chart: {
        type: 'bar',
        height: 400,
    },
    plotOptions: {
        bar: {
            borderRadius: 5,
            horizontal: false,
            columnWidth: '40%',
        }
    },
    dataLabels: {
        enabled: true,
        formatter: (val) => val + '%',
        style: { colors: ['#000'] }
    },
    xaxis: {
        categories: ['1 - 10', '11 - 20', '21 - 30', '31 and above'],
        labels: { style: { fontWeight: 'bold' } }
    },
    yaxis: {
        labels: { formatter: (val) => val, style: { fontWeight: 'bold' } }
    },
    colors: ['#112D8F'], // Dark blue color
    grid: {
        borderColor: '#E0E0E0',
        strokeDashArray: 4, // Dashed grid lines
    }
};

let tripsMainChart, tripsModalChart; // Store chart instances

// Initialize chart on the main page
document.addEventListener("DOMContentLoaded", function () {
    tripsMainChart = new ApexCharts(document.querySelector("#tripsMainChart"), tripsChartOptions);
    tripsMainChart.render();
});

// Event listener to initialize chart when modal opens
document.getElementById('tripsPerformedModal').addEventListener('shown.bs.modal', function () {
    if (tripsModalChart) {
        tripsModalChart.destroy(); // Destroy previous chart if exists
    }
    tripsModalChart = new ApexCharts(document.querySelector("#tripsModalChart"), tripsChartOptions);
    tripsModalChart.render();
});

// Destroy chart when modal is closed
document.getElementById('tripsPerformedModal').addEventListener('hidden.bs.modal', function () {
    if (tripsModalChart) {
        tripsModalChart.destroy();
        tripsModalChart = null;
    }
});





        // Time Spent Chart Options (Donut Chart)
        var timeSpentChartOptions = {
            chart: {
                type: 'donut'
            },
            series: [189.91, 119.86, 244.24, 179.22, 129.88, 158.27, 157.02, 161.4, 191.33, 188.07, 183.1, 83.75],
            labels: ["IT", "Marketing", "Sales", "HR", "MIS", "Operations", "Product", "Designers", "Legal", "Finance", "CA", "EHS"],
            colors: ["#1E88E5", "#26A69A", "#FBC02D", "#42A5F5", "#80CBC4", "#7E57C2", "#9575CD", "#EF5350", "#29B6F6", "#FFA726", "#5C6BC0", "#66BB6A"],
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                label: 'Total',
                                formatter: function () {
                                    return '720hr';
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: { enabled: true },
            legend: { show: true, position: 'bottom' }
        };

        let timeSpentMainChart, timeSpentModalChart; // Store chart instances

        // Initialize chart on the main page
        document.addEventListener("DOMContentLoaded", function () {
            timeSpentMainChart = new ApexCharts(document.querySelector("#timeSpentMainChart"), timeSpentChartOptions);
            timeSpentMainChart.render();
        });

        // Event listener to initialize chart when modal opens
        document.getElementById('timeSpentModal').addEventListener('shown.bs.modal', function () {
            if (timeSpentModalChart) timeSpentModalChart.destroy(); // Destroy previous instance if exists

            timeSpentModalChart = new ApexCharts(document.querySelector("#timeSpentModalChart"), timeSpentChartOptions);
            timeSpentModalChart.render();
        });

        // Destroy chart when modal is closed
        document.getElementById('timeSpentModal').addEventListener('hidden.bs.modal', function () {
            if (timeSpentModalChart) {
                timeSpentModalChart.destroy();
                timeSpentModalChart = null;
            }
        });



        // Trip Types Chart Options (Line Chart)



        var tripTypesChartOptions = {
            series: [
                {
                    name: "Regular",
                    data: [0, 50, 188, 160, 140, 120, 100]
                },
                {
                    name: "Adhoc",
                    data: [20, 150, 120, 180, 200, 210, 230]
                },
                {
                    name: "Elite",
                    data: [60, 40, 90, 130, 250, 230, 150]
                }
            ],
            chart: {
                type: 'line',
                height: 350
            },
            stroke: {
                curve: 'smooth',
                width: 2
            },
            markers: {
                size: 5
            },
            xaxis: {
                categories: ["04-01-2025", "05-01-2025", "06-01-2025", "07-01-2025", "Yesterday", "Today"],
                labels: {
                    style: {
                        fontWeight: 'bold'
                    }
                }
            },
            yaxis: {
                min: 0,
                max: 250
            },
            colors: ['#B22222', '#4682B4', '#FFA500'], // Colors for Regular, Adhoc, Elite
            tooltip: {
                shared: true,
                intersect: false
            },
            legend: {
                position: 'bottom'
            },
            annotations: {
                xaxis: [
                    {
                        x: "06-01-2025",
                        borderColor: '#000',
                        strokeDashArray: 5,
                        label: {
                            text: "06 Jan",
                            borderColor: "#000",
                            style: {
                                color: "#fff",
                                background: "#000"
                            }
                        }
                    }
                ]
            },
            grid: {
                borderColor: '#E0E0E0',
                strokeDashArray: 4 // Dashed grid lines
            }
        };

        let tripTypesMainChart, tripTypesModalChart; // Store chart instances

        // Initialize chart on the main page
        document.addEventListener("DOMContentLoaded", function () {
            tripTypesMainChart = new ApexCharts(document.querySelector("#tripTypesMainChart"), tripTypesChartOptions);
            tripTypesMainChart.render();
        });

        // Event listener to initialize chart when modal opens
        document.getElementById('tripTypesModal').addEventListener('shown.bs.modal', function () {
            if (tripTypesModalChart) tripTypesModalChart.destroy(); // Destroy previous instance if exists

            tripTypesModalChart = new ApexCharts(document.querySelector("#tripTypesModalChart"), tripTypesChartOptions);
            tripTypesModalChart.render();
        });

        // Destroy chart when modal is closed
        document.getElementById('tripTypesModal').addEventListener('hidden.bs.modal', function () {
            if (tripTypesModalChart) {
                tripTypesModalChart.destroy();
                tripTypesModalChart = null;
            }
        });



        // Billing Fleet Chart Options (Bar Chart)


        var billingFleetChartOptions = {
            series: [{
                data: [70, 25, 5]  // Data values for Sedan, SUV, and Bus
            }],
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '40%',
                    borderRadius: 5
                }
            },
            colors: ['#ADD8E6'],  // Light blue bar color
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%";  // Display percentages on bars
                },
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    colors: ['#000']
                }
            },
            xaxis: {
                categories: ['Sedan', 'SUV', 'BUS'],
                labels: {
                    style: {
                        fontWeight: 'bold'
                    }
                }
            },
            yaxis: {
                min: 0,
                max: 100
            },
            grid: {
                borderColor: '#ccc',
                strokeDashArray: 5
            }
        };

        let billingFleetMainChart, billingFleetModalChart; // Store chart instances

        // Initialize chart on the main page
        document.addEventListener("DOMContentLoaded", function () {
            billingFleetMainChart = new ApexCharts(document.querySelector("#billingFleetMainChart"), billingFleetChartOptions);
            billingFleetMainChart.render();
        });

        // Event listener to initialize chart when modal opens
        document.getElementById('billingFleetModal').addEventListener('shown.bs.modal', function () {
            if (billingFleetModalChart) billingFleetModalChart.destroy(); // Destroy previous instance if exists

            billingFleetModalChart = new ApexCharts(document.querySelector("#billingFleetModalChart"), billingFleetChartOptions);
            billingFleetModalChart.render();
        });

        // Destroy chart when modal is closed
        document.getElementById('billingFleetModal').addEventListener('hidden.bs.modal', function () {
            if (billingFleetModalChart) {
                billingFleetModalChart.destroy();
                billingFleetModalChart = null;
            }
        });




        // Billing Projection Chart Options (Bubble Chart)



        var billingProjectionChartOptions = {
            series: [{
                name: 'Billing',
                data: [
                    { x: 'Aug 2024', y: 50, z: 20 },
                    { x: 'Sep 2024', y: 25, z: 5 },
                    { x: 'Oct 2024', y: 75, z: 10 },
                    { x: 'Nov 2024', y: 50, z: 15 },
                    { x: 'Dec 2024', y: 30, z: 5 },
                    { x: 'Jan 2025', y: 90, z: 25 },
                    { x: 'Next Month', y: 98, z: 20 }
                ]
            }],
            chart: {
                type: 'bubble',
                height: 350
            },
            colors: ['#FFD700'], // Yellow color for bubbles
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Next Month'],
                labels: { style: { fontWeight: 'bold' } }
            },
            yaxis: {
                min: 0,
                max: 125,
                labels: {
                    formatter: function (val) {
                        return val + (val >= 100 ? ' Cr' : ' L');
                    },
                    style: { fontWeight: 'bold' }
                }
            },
            grid: {
                borderColor: '#ccc',
                strokeDashArray: 5
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (val) {
                        return val + ' L';
                    }
                }
            },
            annotations: {
                xaxis: [{
                    x: 'Next Month',
                    borderColor: '#000',
                    label: {
                        borderColor: '#ccc',
                        style: {
                            color: '#000',
                            background: '#fff'
                        },
                        text: 'Next Month'
                    }
                }],
                yaxis: [{
                    y: 98,
                    label: {
                        borderColor: '#000',
                        style: {
                            color: '#000',
                            background: '#fff'
                        },
                        text: 'Billing : 98 L'
                    }
                }]
            }
        };

        let billingProjectionMainChart, billingProjectionModalChart; // Store chart instances

        // Initialize chart on the main page
        document.addEventListener("DOMContentLoaded", function () {
            billingProjectionMainChart = new ApexCharts(document.querySelector("#billingProjectionMainChart"), billingProjectionChartOptions);
            billingProjectionMainChart.render();
        });

        // Event listener to initialize chart when modal opens
        document.getElementById('billingProjectionModal').addEventListener('shown.bs.modal', function () {
            if (billingProjectionModalChart) billingProjectionModalChart.destroy(); // Destroy previous instance if exists

            billingProjectionModalChart = new ApexCharts(document.querySelector("#billingProjectionModalChart"), billingProjectionChartOptions);
            billingProjectionModalChart.render();
        });

        // Destroy chart when modal is closed
        document.getElementById('billingProjectionModal').addEventListener('hidden.bs.modal', function () {
            if (billingProjectionModalChart) {
                billingProjectionModalChart.destroy();
                billingProjectionModalChart = null;
            }
        });

// bubblechart

// Trips Projection Chart Options (Bubble Chart)

var tripsProjectionChartOptions = {
    series: [{
        name: 'Trips',
        data: [
            { x: 'Aug 2024', y: 4000, z: 20 },
            { x: 'Sep 2024', y: 2500, z: 5 },
            { x: 'Oct 2024', y: 6500, z: 10 },
            { x: 'Nov 2024', y: 5000, z: 15 },
            { x: 'Dec 2024', y: 3000, z: 5 },
            { x: 'Jan 2025', y: 7000, z: 25 },
            { x: 'Next Month', y: 7900, z: 20 }
        ]
    }],
    chart: {
        type: 'bubble',
        height: 350
    },
    colors: ['#008000'], // Green color for bubbles
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Next Month'],
        labels: { style: { fontWeight: 'bold' } }
    },
    yaxis: {
        min: 0,
        max: 10000,
        labels: {
            formatter: function (val) {
                return (val / 1000) + ' K';
            },
            style: { fontWeight: 'bold' }
        }
    },
    grid: {
        borderColor: '#ccc',
        strokeDashArray: 5
    },
    tooltip: {
        enabled: true,
        y: {
            formatter: function (val) {
                return val / 1000 + ' K';
            }
        }
    },
    annotations: {
        xaxis: [{
            x: 'Next Month',
            borderColor: '#000',
            label: {
                borderColor: '#ccc',
                style: {
                    color: '#000',
                    background: '#fff'
                },
                text: 'Next Month'
            }
        }],
        yaxis: [{
            y: 7900,
            label: {
                borderColor: '#000',
                style: {
                    color: '#000',
                    background: '#fff'
                },
                text: 'Trips : 7.9 K'
            }
        }]
    }
};

let tripsProjectionMainChart, tripsProjectionModalChart; // Store chart instances

// Initialize chart on the main page
document.addEventListener("DOMContentLoaded", function () {
    tripsProjectionMainChart = new ApexCharts(document.querySelector("#tripsProjectionMainChart"), tripsProjectionChartOptions);
    tripsProjectionMainChart.render();
});

// Event listener to initialize chart when modal opens
document.getElementById('tripsProjectionModal').addEventListener('shown.bs.modal', function () {
    if (tripsProjectionModalChart) tripsProjectionModalChart.destroy(); // Destroy previous instance if exists

    tripsProjectionModalChart = new ApexCharts(document.querySelector("#tripsProjectionModalChart"), tripsProjectionChartOptions);
    tripsProjectionModalChart.render();
});

// Destroy chart when modal is closed
document.getElementById('tripsProjectionModal').addEventListener('hidden.bs.modal', function () {
    if (tripsProjectionModalChart) {
        tripsProjectionModalChart.destroy();
        tripsProjectionModalChart = null;
    }
});









