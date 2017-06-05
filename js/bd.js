    document.addEventListener("deviceready", onDeviceReady, false);

    // Populate the database 
    //
    function populateDB(tx) {
        //tx.executeSql('DROP TABLE IF EXISTS POSTAGENS');
        //tx.executeSql('CREATE TABLE IF NOT EXISTS POSTAGENS (id unique, hashtag, imagem)');
        //tx.executeSql('INSERT INTO POSTAGENS (id, hashtag, imagem) VALUES (1, "teste", "img1")');
        //tx.executeSql('INSERT INTO POSTAGENS (id, hashtag, imagem) VALUES (2, "teste2", "img2")');
    }

    // Query the database
    //
    function queryDB(tx) {
        tx.executeSql('SELECT * FROM POSTAGENS', [], querySuccess, errorCB);
    }

    // Query the success callback
    //
    function querySuccess(tx, results) {
        var len = results.rows.length;
        alert("DEMO table: " + len + " rows found.");
        for (var i=0; i<len; i++){
            alert("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).hashtag);
        }
    }

    // Transaction error callback
    //
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
    }

    // Transaction success callback
    //
    function successCB() {
        var db = window.openDatabase("hashpic", "1.0", "HashPic", 200000);
        db.transaction(queryDB, errorCB);
    }

    // PhoneGap is ready
    //
    function onDeviceReady() {
        var db = window.openDatabase("hashpic", "1.0", "HashPic", 200000);
        db.transaction(populateDB, errorCB, successCB);
    }