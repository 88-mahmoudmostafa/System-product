import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "يناير", sales: 4000, purchases: 2400 },
  { name: "فبراير", sales: 3000, purchases: 1398 },
  { name: "مارس", sales: 5000, purchases: 2800 },
  { name: "أبريل", sales: 4780, purchases: 3908 },
  { name: "مايو", sales: 5890, purchases: 4800 },
  { name: "يونيو", sales: 6390, purchases: 3800 },
];

export default function Example() {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="sales"
            name="المبيعات"
            stroke="#8884d8"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="purchases"
            name="المشتريات"
            stroke="#82ca9d"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
