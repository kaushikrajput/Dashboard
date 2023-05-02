import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  ordersData,
  contextMenuItems,
  ordersGrid,
  gridOrderImage,
} from "../data/dummy";
import { Header } from "../components";

const Orders = () => {
  const columns = ordersGrid.map((items) => {
    return items;
  });
  const rows = ordersData.map((items) => {
    return items;
  });

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <DataGrid
        columns={columns}
        rows={rows}
        getRowId={(row) => row.OrderID}
      />
    </div>
  );
};

export default Orders;
