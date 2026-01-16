export default function Sidebar() {
  const filters = [
    "Republic Day",
    "New Launches",
    "Backpacking Trips",
    "Himalayan Treks",
    "Best Sellers",
    "Upcoming Trips",
    "International Trips",
    "Biking",
    "All Girls Trips",
    "Weekend Getaways",
    "Backpacking Trips",
    "Himalayan Treks",
    "Biking (Motorbike Tours)",
    "Photography Tours",
    "Adventure Sports",
    "Family Vacations",
    "Corporate Offsites",
    "Solo Travel",
    "Cultural Immersion",
    "Biking",
    "All Girls Trips",
    "Weekend Getaways",
    "Backpacking Trips",
    "Himalayan Treks",


  ];

  return (
    <div style={styles.sidebar}>
      <h4>Select from our tours</h4>

      {filters.map((item, i) => (
        <label key={i} style={styles.label}>
          <input type="checkbox" /> {item}
        </label>
      ))}
    </div>
  );
}

const styles = {
  sidebar: {
    width: "260px",
    background: "#fff",
    padding: "9px",
    borderRadius: "10px",
    height: "fit-content"
  },
  label: {
    display: "block",
    margin: "10px 0",
    fontSize: "14px"
  }
};
