// DATABASE coming from Paimon.moe and ldshop.com
const data = {
    "Ascension (Level 90)": [
        { name: "Varunada Lazurite Gemstone", count: 6, img: "https://paimon.moe/images/items/varunada_lazurite_gemstone.png" },
        { name: "Varunada Lazurite Chunk", count: 9, img: "https://paimon.moe/images/items/varunada_lazurite_chunk.png" },
        { name: "Varunada Lazurite Fragment", count: 9, img: "https://paimon.moe/images/items/varunada_lazurite_fragment.png" },
        { name: "Varunada Lazurite Sliver", count: 1, img: "https://paimon.moe/images/items/varunada_lazurite_sliver.png" },
        { name: "Slime Condensate", count: 18, img: "https://paimon.moe/images/items/slime_condensate.png" },
        { name: "Slime Secretions", count: 30, img: "https://paimon.moe/images/items/slime_secretions.png" },
        { name: "Slime Concentrate", count: 36, img: "https://paimon.moe/images/items/slime_concentrate.png" },
        { name: "Radiant Antler", count: 46, img: "https://shop.ldrescdn.com/rms/ld-space/process/img/269e8d6724fd4b6f9df529c8d03025d51764684746.png?x-oss-process=image/format,webp" },
        { name: "Winter Icelea", count: 168, note: "New Local Specialty", img: "https://shop.ldrescdn.com/rms/ld-space/process/img/77caabcfc7a6461eb67052d6e0f643b71764765881.webp?x-oss-process=image/format,webp" },
        { name: "Wanderer's Advice", count: 3, img: "https://paimon.moe/images/items/wanderes_advice.png" },
        { name: "Hero's Wit", count: 418, img: "https://paimon.moe/images/items/heros_wit.png" },
        { name: "Mora", count: 2092400, img: "https://paimon.moe/images/items/mora.png" }
    ],
    "Talents": [
        { name: "Teachings of Moonlight", count: 9, img: "https://shop.ldrescdn.com/rms/ld-space/process/img/97ba4eb2235143cfa085898f7c5820ad1764684746.png?x-oss-process=image/format,webp" },
        { name: "Guide to Moonlight", count: 63, img: "https://shop.ldrescdn.com/rms/ld-space/process/img/3ae406905acc4ce49be3ccb509543aec1764684746.png?x-oss-process=image/format,webp" },
        { name: "Philosophies of Moonlight", count: 114, img: "https://shop.ldrescdn.com/rms/ld-space/process/img/eeb1b7174fb448858b2e80a81e97f6531764684748.png?x-oss-process=image/format,webp" },
        { name: "Crown of Insight", count: 3, img: "https://paimon.moe/images/items/crown_of_insight.png" },
        { name: "Weekly Boss Drop", count: 18, note: "New Weekly Boss", img: "https://shop.ldrescdn.com/rms/ld-space/process/img/2ff5c8abe3b94573b7116c3c73e4981d1764765727.webp?x-oss-process=image/format,webp" },
        { name: "Slime Condensate", count: 18, img: "https://paimon.moe/images/items/slime_condensate.png" },
        { name: "Slime Secretions", count: 66, img: "https://paimon.moe/images/items/slime_secretions.png" },
        { name: "Slime Concentrate", count: 93, img: "https://paimon.moe/images/items/slime_concentrate.png" },
        { name: "Mora", count: 4957500, img: "https://paimon.moe/images/items/mora.png" }
    ],
    "Weapon": [
        { name: "Far-North Scions (Gold)", count: 6, img: "https://shop.ldrescdn.com/rms/ld-space/process/img/9761934dbfe74fec8b501b2f5163b7981764684746.png?x-oss-process=image/format,webp" },
        { name: "Far-North Scions (Purple)", count: 14, img: "https://shop.ldrescdn.com/rms/ld-space/process/img/69233087036249ce969f96b7a605cb951764684748.png?x-oss-process=image/format,webp" },
        { name: "Far-North Scions (Blue)", count: 14, img: "https://shop.ldrescdn.com/rms/ld-space/process/img/a135cd9995a644e9b94c8d97c9b4535f1764684746.png?x-oss-process=image/format,webp" },
        { name: "Far-North Scions (Green)", count: 5, img: "https://shop.ldrescdn.com/rms/ld-space/process/img/38b8278c46264a83a1f3c28973ccdb761764684746.png?x-oss-process=image/format,webp" },
        { name: "Fractured Eye", count: 41, note: "New Elite Mob", img: "https://shop.ldrescdn.com/rms/ld-space/process/img/14812f684a614e1fbec0a7e30198a8221764913294.webp?x-oss-process=image/format,webp" },
        { name: "Aberrant Core", count: 27, note: "New Elite Mob", img: "https://shop.ldrescdn.com/rms/ld-space/process/img/b843ae28d45f4e6c9a5cba318054a49f1764913316.webp?x-oss-process=image/format,webp" },
        { name: "Beak of Deep Shadow", count: 23, note: "New Elite Mob", img: "https://shop.ldrescdn.com/rms/ld-space/process/img/3b02d64a31494f13978c1489a63a1d8a1764913337.webp?x-oss-process=image/format,webp" },
        { name: "Frost-Etched Warrant", count: 27, img: "https://shop.ldrescdn.com/rms/ld-space/process/img/f2dc24671d4e45e1b6d67bbd07e63e861764684747.png?x-oss-process=image/format,webp" },
        { name: "Immaculate Warrant", count: 23, img: "https://shop.ldrescdn.com/rms/ld-space/process/img/6ac5f65e0226457da60a4fb42de1e60e1764684746.png?x-oss-process=image/format,webp" },
        { name: "Tattered Warrant", count: 15, img: "https://shop.ldrescdn.com/rms/ld-space/process/img/9b33288ddf35436ebe41461aa96105241764684746.png?x-oss-process=image/format,webp" },
        { name: "Mystic Enhancement Ore", count: 709, img: "https://paimon.moe/images/items/mystic_enhancement_ore.png" },
        { name: "Mora", count: 1100000, img: "https://paimon.moe/images/items/mora.png" }
    ]
};

