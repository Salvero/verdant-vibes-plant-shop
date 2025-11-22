import React from 'react';
import { Sun, Droplets, Thermometer, Scissors, Bug, Sprout } from 'lucide-react';

export const Care: React.FC = () => {
    const careTips = [
        {
            icon: <Sun size={32} />,
            title: "Light",
            description: "Most indoor plants prefer bright, indirect light. Avoid direct midday sun which can scorch leaves. Low light doesn't mean no light!"
        },
        {
            icon: <Droplets size={32} />,
            title: "Watering",
            description: "Overwatering is the #1 killer of houseplants. Always check the soil moisture before watering. When in doubt, let it dry out."
        },
        {
            icon: <Thermometer size={32} />,
            title: "Temperature & Humidity",
            description: "Keep plants away from drafts, heaters, and AC vents. Most tropical plants enjoy higher humidity - consider a humidifier or pebble tray."
        },
        {
            icon: <Scissors size={32} />,
            title: "Pruning",
            description: "Remove dead or yellowing leaves to encourage new growth. Pruning also helps maintain the shape and size of your plant."
        },
        {
            icon: <Bug size={32} />,
            title: "Pest Control",
            description: "Inspect leaves regularly for pests. Wipe leaves with a damp cloth to keep them dust-free and healthy."
        },
        {
            icon: <Sprout size={32} />,
            title: "Fertilizing",
            description: "Feed your plants during the growing season (spring/summer). Reduce or stop fertilizing in winter when growth slows."
        }
    ];

    return (
        <div className="care-page container">
            <div className="care-header">
                <h1>Plant Care Guide</h1>
                <p>Everything you need to know to keep your green friends happy and thriving.</p>
            </div>

            <div className="care-grid">
                {careTips.map((tip, index) => (
                    <div key={index} className="care-card">
                        <div className="care-card-icon">
                            {tip.icon}
                        </div>
                        <h3>{tip.title}</h3>
                        <p>{tip.description}</p>
                    </div>
                ))}
            </div>

            <div className="care-faq">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-item">
                    <h3>Why are my leaves turning yellow?</h3>
                    <p>Yellow leaves can indicate overwatering, underwatering, or nutrient deficiency. Check the soil moisture first!</p>
                </div>
                <div className="faq-item">
                    <h3>How often should I repot?</h3>
                    <p>Generally every 12-18 months, or when you see roots growing out of the drainage holes.</p>
                </div>
                <div className="faq-item">
                    <h3>Is tap water okay?</h3>
                    <p>Most plants are fine with tap water, but sensitive plants (like Calatheas) prefer distilled or filtered water to avoid brown tips.</p>
                </div>
            </div>
        </div>
    );
};
