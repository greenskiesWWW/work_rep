// var web3;

const walletID = document.getElementById("address");

async function Connect(){

    if (typeof window.ethereum !== "undefined") {
        console.log("MetaMask installed")

        ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {

          const account = accounts[0]
                walletID.innerHTML = "<span class='eth-adress'>"+account.substring(0,23)+"</span>";

        }).catch((error) => {
            // Handle error
            console.log(error, error.code);
 
            // 4001 - The request was rejected by the user
            // -32602 - The parameters were invalid
            // -32603- Internal error
        });
        
    } else {
        window.open("https://metamask.io/download/", "_blank");
    }

    // await window.web3.currentProvider.enable();
    // web3 = new web3(window.web3.currentProvider);

    // if(!web3.isConnected()) {
    //     console.error("Not connected");
    // }

    // console.log(web3);

    // var account = web3.currentProvider.selectedAddress;
    // console.log(account);
    // document.getElementById("address").innerHTML = account;

}