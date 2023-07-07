import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import styles from "../styles/MonthTables.module.css";

const createData = (category, value) => {
  return { category, value };
};

const rowsRevenues = [
  createData("Salário", 2500),
  createData("Freelancer", 600),
  createData("Renda Extra", 200),
];

const rowsExpenses = [
  createData("Aluguel", 800),
  createData("Compras", 350),
  createData("Transporte", 100),
];

export default function MonthTables() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.header}>
        <Typography variant="h4" component="h2" className={styles.title}>Maio</Typography>
      </div>

      <div className={styles.sectionTableContainer}>
        <TableContainer component={Paper} className={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Receitas</TableCell>
                <TableCell align="right">Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsRevenues.map((row) => (
                <TableRow key={row.category}>
                  <TableCell component="th" scope="row">
                    {row.category}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell component="th" scope="row">
                  Total
                </TableCell>
                <TableCell align="right">
                  {rowsRevenues.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.value,
                    0
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>


        <TableContainer component={Paper} className={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Despesas</TableCell>
                <TableCell align="right">Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsExpenses.map((row) => (
                <TableRow key={row.category}>
                  <TableCell component="th" scope="row">
                    {row.category}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell component="th" scope="row">
                  Total
                </TableCell>
                <TableCell align="right">
                  {rowsExpenses.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.value,
                    0
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
