var amount = 0

if(parseInt(localStorage.getItem('amount'))>0)
{
   document.getElementById('savingsAmount').innerHTML = `${localStorage.getItem('amount')}/-`
}
document.getElementById('myform').addEventListener('submit',saveAmount)

function saveAmount(e)
{
    amount = parseInt(document.getElementById('amount').value) + parseInt(document.getElementById('savingsAmount').innerHTML)
    localStorage.setItem('amount',amount)
    document.getElementById('savingsAmount').innerHTML = amount + '/-'
   console.log(amount); 
   document.getElementById('amount').value = ""
   e.preventDefault()
}
document.getElementById('expenses-form').addEventListener('submit',addExpense)

function addExpense(e)
{
   amount = parseInt(document.getElementById('savingsAmount').innerHTML)
   var expense = document.getElementById('expenses').value
   var describe = document.getElementById('describe').value
   var newam = amount - parseInt(expense)
   localStorage.setItem('amount',newam)
   document.getElementById('savingsAmount').innerHTML =newam + '/-'
   var expenses = {
      cost: expense,
      name:describe
   }
   if(localStorage.getItem('desc') === null){
      var desc  = [];
      desc.push(expenses)
      localStorage.setItem('desc',JSON.stringify(desc))
   }else{
      var marks = JSON.parse(localStorage.getItem('desc'))
      marks.push(expenses);
      localStorage.setItem('desc',JSON.stringify(marks))
   }
    document.getElementById('expenses').value = ""
    document.getElementById('describe').value = ""
    console.log(amount)
    fetchCost()
   e.preventDefault()
}
function  fetchCost()
{
   var marks = JSON.parse(localStorage.getItem('desc'))
   var expensesResult = document.getElementById('tbody');
   expensesResult.innerHTML = ""
   for(var i=0; i < marks.length ; i++)
   {
      var cost = marks[i].cost
      var name = marks[i].name
      expensesResult.innerHTML +=`<tr><td>${name}</td><td>${cost}/-</td>` 
   }
}