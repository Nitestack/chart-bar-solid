import type { ParentComponent } from "solid-js";

const RevenueCard: ParentComponent = () => {
    return (
        <div class="shadow-xl bg-transparent p-6 rounded-xl grid grid-cols-2">
            <div class="justify-self-start space-y-1">
                <p>Total this month</p>
                <p class="font-bold text-3xl"> ${478.33} </p>
            </div>
            <div class="justify-self-end p-2 text-right">
                <p class="font-bold">+{2.4}%</p>
                <p>from last month</p>
            </div>
        </div>
    );
};
export default RevenueCard;