# How to Get Your Claude Code OAuth Token

## Quick Method (Recommended)

Run this command in your terminal:

```bash
gh secret set CLAUDE_CODE_OAUTH_TOKEN
```

When prompted, paste your Claude Code OAuth token.

## Where to Get the OAuth Token

### Method 1: From Claude Code CLI
If you have Claude Code CLI installed locally:

```bash
# The token is stored in your Claude Code config
cat ~/.claude/config.json | jq -r '.oauth_token'
```

### Method 2: From Another Repository
If you already have it working in `ai-schedule` repository:

```bash
# Get the token from ai-schedule repo (if you have access to the secret)
# You'll need to get it from the GitHub UI or from where you originally set it
```

### Method 3: Generate New Token
1. Go to https://claude.ai/settings (if available in settings)
2. Look for "Developer" or "API" section
3. Generate a new OAuth token for GitHub integration
4. Copy the token

### Method 4: From GitHub App Installation
The OAuth token is automatically generated when you install the Claude Code GitHub app. To retrieve it:

1. Go to https://github.com/settings/installations
2. Click on "Claude" app
3. Look for token/credentials section (if available)

## Adding the Secret to This Repository

Once you have the token:

```bash
cd /Users/dima/Code/innovative360ai-corporate
gh secret set CLAUDE_CODE_OAUTH_TOKEN
# Paste your token when prompted
```

Or via GitHub UI:
1. Go to https://github.com/ddmitriy78/innovative360ai-corporate/settings/secrets/actions/new
2. Name: `CLAUDE_CODE_OAUTH_TOKEN`
3. Secret: [paste your OAuth token]
4. Click "Add secret"

## Verify It Works

After adding the secret:

1. Push a commit to trigger the workflow:
   ```bash
   git add .
   git commit -m "Add Claude Code OAuth integration"
   git push
   ```

2. Create or update a PR - Claude should automatically review it

3. Check the Actions tab:
   https://github.com/ddmitriy78/innovative360ai-corporate/actions

## How This Differs from API Key

- **OAuth Token** (`CLAUDE_CODE_OAUTH_TOKEN`):
  - Uses GitHub app authentication
  - Free (included with your Claude Code GitHub app)
  - Better for automatic reviews

- **API Key** (`ANTHROPIC_API_KEY`):
  - Uses direct Anthropic API
  - Paid (uses your API quota)
  - More flexible but costs money per review

## Troubleshooting

If reviews still don't work:
1. Verify the secret is set: `gh secret list | grep CLAUDE`
2. Check workflow permissions in `.github/workflows/claude-code-review.yml`
3. Ensure Claude Code GitHub app has access to this repository
4. Check Actions tab for error messages

---

**Next Step**: Get your OAuth token and run:
```bash
gh secret set CLAUDE_CODE_OAUTH_TOKEN
```
