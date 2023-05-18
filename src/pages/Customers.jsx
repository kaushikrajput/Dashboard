import React from "react";
import { Header } from "../components";
import { customersData, customersGrid } from "../data/dummy";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Card, TablePagination } from "@mui/material";

const Customers = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <Card>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Project Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Weeks</TableCell>
                <TableCell>Budget</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customersData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row.CustomerID}>
                  <TableCell>
                    <Avatar src={row.CustomerImage}></Avatar>
                    {row.CustomerName}
                  </TableCell>
                  <TableCell>{row.ProjectName}</TableCell>
                  <TableCell>{row.Status}</TableCell>
                  <TableCell>{row.Weeks}</TableCell>
                  <TableCell>{row.Budget}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={customersData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </div>
  );
};

export default Customers;
