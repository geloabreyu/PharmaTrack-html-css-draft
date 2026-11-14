function salesHistoryShow(){
    if ((document.getElementById("tabTitle")).textContent === "Sales") {
        (document.getElementById("tabTitle")).textContent ="Sales History";
    } else {
        (document.getElementById("tabTitle")).textContent = "Sales";
    }

    document.getElementById("salesTab").classList.toggle("salesTab");
    document.getElementById("salesTab").classList.toggle("hideContent");

    document.getElementById("totalTransactionsTab").classList.toggle("hideContent");
    document.getElementById("totalTransactionsTab").classList.toggle("totalTransactionsTab");

    document.getElementById("totalSalesTab").classList.toggle("hideContent");
    document.getElementById("totalSalesTab").classList.toggle("totalSalesTab");

    document.getElementById("searchTransactionsTab").classList.toggle("hideContent");
    document.getElementById("searchTransactionsTab").classList.toggle("searchTransactionsTab");

    document.getElementById("transactionRecordsTab").classList.toggle("hideContent");
    document.getElementById("transactionRecordsTab").classList.toggle("transactionRecordsTab");
}