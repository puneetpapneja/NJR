import Box from "./box";

function Dashboard(){
  return(
    <>
    <h1 style={{textAlign:"center"}}>Dashboard</h1>
    < div className="dash_box">
      
            <Box title="7" content="Applied Job's"   backgroundColor="red" />
        <Box title="40" content="Total Post "  backgroundColor="green"/>
        <Box title="2" content="Today's Post's "  backgroundColor="purple"/>
    </div>
    </>
  );
}
export  default Dashboard;