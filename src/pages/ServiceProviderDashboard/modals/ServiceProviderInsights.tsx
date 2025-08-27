import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ServiceProviderInsights = () => {

  // Sample data for the chart
  const chartData = [
    { date: "May 20", value: 45 },
    { date: "May 21", value: 48 },
    { date: "May 22", value: 50 },
    { date: "May 23", value: 52 },
    { date: "May 24", value: 55 },
    { date: "May 26", value: 53 },
    { date: "May 27", value: 58 },
    { date: "May 28", value: 62 },
    { date: "May 29", value: 59 },
    { date: "May 29", value: 65 },
    { date: "May 30", value: 70 },
  ];

  const statsCards = [
    {
      title: "Total Revenue",
      value: "$45,620",
      icon: "💰",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
    {
      title: "Total Orders",
      value: "1,245",
      icon: "📋",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
    {
      title: "Active Bookings",
      value: "15",
      icon: "📅",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
    {
      title: "My Products",
      value: "32",
      icon: "📦",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
    {
      title: "My Services",
      value: "12",
      icon: "🔧",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
  ];

  // Chart.js config
  const data = {
    labels: chartData.map((d) => d.date),
    datasets: [
      {
        label: "Orders",
        data: chartData.map((d) => d.value),
        borderColor: "#EAB308",
        backgroundColor: "#EAB308",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: chartData.map((d) => (d.date === "May 27" ? 6 : 0)),
        pointBackgroundColor: chartData.map((d) =>
          d.date === "May 27" ? "#EAB308" : "transparent"
        ),
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: any) => `Orders: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#6B7280", font: { size: 12 } },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#6B7280", font: { size: 12 } },
        min: 0,
        max: 100,
        stepSize: 25,
        grid: { color: "#E5E7EB" },
      },
    },
  };

  return (
      <>
<div className="bg-white p-6 m-4 border rounded-xl border-gray-100">
  {/* Header */}
  <div>
    <h1 className="text-2xl font-semibold text-black mb-2">Insights</h1>
    <p className="text-[#83898F] mb-8">
     Get a quick overview of your store’s performance with data on sales, bookings and other.
    </p>
  </div>
      <div className="space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {statsCards.map((card, index) => (
            <div
              key={index}
              className={`p-3 rounded-xl border border-gray-200`}
            >
              <div className="flex items-center space-x-3">
                <div className="p-4 rounded-lg flex items-start justify-center bg-[#FEF6D5]">
                  <span className="text-xl">{card.icon}</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">
                    {card.title}
                  </p>
                  <p className={`text-lg font-bold text-black`}>
                    {card.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Orders Chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Orders</h2>
            <div className="relative">
              <button
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 focus:outline-none"
                onClick={() => {
                  /* Handle dropdown */
                }}
              >

              </button>
            </div>
          </div>

          <div className="h-80">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ServiceProviderInsights