const restrictedItems = ["Winter Icelea", "Weekly Boss Drop", "Fractured Eye", "Aberrant Core", "Beak of Deep Shadow"];
const PREFIX = "columbina_tracker_final_v5_";
const app = document.getElementById('app');
const statusEl = document.getElementById('save-status');
const exportGrid = document.getElementById('export-grid');

// CALIBRATION
const gridConfig = { top: 13.12, left: 35.9, width: 63, height: 83 };

function applyGridConfig() {
    exportGrid.style.top = gridConfig.top + '%';
    exportGrid.style.left = gridConfig.left + '%';
    exportGrid.style.width = gridConfig.width + '%';
    exportGrid.style.height = gridConfig.height + '%';
}

function render() {
    app.innerHTML = '';
    for (const [section, items] of Object.entries(data)) {
        const title = document.createElement('div');
        title.className = 'section-title';
        title.textContent = section;
        app.appendChild(title);
        const grid = document.createElement('div');
        grid.className = 'checklist-grid';
        items.forEach((item, index) => {
            const id = `${PREFIX}${section.split(' ')[0]}_${index}`;
            const isChecked = localStorage.getItem(id) === 'true';
            
            // CLICKABLE CARD
            const card = document.createElement('div');
            card.className = `card ${isChecked ? 'completed' : ''}`;
            
            // Click Logic
            card.onclick = (e) => {
                if (e.target.type !== 'checkbox' && e.target.tagName !== 'LABEL') {
                    const checkbox = document.getElementById(id);
                    checkbox.checked = !checkbox.checked;
                    toggle(id, checkbox);
                }
            };

            card.innerHTML = `
                <img src="${item.img}" class="item-icon" alt="${item.name}" onerror="this.src='https://paimon.moe/images/items/mora.png'">
                <div class="item-details">
                    <span class="item-name">${item.name}</span>
                    <div class="item-count">x ${item.count.toLocaleString()} ${item.note ? `<span class="badge">${item.note}</span>` : ''}</div>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" id="${id}" ${isChecked ? 'checked' : ''} onchange="toggle('${id}', this)">
                    <label for="${id}"></label>
                </div>`;
            grid.appendChild(card);
        });
        app.appendChild(grid);
    }
}

