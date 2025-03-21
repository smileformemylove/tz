document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (event) => {
        const blockedSelectors = "a, ul, li";
        const target = event.target;

        if (target.closest(blockedSelectors)) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        if (target.closest("button") && !target.closest("form")) {
            event.preventDefault();
            event.stopPropagation();
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu-container");

    if (menuContainer) {
        menuContainer.addEventListener("click", (event) => {
            if (event.target.closest("a")) {
                event.preventDefault();
                event.stopPropagation();
            }
        });
    }
});