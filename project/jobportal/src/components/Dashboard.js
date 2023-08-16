import Box from "./box";

function Dashboard() {
  return (
    <div className="dash_box">
      <h1> Dashboard</h1>

      <Box title="7" content="Applied" backgroundColor="red" />
      <Box title="40" content="Total Post " backgroundColor="green" />
      <Box title="2" content="Today Post " backgroundColor="purple" />
    </div>
  );
}
export default Dashboard;
