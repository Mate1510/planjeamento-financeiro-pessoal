import { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  Select,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styles from "../styles/AddFinancas.module.css";

function AddFinancas() {
  const [transactionValue, setTransactionValue] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [categorias, setCategorias] = useState("");

  const handleChange = (event) => {};

  const handleSubmit = (event) => {
    event.preventDefault();
    // Código para adicionar a transação financeira
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputContainer}>
      <div>
        <FormControl sx={{ borderRadius: "5px", my: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Valor"
            value={transactionValue}
            onChange={(event) => setTransactionValue(event.target.value)}
          />
        </FormControl>
      </div>

      <div className={styles.middleForm}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={transactionDate}
            onChange={(event) => setTransactionDate(event.target.value)}
            sx={{ mr: 2, my: 1, width: 170, minWidth: 100 }}
          />
        </LocalizationProvider>

        <FormControl sx={{ mr: 2, my: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Transação
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={transactionType}
            onChange={(event) => setTransactionType(event.target.value)}
            autoWidth
            label="Transação"
          >
            <MenuItem value="">
              <em>Vazio</em>
            </MenuItem>
            <MenuItem value={1}>Receita</MenuItem>
            <MenuItem value={2}>Despesa</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ mr: 2, my: 1, minWidth: 140 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Categorias
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={categorias}
            onChange={(event) => setCategorias(event.target.value)}
            autoWidth
            label="Categorias"
          >
            <MenuItem value="">
              <em>Vazio</em>
            </MenuItem>
            <MenuItem value={1}>Casa</MenuItem>
            <MenuItem value={2}>Lazer</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ minwidth: 100, width: 150, height: 45, my: 1, mx: 2 }}
        >
          Adicionar
        </Button>
      </div>
    </form>
  );
}

export default AddFinancas;
