# UaaS - UUID as a Service 🚀

> "Stop generating UUIDs locally like a caveman. It's 2026. Use the cloud."

UaaS is a highly-available, web-scale, and slightly sarcastic UUID generation service. It features a stunning Neobrutalist macOS-style UI and a backend powered by pure cryptographic randomness (and Joe's morale).

## 🌟 Key Features

- **Web-Scale Output**: Every UUID is guaranteed to be unique within this dimension.
- **Deduplication Engine**: Our intern, Joe, manually checks each UUID against a printed list to ensure no duplicates.
- **Mac-Style UI**: A beautiful, window-based interface with red/yellow/green controls (on the left, as God intended).
- **Integrated Advertising**: Enjoy high-quality, fictional sponsored content directly in your \`console.log\`.
- **99.9% Operational**: We only go down when Joe is on leave (which is often).

## 🛠 Tech Stack

- **Framework**: Astro (v5.0+)
- **Styling**: Tailwind CSS (v4.0)
- **Runtime**: Cloudflare Workers (SSR Mode)
- **Icons**: Lucide-Astro
- **Backend API**: Integrated Astro API routes at \`/api/uuid\`

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (because \`npm\` is so 2023)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Dong-Chen-1031/uaas.git
cd uaas
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

4. Open your browser to `http://localhost:4321`. Don't forget to open your Console to see the ads\!

## 📡 API Usage

### Endpoint
`GET /api/uuid`

### Response Example
```json
{
    "uuid": "70171234-5678-4321-9876-543210987654",
    "version": 4,
    "method": "Web-Scale Cryptographic Randomness",
    "deduplicated": true,
    "sponsored_by": "CloudStrike: Our UUIDs never crash, they just 'transition' to non-existence."
}
```

## 👥 The Team

- **Dong**: Founder & Visionary.
- **Joe**: Senior Intern. Currently on administrative leave in Tokyo with his AI girlfriend.

## 📄 License & TOS

By using this project, you agree to:
1. Accept all logs dumped to your browser console.
2. Never ask about the alkaline battery incident of June 2026.
3. Admit that macOS window controls belong on the left.

---

*UaaS: Because your local entropy is just not good enough.*
