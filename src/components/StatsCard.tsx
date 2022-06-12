import type { ParentComponent } from "solid-js";
import Circles from "./Circles";

const StatsCard: ParentComponent<{ balanceCount: number; }> = (props) => {
    return (
        <div class="shadow-xl bg-custom-soft-red text-white p-6 rounded-xl grid grid-cols-2">
            <div class="space-y-1">
                <p>My balance</p>
                <p class="font-bold text-3xl"> ${props.balanceCount} </p>
            </div>
            <div class="p-2 flex items-center justify-end">
                <Circles />
            </div>
        </div>
    );
};

export default StatsCard;