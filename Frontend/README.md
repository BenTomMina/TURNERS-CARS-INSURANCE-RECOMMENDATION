# Welcome to **Turners Cars - Insurance Recommendation**

## Overview

A React frontend which conducts a conversation to advise the user of which insurance plan fits them best.

There are three types of insurance policies offered:

1. Mechanical Breakdown Insurance (MBI): https://www.moneyhub.co.nz/mechanical-breakdown-insurance.html
2. Comprehensive Car Insurance: https://www.moneyhub.co.nz/car-insurance.html
3. Third Party Car Insurance: https://www.moneyhub.co.nz/third-party-car-insurance.html

Business Rules:

1. MBI is not available to trucks and racing cars
2. Comprehensive Car Insurance is only available to any motor vehicle less than 10 years old

The chat allows the user to send messages as answers to the Google Gemini API which returns a question to be answered by the user. At the end, it gives a recommendation on which insurance policy fits them best.

#### Tech Stack

- React
- React-Markdown - to improve readability of recommendation message
- HTML
- CSS

#### Setup Instruction:

**Clone the repository**

```bash
git clone <repo-url>
cd TURNERS-CARS-INSURANCE-RECOMMENDATION/Frontend
```

**Install dependencies**

```bash
npm install
```

**Getting started**

```
1. npm run dev
2. make sure backend is running
3. start the conversation
```

---
