#!/usr/bin/env sh
hook_name=$(basename "$0")
if [ "$hook_name" = "pre-push" ]; then
  # Отримати назву головної гілки
  dev_branch="dev"

  # Отримати оновлення з віддаленого сховища
  git fetch origin $dev_branch

  # Перевірити, чи локальна головна гілка оновлена
  if git diff --quiet $dev_branch remotes/origin/$dev_branch; then
    echo "Головна гілка $dev_branch оновлена. Можна продовжити пуш."
  else
    echo "Головна гілка $dev_branch не оновлена. Будь ласка, оновіть перед пушем."
    exit 1
  fi
fi

if [ -z "$husky_skip_init" ]; then
  debug () {
    if [ "$HUSKY_DEBUG" = "1" ]; then
      echo "husky (debug) - $1"
    fi
  }

  readonly hook_name="$(basename -- "$0")"
  debug "starting $hook_name..."

  if [ "$HUSKY" = "0" ]; then
    debug "HUSKY env variable is set to 0, skipping hook"
    exit 0
  fi

  if [ -f ~/.huskyrc ]; then
    debug "sourcing ~/.huskyrc"
    . ~/.huskyrc
  fi

  readonly husky_skip_init=1
  export husky_skip_init
  sh -e "$0" "$@"
  exitCode="$?"

  if [ $exitCode != 0 ]; then
    echo "husky - $hook_name hook exited with code $exitCode (error)"
  fi

  if [ $exitCode = 127 ]; then
    echo "husky - command not found in PATH=$PATH"
  fi

  exit $exitCode
fi
