var hourlyTraffic = document.getElementById('chart-traffic-hourly').getContext('2d');
var chartTrafficHourly = new Chart(hourlyTraffic, {
    type: 'line',
    data: {
        labels: ["1-3am", "3-5am", "5-7am", "7-9am", "9-11am", "11am-1pm", "1-3pm", "3-5pm", "5-7pm", "7-9pm", "9-11pm", "11pm-1am"],
        datasets: [{
            borderColor: '#d3c31a',
            data: [100, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 100],
            lineTension: 0,
            pointRadius: 3,
            pointHoverRadius: 5,
            pointBackgroundColor: 'white'
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var daylyTraffic1 = document.getElementById('chart-traffic-daily').getContext('2d');
var chartTrafficDaily = new Chart(daylyTraffic1, {
    type: 'line',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            borderColor: '#d3c31a',
            data: [200, 1250, 1000, 1500, 2000, 1500, 1750],
            lineTension: 0,
            pointRadius: 3,
            pointHoverRadius: 5,
            pointBackgroundColor: 'white'
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var weeklyTraffic = document.getElementById('chart-traffic-weekly').getContext('2d');
var chartTrafficWeekly = new Chart(weeklyTraffic, {
    type: 'line',
    data: {
        labels: [
            "cw01", "cw02", "cw03", "cw04", "cw05", "cw06", "cw07", "cw08", "cw09", "cw10",
            "cw11", "cw12", "cw13", "cw14", "cw15", "cw16", "cw17", "cw18", "cw19", "cw10",
            "cw21", "cw22", "cw23", "cw24", "cw25", "cw26", "cw27", "cw28", "cw29", "cw10",
            "cw31", "cw32", "cw33", "cw34", "cw35", "cw36", "cw37", "cw38", "cw39", "cw10",
            "cw41", "cw42", "cw43", "cw44", "cw45", "cw46", "cw47", "cw48", "cw49", "cw10",
            "cw51", "cw52"],
        datasets: [{
            borderColor: '#d3c31a',
            data: [
                300, 1250, 1200, 1500, 2000, 1500, 1750, 1250, 300, 700,
                300, 1250, 1000, 1500, 2000, 1500, 750, 1250, 300, 700,
                300, 1250, 3000, 3500, 2000, 1500, 1750, 1250, 300, 50,
                300, 1250, 1000, 1500, 2000, 2500, 1750, 250, 300, 2700,
                300, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 300, 1700,
                300, 1250],
            lineTension: 0,
            pointRadius: 3,
            pointHoverRadius: 5,
            pointBackgroundColor: 'white'
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var monthlyTraffic = document.getElementById('chart-traffic-monthly').getContext('2d');
var chartTrafficMonthly = new Chart(monthlyTraffic, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [{
            borderColor: '#d3c31a',
            data: [400, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250, 1750],
            lineTension: 0,
            pointRadius: 3,
            pointHoverRadius: 5,
            pointBackgroundColor: 'white'
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var dailyTraffic = document.getElementById('chart-daily-traffic').getContext('2d');
var chartDailyTraffic = new Chart(dailyTraffic, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            backgroundColor: '#006880',
            data: [75, 100, 175, 125, 225, 200, 100]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        }
    }
});

var mobileUsers = document.getElementById('chart-mobile-users').getContext('2d');
var chartTraffic = new Chart(mobileUsers, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            label: false,
            data: [250, 150, 1000],
            backgroundColor: [
                '#d3c31a',
                '#006880',
                '#dc3a3e'
            ],
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: 'right'
        }
    }
});