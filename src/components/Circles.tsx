import type { ParentComponent } from "solid-js";

const Circles: ParentComponent = () => {
    return (
        <div class="relative w-12 flex items-center justify-center">
            <div class="z-20 absolute rounded-full bg-transparent border-2 border-solid border-white w-8 h-8" />
            <div class="absolute rounded-full bg-black w-8 h-8 left-1/2" />
        </div>
    );
};
export default Circles;