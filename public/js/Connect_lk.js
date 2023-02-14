// var web3;

const walletID = document.getElementById("address");
const balanceID = document.getElementById("eth_balance");
let account;
let balance;


async function getBalance()
{
    ethereum
    .request({ method: "eth_getBalance", params: [account, "latest"]})
    .then((balance) => {

        console.log(balance)

        balance = parseInt(balance, 16) / Math.pow(10, 18);;
            balanceID.innerHTML = "<span class='eth-adress'>"+balance+" <span class='balance-span'>ETH</span></span>";

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
            walletID.innerHTML = account;
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


function disconnect()
{
    location.reload()
}

window.onload = function()
{
    Connect();
}