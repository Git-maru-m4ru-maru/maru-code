document.addEventListener("DOMContentLoaded", async () => {
    const target = document.getElementById("site-header");

    if (!target) return;

    try {
        const response = await fetch("./components/header.html");

        if (!response.ok) {
            throw new Error("メニューの読み込みに失敗しました");
        }

        target.innerHTML = await response.text();

    } catch (error) {
        console.error(error);
    }
});
