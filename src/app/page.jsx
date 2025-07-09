import Herosection from "../components/home/herosection";
import Services from "../components/home/services";
import Testimonial from "../components/global/testimonial";
import Ourmission from "../components/home/ourmission";

import Industries from "../components/home/industries";
import Capabilities from "../components/home/capabilities";
import ValuePropositions from "../components/home/value-propositions";
import AboutBrand from "../components/home/aboutBrand";
import FunFactCounter from "../components/global/funfactcouter";
import Clients from "@/components/about/clients";

export default function Home() {
    return (
        <>
            {/*<Herosection />*/}
            {/*<Services />*/}
            {/*<Testimonial />*/}
            <Herosection/>
            <ValuePropositions />
            <Capabilities/>
            <FunFactCounter
                gap={true}
                color={false}
                heading="Fun Facts"
                counters={[
                    { value: 100 },
                    { value: 160 },
                    { value: 30 },
                    { value: 9300 },
                ]}
                counterDetails={[
                    "Happy Clients",
                    "Projects",
                    "In-house specialists",
                    "Hours Spent",
                ]}
            />
            <Ourmission  />
            <Industries/>

            <Testimonial />
            <Clients />
            {/*<AboutBrand />*/}
            {/*<Enterprise />*/}
            {/*<Herosection />*/}
            {/*<Services />*/}
            {/*<Testimonial />*/}
        </>
    );
}
