import "./Sidebar.css";

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
    "Photography Tours",
    "Adventure Sports",
    "Family Vacations",
    "Corporate Offsites",
    "Solo Travel",
    "Cultural Immersion",
  ];

  return (
    <aside className="sidebar">
      <h4>Select from our tours</h4>

      {filters.map((item, i) => (
        <label key={i} className="sidebar-label">
          <input type="checkbox" /> {item}
        </label>
      ))}
    </aside>
  );
}
