import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import http from "../../services/HttpService";
import dayjs from "dayjs";

const List = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let tempOrders: any = orders
    http.get("/api/order").then((res) => {
      if (res.status == 200) {
        tempOrders = res.data.map((e: any, index: number) => {
          e["created_date"] = dayjs(e["created_date"]).format("DD.MM.YYYY, hh:mm");
          return e;
        })
      }
    }).finally(() => {
      setLoading(false)
      setOrders(tempOrders);
    });
  }, []);

  const rows = [
    {
      id: 1143155,
      product: "Arabica coffee beans",
      img: "https://www.nescafe.com/mena/sites/default/files/arabica-coffee-beans-thumbnail-desktop.jpg",
      customer: "Yelzhas Abdikali",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!loading && orders.map((row: any, index: number) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row['product_name']}</TableCell>
              <TableCell className="tableCell">{row['created_date']}</TableCell>
              <TableCell className="tableCell">{row.count}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
