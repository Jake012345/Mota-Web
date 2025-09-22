function loadHTML(containerId, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to fetch ${file}`);
            return response.text();
        })
        .then(html => {
            const container = document.getElementById(containerId);
            container.innerHTML = html;

            // �jrafuttatjuk a script-eket
            container.querySelectorAll("script").forEach(oldScript => {
                const newScript = document.createElement("script");

                if (oldScript.src) {
                    // EREDETI src attrib�tumot vessz�k �t, nem a b�ng�sz� �ltal "feloldott" abszol�tot
                    newScript.setAttribute("src", oldScript.getAttribute("src"));
                } else {
                    newScript.textContent = oldScript.textContent;
                }

                // attrib�tumok m�sol�sa
                [...oldScript.attributes].forEach(attr => {
                    if (attr.name !== "src") {
                        newScript.setAttribute(attr.name, attr.value);
                    }
                });

                document.body.appendChild(newScript);
            });
        })
        .catch(err => console.error("Error loading HTML:", err));
}