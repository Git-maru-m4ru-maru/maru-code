document.addEventListener("DOMContentLoaded", async () => {

    const target = document.getElementById("site-header");

    if (!target) return;

    try {
        const response = await fetch("/components/header.html");

        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status}`
            );
        }

        target.innerHTML = await response.text();

    } catch (error) {
        console.error("ヘッダーの読み込みに失敗しました:", error);
        target.textContent = "メニューを読み込めませんでした";
    }

});