window.toggle = (id, el) => { localStorage.setItem(id, el.checked); render(); showSaveStatus(); };

// SAVINGS
window.saveSavings = () => {
    localStorage.setItem(PREFIX + 'primos', document.getElementById('primoInput').value);
    localStorage.setItem(PREFIX + 'fates', document.getElementById('fateInput').value);
};

function loadSavings() {
    document.getElementById('primoInput').value = localStorage.getItem(PREFIX + 'primos') || '';
    document.getElementById('fateInput').value = localStorage.getItem(PREFIX + 'fates') || '';
}

// RESET
document.getElementById('resetBtn').addEventListener('click', () => {
    if(confirm("Are you sure you want to reset all progress?")) {
        Object.keys(localStorage).forEach(k => { 
            if(k.startsWith(PREFIX)) localStorage.removeItem(k); 
        });
        render();
        loadSavings();
    }
});

// GENERATE CARD
document.getElementById('saveBtn').addEventListener('click', () => {
    const btn = document.getElementById('saveBtn');
    const originalText = btn.innerText;
    btn.innerText = "Processing...";

    // 1. Validation Check
    let invalidItems = [];
    for (const [section, items] of Object.entries(data)) {
        items.forEach((item, index) => {
            const id = `${PREFIX}${section.split(' ')[0]}_${index}`;
            if (localStorage.getItem(id) === 'true' && restrictedItems.includes(item.name)) {
                invalidItems.push(item.name);
            }
        });
    }

    if (invalidItems.length > 0) {
        alert(`⚠️ Cannot Generate Summary\n\nThe following items are UNRELEASED and cannot be obtained yet:\n\n- ${[...new Set(invalidItems)].join('\n- ')}\n\nPlease uncheck them to proceed.`);
        btn.innerText = originalText;
        return;
    }

    // 2. Setup Card
    applyGridConfig();
    const exportContainer = document.getElementById('export-container');
    exportContainer.style.display = 'block';

    // 3. Update Savings on Card
    document.getElementById('export-primo').innerText = document.getElementById('primoInput').value || "0";
    document.getElementById('export-fate').innerText = document.getElementById('fateInput').value || "0";

    // 4. Collect & Merge Data
    const collected = {};
    for (const [section, items] of Object.entries(data)) {
        items.forEach((item, index) => {
            const id = `${PREFIX}${section.split(' ')[0]}_${index}`;
            if (localStorage.getItem(id) === 'true') {
                if (collected[item.name]) {
                    collected[item.name].count += item.count;
                } else {
                    collected[item.name] = { name: item.name, count: item.count, img: item.img };
                }
            }
        });
    }

    exportGrid.innerHTML = '';
    const items = Object.values(collected);
    
    if (items.length === 0) { 
        alert("No items marked as done!"); 
        exportContainer.style.display = 'none';
        btn.innerText = originalText; 
        return; 
    }

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'export-card';
        div.innerHTML = `<img src="${item.img}"><span>${formatNumber(item.count)}</span>`;
        exportGrid.appendChild(div);
    });

    // 5. Render
    setTimeout(() => {
         html2canvas(exportContainer, {
            useCORS: true, 
            allowTaint: true, 
            scale: 1.5, 
            width: 1280, 
            height: 720
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'Columbina_Card.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
            btn.innerText = originalText;
            exportContainer.style.display = 'none'; 
        }).catch(err => {
            console.error(err);
            alert("Error: Please upload to a server/GitHub.");
            btn.innerText = originalText;
            exportContainer.style.display = 'none'; 
        });
    }, 200);
});

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return num.toLocaleString();
}
function showSaveStatus() { statusEl.style.opacity = '1'; setTimeout(() => { statusEl.style.opacity = '0'; }, 1500); }

// INITIALIZATION
applyGridConfig();
loadSavings();
render();