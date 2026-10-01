/**
 * ENTERPRISE-GRADE CLIENT-SIDE HARDENING & ANTI-SCRAPING SHIELD
 * Protects brand assets, blocks context menus, disables inspect keyboard shortcuts,
 * prevents media dragging, and triggers a debugger trap if DevTools is opened.
 */

export function initSecurityShield() {
  if (typeof window === 'undefined') return;

  // 1. Disable Right-Click Context Menu
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  }, { capture: true });

  // 2. Disable Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U, Ctrl+S)
  window.addEventListener('keydown', (e) => {
    const isCtrlOrCmd = e.ctrlKey || e.metaKey;
    const isShift = e.shiftKey;
    const key = e.key ? e.key.toLowerCase() : '';
    const keyCode = e.keyCode;

    // F12 key
    if (key === 'f12' || keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl + Shift + I / J / C (Inspect / Console)
    if (isCtrlOrCmd && isShift && (key === 'i' || key === 'j' || key === 'c' || keyCode === 73 || keyCode === 74 || keyCode === 67)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl + U (View Source)
    if (isCtrlOrCmd && (key === 'u' || keyCode === 85)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl + S (Save Page)
    if (isCtrlOrCmd && (key === 's' || keyCode === 83)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, { capture: true });

  // 3. Disable Image & Media Dragging
  window.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  }, { capture: true });

  // 4. Debugger Loop Trap (Freezes DevTools if opened)
  const startDebuggerTrap = () => {
    setInterval(() => {
      const startTime = performance.now();
      // Execute debugger statement
      (function () {
        return false;
      })
      ['constructor']('debugger')();
      const endTime = performance.now();

      // Detection threshold: if execution took longer than 100ms, DevTools is active
      if (endTime - startTime > 100) {
        window.location.reload();
      }
    }, 1000);
  };

  try {
    startDebuggerTrap();
  } catch {
    // Graceful fallback
  }
}
