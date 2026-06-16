import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
    const sponsors = [
        "VoidCorp: We monetize the empty space between your data points.",
        "Mars-Bound Interns: They generate IDs while they travel. No return ticket.",
        "Entropy-Flow: Organic, free-range randomness from happy cloud atoms.",
        "Glitch-O-Matic: Our IDs are so random they don't even exist in this dimension.",
        "Synthetica: Why have real users when you can have synthetic ones with unique IDs?",
        "BreadBoard Enthusiasts: Building a computer out of lemons to power this API.",
        "StaticNoise: We listen to the universe's background radiation so you don't have to.",
        "Z-Coordinate Labs: For when 2D IDs just aren't enough for your metaverse.",
        "Zero-Value Ventures: Investing in nothing, perfectly.",
        "Infinite-Monkey-Typewriters: Providing strings since the beginning of time.",
    ];

    const randomSponsor = sponsors[Math.floor(Math.random() * sponsors.length)];
    const uuid = crypto.randomUUID();
    const response = {
        uuid: uuid,
        version: 4,
        method: "Web-Scale Cryptographic Randomness",
        deduplicated: true,
        sponsored_by: randomSponsor,
    };

    return new Response(JSON.stringify(response), {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    });
};
