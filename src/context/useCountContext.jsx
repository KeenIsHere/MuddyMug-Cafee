import { useContext } from "react";
import { CountContext } from "./CountContext";

export default function useCountContext() {
    return useContext(CountContext);
}