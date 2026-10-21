# Lessons

## 2026-10-21: never let a secret reach the output
- **What happened:** ran `vercel deploy --token "$VERCEL_TOKEN"`. The CLI rejected the flag and its error message echoed the full token into the session.
- **Rule:** any command that touches a token, key or password gets its output piped through a redactor (`sed -E 's/vcp_[A-Za-z0-9]+/[redacted]/g'`) before it runs, not after.
- **Rule:** pass secrets through the environment (`VERCEL_TOKEN`), never as a CLI flag, and check what a newer CLI version accepts before reusing an old command.
- **Rule:** when a secret is exposed, say so immediately and tell the user to rotate it. Never print any part of it beyond a short masked prefix.
- **Rule:** verify a token with a project-scoped call, not `whoami`. Team-scoped tokens have no user, so `whoami` reports "User not found" even when the token is fine.
