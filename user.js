// ┌─┐┬┬─┐┌─┐┌─┐┌─┐─┐ ┬  ┬ ┬┌─┐┌─┐┬─┐  ┬┌─┐
// ├┤ │├┬┘├┤ ├┤ │ │┌┴┬┘  │ │└─┐├┤ ├┬┘  │└─┐
// └  ┴┴└─└─┘└  └─┘┴ └─  └─┘└─┘└─┘┴└─o└┘└─┘
// ------------------------------------------->

// Enable custom stylesheets (userChrome.css / userContent.css)
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// always restore the last session
user_pref("browser.startup.page", 3);
user_pref("browser.sessionstore.resume_session_once", false);

// === Dark Theme Settings ===
// Use dark theme for UI
user_pref("ui.systemUsesDarkTheme", 1); // 1 = force dark UI
// Apply dark mode to built-in content (settings, about: pages, etc.)
user_pref("browser.in-content.dark-mode", true);
// Override prefers-color-scheme for content
// 0 = always dark, 1 = always light, 2 = follow system
user_pref("layout.css.prefers-color-scheme.content-override", 0);

// === GPU / Rendering / WebRender ===
// Enable WebRender globally (if hardware supports it)
user_pref("gfx.webrender.all", true);
// Force GPU compositing even if blocked by default
user_pref("layers.acceleration.force-enabled", true);
// Enable hardware-accelerated canvas rendering
user_pref("gfx.canvas.accelerated", true);
// For Wayland/EGL rendering (if using Wayland, Hyprland, etc.)
user_pref("gfx.x11-egl.force-enabled", true);
// Hardware video decoding
user_pref("media.hardware-video-decoding.enabled", true);

// === Network & HTTP Performance ===
// Enable HTTP/3
user_pref("network.http.http3.enabled", true);
// More persistent connections per server (increase concurrency)
user_pref("network.http.max-persistent-connections-per-server", 10);
// More urgent start/connections for high-priority requests
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
// DNS cache: more entries, longer expiry
user_pref("network.dnsCacheEntries", 1000);
user_pref("network.dnsCacheExpiration", 3600); // seconds

// TLS / SSL cache for speed
user_pref("network.ssl_tokens_cache_capacity", 32768);

// === Tabs, Memory & Session Handling ===
// Don’t load all tabs on startup
user_pref("browser.sessionstore.restore_on_demand", true);
// Unload background tabs when memory is low
user_pref("browser.tabs.unloadOnLowMemory", true);

// Optionally, tune how long a tab must be inactive before unloading
// user_pref("browser.tabs.min_inactive_duration_before_unload", 3600000); // 1 hour in ms

// === Telemetry / Privacy / Unneeded Features ===
// Disable telemetry
user_pref("toolkit.telemetry.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
// Ping Centre may be internal reporting — disable if you want very strict privacy
user_pref("browser.ping-centre.telemetry", false);

// === Minor / Network Rendering Optimizations ===
// Optionally, reduce intervals for content notify / switch thresholds
// These are more experimental and might affect responsiveness vs CPU usage
user_pref("content.notify.interval", 100000); // microseconds
user_pref("content.switch.threshold", 250000); // microseconds

// === Cache & Session Save Optimization ===
// Move disk cache into RAM or disable disk cache if you have enough RAM
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
// Optionally, specify RAM-backed cache directory
// user_pref("browser.cache.disk.parent_directory", "/run/user/$(id -u)/firefox-cache");

// Increase interval at which Firefox writes session info to disk
user_pref("browser.sessionstore.interval", 300000); // microseconds

// === Others / Optional Features ===
// Force WebGL if disabled by default
user_pref("webgl.force-enabled", true);
// Force EGL (if relevant and driver supports it)
// might require environment variable `MOZ_X11_EGL=1` or Wayland support

// Disable unwanted UI elements (sidebars etc.)
user_pref("sidebar.revamp", false);
user_pref("sidebar.show", false);
user_pref("sidebar.verticalTabs", false);
user_pref("sidebar.visibility", "hide-sidebar");
user_pref("browser.sidebar.showFromBrowserActions", false);

// ========== Compact UI Preferences ==========

// Show Compact density option (though marked “not supported” in Customize toolbar)
user_pref("browser.compactmode.show", true);

// UI density: 0 = normal, 1 = compact, 2 = touch
user_pref("browser.uidensity", 1);

// Scale UI / whole Firefox interface: less than 1.0 = smaller
// On some systems this affects toolbar/tab height etc.
user_pref("layout.css.devPixelsPerPx", "0.9");

// Remove or hide the title bar (uses tab bar as title bar if possible)
user_pref("browser.tabs.inTitlebar", 1);

// Force classic title bar (always show title bar, don't merge with tabs)
user_pref("browser.tabs.inTitlebar", 0);

// ================================
// End of configuration
