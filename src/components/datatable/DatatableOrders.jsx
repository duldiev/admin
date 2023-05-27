import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { orderColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import http from "../../services/HttpService";
import dayjs from "dayjs";

const DatatableOrders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    http.get("/api/order").then((res) => {
      if (res.status == 200) {
        setData(
          res.data.map((e) => {
            e["created_date"] = dayjs(e["created_date"]).format("DD.MM.YYYY");
            return e;
          })
        );
      }
    });
  }, []);

  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={orderColumns}
        pageSize={1}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DatatableOrders;
