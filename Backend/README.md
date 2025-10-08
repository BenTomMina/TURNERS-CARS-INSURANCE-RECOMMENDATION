# Welcome to **Turners Cars - Insurance Recommendation**

## Overview

A Node JS backend which will conduct a conversation to advise the user of which insurance plan fits them best.

There are three types of insurance policies offered:

1. Mechanical Breakdown Insurance (MBI): https://www.moneyhub.co.nz/mechanical-breakdown-insurance.html
2. Comprehensive Car Insurance: https://www.moneyhub.co.nz/car-insurance.html
3. Third Party Car Insurance: https://www.moneyhub.co.nz/third-party-car-insurance.html

Business Rules:

1. MBI is not available to trucks and racing cars
2. Comprehensive Car Insurance is only available to any motor vehicle less than 10 years old

At the end of the conversation, the user will be given a recommendation as to which insurance fits them best.

The backend makes use of the Google Gemini AI to generate responses which are sent to the frontend to conduct the conversation.

#### Tech Stack

- Node JS
- Express
- Google Gemini AI
- dotenv for environment config
- CORS middleware for frontend integration

#### Setup Instruction:

**Clone the repository**

```bash
git clone <repo-url>
cd TURNERS-CARS-INSURANCE-RECOMMENDATION/Backend
```

**Install dependencies**

```bash
npm install
```

**Configure environment variables**

1. Copy the example file (.env.example)
2. Edit .env and set your Gemini API key

**Getting started**

```
1. npm run dev
2. start the conversation on the frontend
```

---
