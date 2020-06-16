// This is the main part of the calculator


var p = [1000,2000,3000,6500,10000];
var s = [2000,3000,5000,10000,15000];
var c = [0,1000,1500,3750,7500];
var d = [0,2000,4000,10000,25000];
var e = [0,2000,4000,10000,25000];
var cms = [0,2000,4000,10000,25000];
var se = [0,2000,4000,6000,10000];
var mincost = 0;
var maxcost = 0;
var x1 = document.querySelectorAll(".page");
var x2 = document.querySelectorAll(".styl");
var x3 = document.querySelectorAll(".copy");
var x4 = document.querySelectorAll(".data");
var x5 = document.querySelectorAll(".ecom");
var x6 = document.querySelectorAll(".cmss");
var x7 = document.querySelectorAll(".seot");

function costcal()
{
  for(var i = 1; i <= x1.length; i++)
  {
    if(x1[i-1].checked)
    {

      mincost = p[i-1];
      maxcost = p[i];
      break;
    }
  }

  for(var i = 1; i <= x2.length; i++)
  {
    if(x2[i-1].checked)
    {

      mincost += s[i-1];
      maxcost += s[i];
      break;
    }
  }

  for(var i = 1; i <= x3.length; i++)
  {
    if(x3[i-1].checked)
    {

      mincost += c[i-1];
      if(c[i-1] === 0)
      {
        break;
      }
      maxcost += c[i];
      break;
    }
  }

  for(var i = 1; i <= x4.length; i++)
  {
    if(x4[i-1].checked)
    {

      mincost += d[i-1];
      if(d[i-1] === 0)
      {
        break;
      }
      maxcost += d[i];
      break;
    }
  }

  for(var i = 1; i <= x5.length; i++)
  {
    if(x5[i-1].checked)
    {

      mincost += e[i-1];
      if(e[i-1] === 0)
      {
        break;
      }
      maxcost += e[i];
      break;
    }
  }

  for(var i = 1; i <= x6.length; i++)
  {
    if(x6[i-1].checked)
    {

      mincost += cms[i-1];
      if(cms[i-1] === 0)
      {
        break;
      }
      maxcost += cms[i];
      break;
    }
  }

  for(var i = 1; i <= x7.length; i++)
  {
    if(x7[i-1].checked)
    {

      mincost += se[i-1];
      if(se[i-1] === 0)
      {
        break;
      }
      maxcost += se[i];
      break;
    }
  }
}

function abc()
{
  costcal();
  document.querySelector(".Min").innerHTML = mincost;
  document.querySelector(".Max").innerHTML = maxcost;
  mincost = 0;
  maxcost = 0;
}

function chekbo(str)
{
  var str1 = str.substring(0,4);
  var clas = "."+ str1;
  var type = parseInt(str.charAt(5),10);
  console.log(type);
  for(var i =0 ; i<4; i++)
  {
    if(i !== type-1)
    {
      document.querySelectorAll(clas)[i].checked = false;
    }
  }
  document.querySelectorAll(clas)[type-1].checked = true;
}
document.querySelectorAll('.calcul').forEach(item => {
  item.addEventListener('click', event => {
    chekbo(item.getAttribute("class"));
    abc();
  })
})
