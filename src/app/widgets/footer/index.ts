import Footer from "@/app/widgets/footer/ui/Footer";
import {lazy} from "react";

export const AsyncFooter = lazy(() => import('./ui/Footer'));
export {Footer};