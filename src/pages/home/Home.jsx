import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import http from "../../services/HttpService";

const Home = () => {
  const [userCount, setUserCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [incomes, setIncomes] = useState({});

  useEffect(() => {
    http.get("/auth/users").then((res) => {
      setUserCount(res.data.length);
    });

    http.get("/api/order").then((res) => {
      setOrderCount(res.data.length);
    });

    http.get("/api/admin/get-incomes").then((res) => {
      if (res.status == 200) {
        setIncomes(res.data);
      }
    });
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" amount={userCount} />
          <Widget type="order" amount={orderCount} />
          <Widget type="earning" amount={incomes["all_earning"]} />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured todayEarning={incomes["today_earning"]} />
          <Chart
            title="Last 6 Months (Revenue)"
            aspect={2 / 1}
            totals={incomes.months}
          />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
