# UaaS - UUID as a Service 🚀

> "Stop generating UUIDs locally like a caveman. It's 2026. Use the cloud."

UaaS is a fast, highly-available, web-scale, and production-scale UUID generation service.

[![Get Started](https://img.shields.io/badge/get_started-fcc800?style=for-the-badge)](https://uuid.doong.me)


## 🌟 Key Features

- **Web-Scale Entropy**: Our entropy is sourced from a globally distributed cluster of interns rolling high-speed D20 dice in high-altitude data centers.
- **Automatic Deduplication**: We check every generated UUID against our master spreadsheet (stored in Barnaby's Dropbox) to ensure 0.00000% collisions. Guaranteed.
- **Post-Quantum Randomness**: Our generation algorithm is so random that even we don't know what it's doing. Not even Barnaby. Especially not Barnaby.
- **Enterprise Security**: We don't log your UUIDs because we forgot how to setup the logging middleware. Your privacy is our technical debt.

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
    "sponsored_by": "BreadBoard Enthusiasts: Building a computer out of lemons to power this API."
}
```

## SDK Usage

```python
from uaas import uuid, uuid_async, console

# Synchronous
my_uuid = uuid()
print(my_uuid.uuid)

# Or Asynchronous
# my_uuid = await uuid_async()
# print(my_uuid.uuid)

# Terms of service require we console.log the sponsored_by message
console.log(full_year.sponsored_by)
```

## 👥 The Team

- **Dong**: Founder & Visionary.
- **Barnaby**: Senior Intern. Currently detained for rigging the D20 dice with magnets.

## 📄 License & TOS

By using this project, you agree to:
Accept all logs dumped to your browser console.

---

*UaaS: Because your local entropy is just not good enough.*
