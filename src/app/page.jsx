import Herosection from "../components/home/herosection";
import Services from "../components/home/services";
import Testimonial from "../components/global/testimonial";
import Ourmission from "../components/home/ourmission";

import Industries from "../components/home/industries";
import Capabilities from "../components/home/capabilities";
import ValuePropositions from "../components/home/value-propositions";
import AboutBrand from "../components/home/aboutBrand";
import FunFactCounter from "../components/global/funfactcouter";

export default function Home() {
    return (
        <>
            {/*<Herosection />*/}
            {/*<Services />*/}
            {/*<Testimonial />*/}
            <Herosection/>
            <ValuePropositions />
            <Capabilities/>
            <Ourmission  />
            <Industries/>

            <FunFactCounter
                gap={true}
                color={false}
                heading="Fun Facts"
                counters={[
                    { value: 199 },
                    { value: 575 },
                    { value: 69 },
                ]}
                counterDetails={[
                    "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.",
                    "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.",
                    "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.",
                ]}
            />
            <Testimonial />
            <AboutBrand />
            {/*<Enterprise />*/}
            {/*<Herosection />*/}
            {/*<Services />*/}
            {/*<Testimonial />*/}
        </>
    );
}
