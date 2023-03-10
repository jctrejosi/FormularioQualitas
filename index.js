var ctx = document.querySelectorAll('.chart');

ctx.forEach((e) => {
  var newCtx = e.getContext("2d");

  var percent = Number(e.dataset.percent)
  var remnant = 100 - Number(e.dataset.percent)

  new Chart(newCtx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [percent, remnant],
        backgroundColor: [
          '#5980c9',
          '#c5c5c5'
        ],
        borderColor: [
          'transparent'
        ]
      }],
    },
    options: {
      cutoutPercentage: 90
    }
  });
})
