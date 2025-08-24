import Header from "@/app/widgets/header/ui/Header"
import {lazy} from "react";

export const AsyncHeader = lazy(() => import('./ui/Header'));
export {Header};