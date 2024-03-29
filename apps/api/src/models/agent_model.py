from typing import Literal
from uuid import UUID

from pydantic import BaseModel


class AgentModel(BaseModel):
    id: UUID
    title: str
    role: str
    system_message: str
    tools: list[dict]
    model: Literal["gpt-3.5-turbo", "gpt-4-turbo-preview"]
