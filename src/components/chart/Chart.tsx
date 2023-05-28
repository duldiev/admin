import { useEffect, useState } from "react";
import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = (props: { aspect: any, title: any, totals: any[] }) => {
  const [data, setData] = useState([
    { name: "December", total: 0 },
    { name: "January", total: 0 },
    { name: "February", total: 0 },
    { name: "March", total: 0 },
    { name: "April", total: 0 },
    { name: "May", total: 0 },
  ]);

  useEffect(() => {
    if (props.totals && props.totals.length > 0) {
      var tempData: any[] = data
      props.totals.map((month: any, index: number) => {
        if (month[Object.keys(month)[0] as string]['total_price__sum']) {
          let tempTotal = month[Object.keys(month)[0] as string]['total_price__sum'];
          tempData[index].total = tempTotal;
        }
      });
      setData(tempData);
    }
  }, [props.totals]);

  return (
    <div className="chart">
      <div className="title">{props.title}</div>
      <ResponsiveContainer width="100%" aspect={props.aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
