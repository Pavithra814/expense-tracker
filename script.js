// 
let balance = 0;
let tincome = 0;
let texpense = 0;
const transactions = [];
d = new Date();
const month = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
function addTransaction(){
    let desc = document.getElementById('desc').value;
    let amount = parseFloat(document.getElementById('amount').value);
    let type = document.getElementById('type').value;
    let category = document.getElementById('category').value;
    let date = `${d.getDate()} / ${month[d.getMonth()]} / ${d.getFullYear()}`;

    if(desc == ''){
       desc = document.getElementById('desc').innerHTML="-";
    }

    let transaction = {desc,amount,type,category,date};
    transactions.push(transaction);

    updateBalance(transaction);
    displayTransaction(transaction);

    desc = document.getElementById('desc').value = "";
    amount = document.getElementById('amount').value = "";
}
 function updateBalance(transaction){
        if(transaction.type == "income"){
            balance += transaction.amount;
            tincome += transaction.amount;
            document.getElementById('tincome').innerHTML=tincome;
        }
        else{
            balance -= transaction.amount;
            texpense += transaction.amount;
            document.getElementById('texpense').innerHTML = texpense;
        }
        document.getElementById('balance').innerHTML = balance;
    } 
function displayTransaction(transaction){
            let table = document.getElementById('tabledata');
            let row = table.insertRow(-1);

            row.insertCell(0).innerHTML = transaction.date;
            row.insertCell(1).innerHTML = transaction.desc;
            row.insertCell(2).innerHTML = transaction.category;
            row.insertCell(3).innerHTML = transaction.amount;

            if (transaction.type == "income"){
                row.classList.add('income-row');
            }
            else{
                row.classList.add('expense-row');
            }
    }