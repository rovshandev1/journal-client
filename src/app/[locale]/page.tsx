import {Banner, CallForPapers, Hero, FAQ} from "@/app/pages/home";
import LatestIssuesCarousel from "../pages/home/ui/LatestIssuesCarousel";


export default function Home() {
    return (
        <div>
            <Banner/>
            <Hero/>
            <CallForPapers/>
            <LatestIssuesCarousel/>
            <FAQ/>
        </div>
    );
}
