import { Link } from "@mui/material";
import { Box, Typography, Avatar, Divider } from "@mui/material";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.backgroundContainer}>
      <div className={styles.footerContainer}>
        <Box className={styles.logo}>
          <Avatar
            alt="Logo do Site"
            src="/logo.png"
            sx={{ width: 40, height: 40, mr: "8px" }}
          />
          <Typography variant="h6" component="div">
            Nome do Site
          </Typography>
        </Box>

        <Divider
          orientation="horizontal"
          variant="large"
          flexItem
          sx={{ width: "20%", mb: "1.5rem" }}
        />

        <div className={styles.mainFooter}>
          <nav className={styles.navigation}>
            <Link className={styles.navigationLinks} href="/">
              Sobre o Projeto
            </Link>
            <Divider orientation="vertical" variant="large" flexItem />
            <Link className={styles.navigationLinks} href="/">
              Dê seu feedback
            </Link>
          </nav>

          <Divider orientation="vertical" variant="large" flexItem />

          <Box className={styles.contacts}>
            <Typography>Contatos:</Typography>
            <Typography>Email: contato@example.com</Typography>
          </Box>
        </div>

        <Box className={styles.endFooter}>
          <Typography variant="body2" component="p" sx={{ color: "gray" }}>
            © {new Date().getFullYear()} Nome do Projeto. Todos os direitos
            reservados.
          </Typography>
        </Box>
      </div>
    </footer>
  );
}

export default Footer;
