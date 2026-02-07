var numeroTavoli = 30;
document.getElementById("tavoli").textContent = numeroTavoli;

function calcolaTotale() {

    var pizza = document.getElementById("pizza").value;
    var quantita = document.getElementById("quantita").value;
    var errore = document.getElementById("errore");
    var totale = document.getElementById("totale");
    var confermaBtn = document.getElementById("conferma");
    var annullaBtn = document.getElementById("annulla");
    var messaggio = document.getElementById("messaggio");
            
    
    errore.innerHTML = "";
    errore.style.display = "none";
    totale.innerHTML = "";
    totale.style.display = "none";
    messaggio.innerHTML = "";
    messaggio.style.display = "none";
    confermaBtn.style.display = "none";
    annullaBtn.style.display = "none";

    if (pizza === "") {
        errore.innerHTML = "Seleziona una pizza!";
        errore.style.display = "block";
        return;
    }

    if (quantita === "" || quantita <= 0) {
        errore.innerHTML = "Inserisci una quantità valida!";
        errore.style.display = "block";
        return;
    }

    var prezzoTotale = pizza * quantita;
    totale.innerHTML = "Totale: €" + prezzoTotale;
    totale.style.display = "block";

    confermaBtn.style.display = "inline-block";
    annullaBtn.style.display = "inline-block";
}

function confermaOrdine() {
    var messaggio = document.getElementById("messaggio");
    messaggio.innerHTML = "Ordine confermato! Grazie per aver ordinato!";
    messaggio.style.display = "block";
}

function annullaOrdine() {
    var messaggio = document.getElementById("messaggio");
    messaggio.innerHTML = "Ordine annullato.";
    messaggio.style.display = "block";
}

function confermaPrenotazione() {

    var posti = document.getElementById("posti").value;
    var cognome = document.getElementById("cognome").value;
    var errore2 = document.getElementById("errore2");
    var messaggioPrenotazione = document.getElementById("messaggioPrenotazione");

 
    errore2.innerHTML = "";
    errore2.style.display = "none";
    messaggioPrenotazione.innerHTML = "";
    messaggioPrenotazione.style.display = "none";

    if (posti === "" || posti <= 0) {
        errore2.innerHTML = "Inserisci un numero di posti valido!";
        errore2.style.display = "block";
        return;
    }

    if (cognome === "") {
        errore2.innerHTML = "Inserisci un cognome!";
        errore2.style.display = "block";
        return;
    }

    if (numeroTavoli === 0) {
        errore2.innerHTML = "Siamo spiacenti ma i tavoli sono tutti prenotati :(";
        errore2.style.display = "block";
        return;
    }

    numeroTavoli--;
    document.getElementById("tavoli").textContent = numeroTavoli;

    messaggioPrenotazione.innerHTML = "Prenotazione confermata! Grazie per aver prenotato!";
    messaggioPrenotazione.style.display = "block";
}