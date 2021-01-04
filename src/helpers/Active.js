export const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900", backgroundColor: "rgba(24, 108, 122, 0.575)" }
    }
    return { color: "#ffffff" };
}
