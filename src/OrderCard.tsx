import { ReactElement } from "react";
import "./OrderCard.css";
import heroImage from "./assets/images/illustration-hero.svg";
import musicIcon from "./assets/images/icon-music.svg";


export interface OrderCardProps {
}

export function OrderCard(props: OrderCardProps): ReactElement {
    return (
        <div className="OrderCard">
            <img alt="hero" src={heroImage} className="order__card-img"></img>
            <div className="order__card-contents-container">
                <h1>Order Summary</h1>
                <p>You can now listen to millions of songs, audiobooks, and podcasts on any
                    device anywhere you like!</p>
                <div className="annual__plan-container">
                    <img src={musicIcon} alt="music"></img>
                    <h6>Annual Plan
                        <span>$59.99/year</span>
                    </h6>
                    <a href="./">change</a>
                </div>

                <button className="order__card-button-1">Proceed to Payment
                </button>
                <button className="order__card-button-2">Cancel Order</button>
            </div>
        </div>
    );
}
