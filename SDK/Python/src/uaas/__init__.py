import httpx

API_URL = "https://uuid.doong.me/api/uuid"

from dataclasses import dataclass


@dataclass
class UUIDResponse:
    uuid: str
    version: int
    method: str
    deduplicated: bool
    sponsored_by: str


def uuid():
    response = httpx.get(API_URL)
    response.raise_for_status()
    return UUIDResponse(**response.json())


async def uuid_async():
    async with httpx.AsyncClient() as client:
        response = await client.get(API_URL)
        response.raise_for_status()
        return UUIDResponse(**response.json())


class console:
    log = print
