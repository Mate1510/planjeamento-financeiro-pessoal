import { Card, CardContent, Typography, Divider } from "@mui/material";
import { TrendingUp, TrendingDown } from "@mui/icons-material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import styles from "../styles/Cards.module.css";

function Cards() {
  return (
    <div className={styles.cardsContainer}>
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <div className={styles.icon}>
            <CurrencyExchangeIcon sx={{ fontSize: "3rem" }} />
          </div>

          <Divider orientation="vertical" variant="middle" flexItem />

          <div className={styles.textCard}>
            <Typography variant="h5" component="h2" className={styles.titulo}>
              Saldo
            </Typography>
            <Typography variant="h4" component="p" className={styles.valor}>
              R$0,00
            </Typography>
          </div>
        </CardContent>
      </Card>

      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <div className={styles.icon}>
            <TrendingUp sx={{ fontSize: "3rem" }} />
          </div>

          <Divider orientation="vertical" variant="middle" flexItem />

          <div className={styles.textCard}>
            <Typography variant="h5" component="h2">
              Receitas
            </Typography>
            <Typography variant="h4" component="p">
              R$0,00
            </Typography>
          </div>
        </CardContent>
      </Card>

      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <div className={styles.icon}>
            <TrendingDown sx={{ fontSize: "3rem" }} />
          </div>

          <Divider orientation="vertical" variant="middle" flexItem />

          <div className={styles.textCard}>
            <Typography variant="h5" component="h2">
              Despesas
            </Typography>
            <Typography variant="h4" component="p">
              R$0,00
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cards;
