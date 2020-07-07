import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Bestlap from "./Bestlap";
import Bestsmartp from "./Bestsmartp";
import Promotion from "./Promotion";

export default function Baitapchialayout() {
    return (
        <div>
            <Header />
            <Carousel />
            <Bestsmartp />
            <Bestlap />
            <div class="container">
                <Promotion />

            </div>

        </div>
    )
}