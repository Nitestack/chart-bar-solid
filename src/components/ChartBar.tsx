import type { ParentComponent, ComponentProps } from "solid-js";
import SolidChart from "solid-chart.js";
import colors from "../../colors.json";

import type { ChartConfiguration } from "chart.js";

type SolidChartProps = ChartConfiguration & {
    canvasOptions?: ComponentProps<"canvas">;
};

export interface ChartBarProps {
    days: Array<string>;
    amount: Array<number>;
};

const ChartBar: ParentComponent<ChartBarProps> = (props) => {
    const chartProps: SolidChartProps = {
        type: "bar",
        data: {
            labels: props.days,
            datasets: [
                {
                    label: "Spending - Last 7 days",
                    data: props.amount,
                    hoverBackgroundColor: colors["custom-cyan"],
                    backgroundColor: colors["custom-soft-red"]
                }
            ]
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    };
    return (
        <SolidChart {...chartProps} canvasOptions={{}} />
    );
};
export default ChartBar;