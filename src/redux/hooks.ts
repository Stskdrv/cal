import { TypedUseSelectorHook, useSelector as untypedUSeSelector,} from "react-redux";
import { RootState } from "./store";


export const useSelector: TypedUseSelectorHook<RootState> = untypedUSeSelector;