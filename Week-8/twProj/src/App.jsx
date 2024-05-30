import { BlueCard } from "./components/BlueCard";
import { RevenueCard } from "./components/RevenueCard";

function App() {
  return (
    <div className="flex flex-wrap">
      <BlueCard title={"Next Payout"} amount={"₹2,312.23"} orderCount={23} />
      <RevenueCard
        title={"Amount Pending"}
        amount={"₹92,312.20"}
        orderCount={13}
      />
      <RevenueCard title={"Amount Processed"} amount={"₹23,92,312.19"} />
    </div>
  );
}

export default App;
