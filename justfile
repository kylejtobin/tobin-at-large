# Tobin at Large — task runner.
# Workflow: build on `preview` (→ Vercel preview deploys), promote to `main`
# (→ production). `just save` ships your work to preview; `just ship` promotes.

set shell := ["bash", "-uc"]

# list recipes
default:
    @just --list

# install dependencies
install:
    pnpm install

# run the dev server
dev:
    pnpm dev

# production build into ./dist
build:
    pnpm build

# preview the production build locally
serve:
    pnpm preview

# format with prettier
fmt:
    pnpm format

# everything CI/Vercel would check: types, formatting, lint, build
check:
    pnpm check
    pnpm format:check
    pnpm lint
    pnpm build

# commit all changes on the current branch and push (use on `preview`)
save MSG:
    #!/usr/bin/env bash
    set -euo pipefail
    branch=$(git rev-parse --abbrev-ref HEAD)
    if [ "$branch" = "main" ]; then
      echo "✗ You're on main. Work happens on 'preview' — run: git switch preview" >&2
      exit 1
    fi
    git add -A
    git commit -m "{{ MSG }}"
    git push -u origin "$branch"
    echo "✓ Pushed '$branch' → Vercel will build a preview deploy."

# promote preview → main (production). Verifies the build first.
ship:
    #!/usr/bin/env bash
    set -euo pipefail
    just check
    git switch main
    # fast-forward only: keeps history linear and refuses if branches diverged
    git merge --ff-only preview
    git push origin main
    git switch preview
    echo "✓ main updated → Vercel will build production. Back on 'preview'."

# show branch + working-tree state
status:
    @git status -sb
