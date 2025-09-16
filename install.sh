#!/usr/bin/env bash

# Detect original user and home even under sudo
real_user="${SUDO_USER:-$USER}"
real_home=$(eval echo "~$real_user")

current_dir="$(dirname "$0")"

styles="$current_dir/chrome"
etc_policies_dir="/etc/firefox/policies"
user_js="$current_dir/user.js"
firefox_path_dir="$real_home/.mozilla/firefox"
tridactylrc="$current_dir/.tridactylrc"

profile_dir() {
    mkdir -p "$firefox_path_dir"
    find "$firefox_path_dir" -maxdepth 1 -type d -name "*.default-release" | head -1
}

policies_handler() {
    local file_name="policies.json"
    local src="$current_dir/etc/policies/$file_name"
    local dst="$etc_policies_dir/$file_name"

    if [[ $EUID -ne 0 ]]; then
        echo "[INFO] Skipping policies.json — root privileges required."
        return
    fi

    mkdir -p "$etc_policies_dir"
    cp -f "$src" "$dst"
    echo "[INFO] policies.json installed to $dst"
}

firefox_handler() {
    local profdir
    profdir="$(profile_dir)"
    echo "[INFO] Using Firefox profile: $profdir"

    # Copy userChrome / userContent styles
    mkdir -p "$profdir/chrome"
    cp -rT "$styles" "$profdir/chrome"

    # Copy user.js
    cp -f "$user_js" "$profdir/"
    echo "[INFO] Firefox profile updated."

    # Copy tridactylrc config
    cp -f "$tridactylrc" "$real_home"
    echo "[INFO] tridactylrc installed to $real_home"
}

policies_handler
firefox_handler
