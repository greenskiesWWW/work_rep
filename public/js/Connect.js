// var web3;

const walletID = document.getElementById("address");
let account;
let balance;


async function getBalance()
{
    ethereum
    .request({ method: "eth_getBalance", params: [account, "latest"]})
    .then((balance) => {

        console.log(balance)

        balance = parseInt(balance, 16) / Math.pow(10, 18);;
            walletID.innerHTML = "<span class='eth-adress'>"+balance+"</span>";

    }).catch((error) => {
        // Handle error
        console.log(error, error.code);

        // 4001 - The request was rejected by the user
        // -32602 - The parameters were invalid
        // -32603- Internal error
    });
}

async function Connect(){

    if (typeof window.ethereum !== "undefined") {
        console.log("MetaMask installed")

        ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {

        account = accounts[0];
            walletID.innerHTML = "<button onclick='openDrop()' id='eth-adress' class='eth-adress'>"+account.substring(0,23)+"</button>";
            getBalance();

        }).catch((error) => {
            // Handle error
            console.log(error, error.code);
 
            // 4001 - The request was rejected by the user
            // -32602 - The parameters were invalid
            // -32603- Internal error
        });

        // Баланс
    
        
    } else {
        window.open("https://metamask.io/download/", "_blank");
    }

}


async function disconect()
{
    var tokenBalance = await sttcontract.methods.balanceOf(addr).call();
    tokenBalance = ethers.utils.formatEther(tokenBalance);
    tokenBalance = (+tokenBalance).toFixed(4);
    console.log(tokenBalance);
}