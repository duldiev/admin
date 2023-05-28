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

  useEffect(() => {
    let tempOrders: any = orders
    http.get("/api/order").then((res) => {
      if (res.status == 200) {
        tempOrders = res.data.map((e: any, index: number) => {
          e["created_date"] = dayjs(e["created_date"]).format("DD.MM.YYYY, hh:mm");
          return e;
        })
      }
    }).finally(() => {
      setOrders(tempOrders);
    });
  }, []);

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
          {orders.map((row: any, index: number) => (
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
