class Calculator{constructor(firstoperandTextElement,currentoperandTextElement){this.firstoperandTextElement=firstoperandTextElement
this.currentoperandTextElement=currentoperandTextElement
this.clear()}
clear(){this.firstoperand=''
this.currentoperand=''
this.operation=undefined}
delete(){this.currentoperand=this.currentoperand.toString().slice(0,-1)}
appendNumber(number){if(number==='.'&&this.currentoperand.includes('.'))return
this.currentoperand=this.currentoperand.toString()+number.toString()}
chooseoperation(operation){if(this.currentoperand==='')return
if(this.firstoperand!=''){this.compute()}
this.operation=operation
this.firstoperand=this.currentoperand
this.currentoperand=''}
compute(){let computation
const prev=parseFloat(this.firstoperand)
const current=parseFloat(this.currentoperand)
if(isNaN(prev)||isNaN(current))return
switch(this.operation){case '+':computation=prev+current
break
case '-':computation=prev-current
break
case '*':computation=prev*current
break
case '÷':computation=prev/current
break
case '+':computation=prev+current
break
default:return}
this.currentoperand=computation
this.operation=undefined
this.firstoperand=''}
getdisplay(number){const stringnumber=number.toString()
const integerdigits=parseFloat(stringnumber.split('.')[0])
const decimaldigits=stringnumber.split('.')[1]
let integerDisplay
if(isNaN(integerdigits)){integerDisplay=''}else{integerDisplay=integerdigits.toLocaleString('en',{maximumFractionDigits:0})}
if(decimaldigits!=null){return `${integerDisplay}.${decimaldigits}`}else{return integerDisplay}}
updatedisplay(){this.currentoperandTextElement.innerText=this.getdisplay(this.currentoperand)
if(this.operation!=null){this.firstoperandTextElement.innerText=`${this.getdisplay(this.firstoperand )} ${ this.operation }`}
else{this.firstoperandTextElement.innerText=''}}}
const numberbuttons=document.querySelectorAll('[data-number]')
const operationbuttons=document.querySelectorAll('[data-operation]')
const equaltobutton=document.querySelector('[data-equalto]')
const cancelbutton=document.querySelector('[data-cancel]')
const acbutton=document.querySelector('[data-clear]')
const firstoperandTextElement=document.querySelector('[data-first-operand]')
const currentoperandTextElement=document.querySelector('[data-current-operand]')
const calculator=new Calculator(firstoperandTextElement,currentoperandTextElement)
numberbuttons.forEach(button=>{button.addEventListener('click',()=>{calculator.appendNumber(button.innerText)
calculator.updatedisplay()})})
operationbuttons.forEach(button=>{button.addEventListener('click',()=>{console.log("he");calculator.chooseoperation(button.innerText)
calculator.updatedisplay()})})
equaltobutton.addEventListener('click',button=>{calculator.compute()
calculator.updatedisplay()})
acbutton.addEventListener('click',button=>{calculator.clear()
calculator.updatedisplay()})
cancelbutton.addEventListener('click',button=>{calculator.delete()
calculator.updatedisplay()})
