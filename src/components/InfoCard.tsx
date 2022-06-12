import type { ParentComponent } from "solid-js";
import ChartBar, { ChartBarProps } from "./ChartBar";

const InfoCard: ParentComponent<ChartBarProps> = (props) => {
    return (
        <div class="shadow-xl bg-transparent p-6 rounded-xl flex items-center justify-center">
            <div>
                <p class="text-3xl font-bold"> Spending - Last 7 days </p>
                <ChartBar {...props} />
            </div>
        </div>
    );
};
export default InfoCard;