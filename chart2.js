const ctx2 = document.getElementById("doughnut");

new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: [
      "Groceries",
      "Food",
      "Loan repayment",
      "Education",
      "Entertainment",
      "UBER",
    ],
    datasets: [
      {
        label: "# Category",
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
