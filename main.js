
function search() {
    const keyword = document.getElementById('keyword').value.trim();
    if (!keyword) return alert('請輸入關鍵字');
    window.open('https://artale-market.org/transaction?search=' + encodeURIComponent(keyword), '_blank');
}

function quickSearch(word) {
    document.getElementById('keyword').value = word;
    search();
}
