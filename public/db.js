let db;

const request = indexedDB.open("budget", 1);


request.onupgradeneeded = function(event) {
    console.log(event.target.result)

    const db = event.target.result;

    db.createObjectStore("pending", { autoIncrement: true });
}

request.onsuccess = function(event) {
   db = event.target.result;
   console.log(db)

//    if (navigator.onLine) {
//        checkDatabase();
//    }
};

request.onerror = function(event) {
    console.log("Whoops!" + event.target.errorCode)
};

function saveRecord(record) {
    const transaction = db.transaction(["pending"], "readwrite");

    const store = transaction.createObjectStore("pending");

    store.add(record)
}

function checkDatabase() {
    const transaction = db.transaction(["pending"], "readwrite");

    const store = transaction.objectStore("pending");

    const getAll = store.getAll();

    getAll.onsucces = function() {
        if (getAll.result.length > 0) {
            fetch("/api/transaction/bulk", {
                method: "POST",
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            })   
            .then(response => response.json())
            .then(() => {
                const transaction = db.transaction(["pending"], "readwrite");

                const store = transaction.objectStore("pending");
                store.Clear();
            });
        }
    }
}

window.addEventListener("online", checkDatabase)

