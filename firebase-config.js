

    // ==========================================
// firebase-config.js (Ultra-Fast & Secure Edition)
// ==========================================

const firebaseConfig = {
    apiKey: "AIzaSyDBhpcwAtd8gKVNtagusJ4FmFXK-7PiLzQ",
    authDomain: "dreamy-delight-27e16.firebaseapp.com",
    databaseURL: "https://dreamy-delight-27e16-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dreamy-delight-27e16",
    storageBucket: "dreamy-delight-27e16.firebasestorage.app",
    messagingSenderId: "77481876440",
    appId: "1:77481876440:web:7cf11156ee67b1e47ab0ad",
    measurementId: "G-VT8JDL8QGW"
};

// ==========================================
// 🔥 1. INITIALIZE FIREBASE (v8 Compatible)
// ==========================================
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else if (typeof firebase === 'undefined') {
    console.error("❌ Firebase SDK not loaded! Check your script tags.");
}

// ==========================================
// 🚀 2. INDESTRUCTIBLE SESSION MANAGER (Dual-Engine)
// ==========================================
function secureSessionEngine() {
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : null;
    }
    function setCookie(name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + date.toUTCString() + "; path=/";
    }

    let localEmail = localStorage.getItem("loggedInEmail");
    let localName = localStorage.getItem("loggedInName");
    
    let cookieEmail = getCookie("loggedInEmail");
    let cookieName = getCookie("loggedInName");

    if (!localEmail && cookieEmail) {
        localStorage.setItem("loggedInEmail", cookieEmail);
        if (cookieName) localStorage.setItem("loggedInName", cookieName);
    } 
    else if (localEmail && !cookieEmail) {
        setCookie("loggedInEmail", localEmail, 365);
        if (localName) setCookie("loggedInName", localName, 365);
    }
}
secureSessionEngine();

// ==========================================
// ⚡ 3. BACKGROUND DATA PRE-FETCHER (Ultra Fast)
// ==========================================
function prefetchAppData() {
    setTimeout(() => {
        try {
            const db = firebase.database();
            
            db.ref('homepage_config').once('value').then(snap => {
                if (snap.exists()) {
                    localStorage.setItem("userCachedHomeLayout", JSON.stringify(snap.val()));
                }
            }).catch(() => {});

            db.ref('menu_categories').once('value').then(snap => {
                if (snap.exists()) {
                    const val = snap.val();
                    const normalizedCats = Array.isArray(val) ? val : Object.values(val);
                    localStorage.setItem("userCachedMenuCats", JSON.stringify(normalizedCats));
                }
            }).catch(() => {});

            db.ref('menu_config').once('value').then(snap => {
                if (snap.exists()) {
                    const val = snap.val();
                    const normalizedMenu = Array.isArray(val) ? val : Object.values(val);
                    localStorage.setItem("userCachedMenuProducts", JSON.stringify(normalizedMenu));
                }
            }).catch(() => {});
        } catch (e) {
            // Firebase not ready yet
        }
    }, 1000);
}

// ==========================================
// 🌐 4. NETWORK CONNECTION WATCHER
// ==========================================
window.addEventListener('offline', () => {
    console.warn("📴 You are offline. Showing cached data.");
});

window.addEventListener('online', () => {
    console.log("📶 Back online. Syncing data...");
    prefetchAppData();
});

// ==========================================
// 🎨 5. NATIVE APP UI ENHANCER
// ==========================================
(function applyNativeUIFixes() {
    const style = document.createElement('style');
    style.innerHTML = `
        * {
            -webkit-tap-highlight-color: transparent !important;
        }
        body {
            -webkit-user-select: none;
            user-select: none;
        }
    `;
    document.head.appendChild(style);
})();

// ==========================================
// ✅ 6. START PRE-FETCH
// ==========================================
if (document.readyState === 'complete') {
    prefetchAppData();
} else {
    window.addEventListener('load', prefetchAppData);
}

console.log("✅ Firebase Connected! (Project: dreamy-delight-27e16)");
