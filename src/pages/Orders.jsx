import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Card } from "@mui/material";
import { ordersGrid, ordersData } from "../data/dummy";
import { Header } from "../components";
import TablePagination from '@mui/material/TablePagination';

const Orders = () => {
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
      <Header category="Page" title="Orders" />
      <Card>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Total Ammount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>OrderID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ordersData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.OrderID}>
                    <TableCell>
                      <Avatar src={row.ProductImage}></Avatar>
                    </TableCell>
                    <TableCell>{row.OrderItems}</TableCell>
                    <TableCell>{row.CustomerName}</TableCell>
                    <TableCell>{row.TotalAmount}</TableCell>
                    <TableCell>{row.Status}</TableCell>
                    <TableCell>{row.OrderID}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={ordersData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </div>
  );
};

export default Orders;
