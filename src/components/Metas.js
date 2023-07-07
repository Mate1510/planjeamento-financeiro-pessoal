import {
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import LinearProgressWithLabel from "./LinearProgressWithLabel";
import { Add, Edit, Delete } from "@mui/icons-material";
import styles from "../styles/Metas.module.css";
import { red } from "@mui/material/colors";

function Metas() {
  return (
    <div className={styles.metasContainer}>
      <Typography variant="h4" component="h2" className={styles.title}>
        Metas
      </Typography>

      <div className={styles.cardsContainer}>
        <Card className={styles.card}>
          <CardContent className={styles.newMeta}>
            <Typography
              variant="h5"
              component="h2"
              className={styles.metaTitle}
            >
              Criar nova meta
            </Typography>

            <IconButton color="primary" aria-label="Adicionar meta">
              <Add fontSize="large" />
            </IconButton>
          </CardContent>
        </Card>

        <Card className={styles.card}>
          <CardContent className={styles.cardContent}>
            <div className={styles.metaHeader}>
              <Typography
                variant="h5"
                component="h2"
                className={styles.metaTitle}
              >
                Novo Carro
              </Typography>

              <div className={styles.metaOptions}>
                <IconButton color="primary" aria-label="Editar meta">
                  <Edit />
                </IconButton>
                <IconButton color="secondary" aria-label="Excluir meta">
                  <Delete />
                </IconButton>
              </div>
            </div>

            <Typography variant="h6" component="p" className={styles.metaValue}>
              Valor final: R$100.000,00
            </Typography>

            <Typography variant="h6" component="p" className={styles.metaValue}>
              Valor atual: R$60.000,00
            </Typography>

            <LinearProgressWithLabel
              value={60}
              className={styles.progressBar}
            />

            <Typography
              variant="body2"
              component="p"
              className={styles.metaDate}
            >
              Data final: 31/12/2023
            </Typography>
          </CardContent>
        </Card>

        <Card className={styles.card}>
          <CardContent className={styles.cardContent}>
            <div className={styles.metaHeader}>
              <Typography
                variant="h5"
                component="h2"
                className={styles.metaTitle}
              >
                Nova Casa
              </Typography>

              <div className={styles.metaOptions}>
                <IconButton color="primary" aria-label="Editar meta">
                  <Edit />
                </IconButton>
                <IconButton color="secondary" aria-label="Excluir meta">
                  <Delete />
                </IconButton>
              </div>
            </div>

            <Typography variant="h6" component="p" className={styles.metaValue}>
              Valor final: R$600.000,00
            </Typography>

            <Typography variant="h6" component="p" className={styles.metaValue}>
              Valor atual: R$60.000,00
            </Typography>

            <LinearProgressWithLabel
              value={10}
              className={styles.progressBar}
            />

            <Typography
              variant="body2"
              component="p"
              className={styles.metaDate}
            >
              Data final: 31/12/2023
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Metas;
