import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import styles from "../styles/Estatisticas.module.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const chartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
};

const receitasDespesasPorCategoriaData = {
  labels: ["Alimentação", "Transporte", "Lazer", "Educação", "Outros"],
  datasets: [
    {
      data: [200, 150, 100, 75, 50],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
    },
  ],
};

const receitasDespesasAoLongoDosMesesData = {
  labels: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  datasets: [
    {
      label: "Receitas",
      data: [1200, 1200, 1200, 1200, 1200, 1800, 1800, 1800, 1800, 1800, 1800, 2000],
      borderColor: "#36A2EB",
      fill: false,
    },
    {
      label: "Despesas",
      data: [900, 800, 1500, 600, 1200, 2000, 500, 600, 800, 900, 900, 1000],
      borderColor: "#FF6384",
      fill: false,
    },
  ],
};

function Estatisticas() {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.sectionContainer}>
        <header className={styles.header}>
          <Typography variant="h4" component="h2" className={styles.title}>
            Estatísticas
          </Typography>
        </header>

        <div className={styles.cardsContainer}>
          <Card className={styles.card}>
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                Receitas por Categoria
              </Typography>
              <div className={styles.chartContainer}>
                <Doughnut
                  data={receitasDespesasPorCategoriaData}
                  options={chartOptions}
                />
              </div>
            </CardContent>
          </Card>

          <Card className={styles.card}>
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                Despesas por Categoria
              </Typography>
              <div className={styles.chartContainer}>
                <Doughnut
                  data={receitasDespesasPorCategoriaData}
                  options={chartOptions}
                />
              </div>
            </CardContent>
          </Card>

          <Card className={styles.biggerCard}>
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                Receitas e Despesas ao Longo dos Meses
              </Typography>
              <div className={styles.biggerChartContainer}>
                <Line
                  data={receitasDespesasAoLongoDosMesesData}
                  options={chartOptions}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Estatisticas;
