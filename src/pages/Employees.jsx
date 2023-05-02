import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  const columns = employeesGrid.map((items) => {
    return items;
  });
  const rows = employeesData.map((items) => {
    return items;
  });
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <DataGrid
        columns={columns}
        rows={rows}
        getRowId={(row) => row.EmployeeID}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </div>
  );
};

export default Employees;
