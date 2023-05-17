import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Card, TablePagination } from "@mui/material";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = [],
  } = props;

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <Card>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>EmployeeID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>HireDate</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>ReportsTo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employeesData.map((row) => (
                <TableRow key={row.EmployeeID}>
                  <TableCell>
                    <Avatar src={row.EmployeeImage}></Avatar>
                  </TableCell>
                  <TableCell>{row.Name}</TableCell>
                  <TableCell>{row.Designation}</TableCell>
                  <TableCell>{row.HireDate}</TableCell>
                  <TableCell>{row.Country}</TableCell>
                  <TableCell>{row.ReportsTo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={count}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
    </div>
  );
};

export default Employees;
