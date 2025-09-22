function loadHTML(containerId, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to fetch ${file}`);
            return response.text();
        })
        .then(html => {
            const container = document.getElementById(containerId);
            container.innerHTML = html;

            // újrafuttatjuk a script-eket
            container.querySelectorAll("script").forEach(oldScript => {
                const newScript = document.createElement("script");

                if (oldScript.src) {
                    // EREDETI src attribútumot vesszük át, nem a böngészõ által "feloldott" abszolútot
                    newScript.setAttribute("src", oldScript.getAttribute("src"));
                } else {
                    newScript.textContent = oldScript.textContent;
                }

                // attribútumok másolása
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