import InfoCard from "./components/InfoCard";
import StatsCard from "./components/StatsCard";
import data from "./data.json";
import RevenueCard from "./components/RevenueStats";

const BALANCE_COUNT = data.reduce((prevValue, currentValue) => prevValue + currentValue.amount, 0);

function App() {
    return (
        <div class="App bg-custom-cream">
            <div class="flex items-center justify-center min-h-screen w-full p-5 sm:p-10 lg:p-14">
                <div class="space-y-4">
                    <StatsCard balanceCount={BALANCE_COUNT} />
                    <InfoCard
                        amount={data.map(element => element.amount)}
                        days={data.map(element => element.day)}
                    />
                    <RevenueCard />
                </div>
            </div>
        </div>
    );
}

export default App;