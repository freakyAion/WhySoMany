import { createStore, createEvent } from "effector";

export const $counter = createStore<number>(0);
export const increase = createEvent();
export const decrease = createEvent();

$counter.on(increase, (state) => state + 1);
$counter.on(decrease, (state) => state - 1);