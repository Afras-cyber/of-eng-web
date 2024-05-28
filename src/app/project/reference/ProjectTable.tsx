"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

interface Column {
  id: "name" | "place" | "activity" | "client";
  label: string;
  minWidth?: number;
  align?: "left";
  format?: (value: number) => string;
}
interface Data {
  name: string;
  place: string;
  activity: string;
  client: string;
}
const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 100 },
  { id: "place", label: "Place", minWidth: 100 },
  {
    id: "activity",
    label: "Activity",
    minWidth: 170,
    align: "left",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "client",
    label: "Client",
    minWidth: 170,
    align: "left",
    // format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(
  name: string,
  place: string,
  activity: string,
  client: string
): Data {
  return { name, place, activity, client };
}

const rows = [
  createData(
    "Indoor air searches in stock",
    "Bad Salzuflen",
    `sampling, Risk estimate, Building pollutant Cadastre  Demolition planning/-documentation`,
    `VMC, Bad Salzuflen`
  ),
  createData(
    `Dismantling a Textile factory`,
    "Beverungen",
    ` Expert accompaniment Specialist management SiGe coordination ,Geotechnical engineering/ sampling Risk`,
    `LEG NRW, Bielefeld`
  ),
  createData(
    "Indoor air searches in stock",
    "Bad Salzuflen",
    `sampling, Risk estimate, Building pollutant Cadastre  Demolition planning/-documentation`,
    `VMC, Bad Salzuflen`
  ),
  createData(
    `Dismantling a Textile factory`,
    "Beverungen",
    ` Expert accompaniment Specialist management SiGe coordination ,Geotechnical engineering/ sampling Risk`,
    `LEG NRW, Bielefeld`
  ),
  createData(
    "Indoor air searches in stock",
    "Bad Salzuflen",
    `sampling, Risk estimate, Building pollutant Cadastre  Demolition planning/-documentation`,
    `VMC, Bad Salzuflen`
  ),
  createData(
    `Dismantling a Textile factory`,
    "Beverungen",
    ` Expert accompaniment Specialist management SiGe coordination ,Geotechnical engineering/ sampling Risk`,
    `LEG NRW, Bielefeld`
  ),
  createData(
    "Indoor air searches in stock",
    "Bad Salzuflen",
    `sampling, Risk estimate, Building pollutant Cadastre  Demolition planning/-documentation`,
    `VMC, Bad Salzuflen`
  ),
  createData(
    `Dismantling a Textile factory`,
    "Beverungen",
    ` Expert accompaniment Specialist management SiGe coordination ,Geotechnical engineering/ sampling Risk`,
    `LEG NRW, Bielefeld`
  ),
  createData(
    "Indoor air searches in stock",
    "Bad Salzuflen",
    `sampling, Risk estimate, Building pollutant Cadastre  Demolition planning/-documentation`,
    `VMC, Bad Salzuflen`
  ),
  createData(
    `Dismantling a Textile factory`,
    "Beverungen",
    ` Expert accompaniment Specialist management SiGe coordination ,Geotechnical engineering/ sampling Risk`,
    `LEG NRW, Bielefeld`
  ),
];

export default function ProjectTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
