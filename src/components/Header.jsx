export default function Header() {
  return (
    <div style={styles.nav}>
      <h2 style={{ color: "#1e40af" }}>JustWravel</h2>

      <div style={styles.menu}>
        <span>New Launches</span>
        <span>Backpacking Trips</span>
        <span>Best Sellers</span>
        <span>Biking Trips</span>
        <span>More</span>
      </div>

      <button style={styles.login}>Login</button>
    </div>
  );
}

const styles = {
  nav: {
    background: "#fff",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  },
  menu: {
    display: "flex",
    gap: "20px",
    fontWeight: 500
  },
  login: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px"
  }
};
