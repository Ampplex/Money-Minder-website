const ctx = document.getElementById("barchart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "December",
      "October",
      "August",
      "February",
      "January",
      "December",
    ],
    datasets: [
      {
        label: "Month",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
