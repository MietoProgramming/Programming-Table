let NbBucket = 1;
let NbBucketCard = 1;
let NbAutTaks = 1;
let col = 0;
let row = 0;

function addcard()
{

    var name = document.getElementById("InName").value;
    var time = document.getElementById("InTime").value;
    var category = document.getElementById("InCategory").value;
    var style = document.getElementById("selectstyle").value;
    console.log(NbBucket);
    switch(NbBucket)
    {
        case 1:
            document.getElementById("startbucket1").innerHTML = "";
            document.getElementById("startbucket1").innerHTML = '<div id="list'+ NbBucketCard +'" class="list" draggable="true" ondragstart="dragStart(event)"><div class="heading"><p class="list-title">'+name+'</p></div><div class="cards"><div class="list-card"><p>Time: '+time+'</p><p>Category: '+category+'</p></div></div></div>';
            NbBucketCard += 1;
            break;

        case 2:
            document.getElementById("startbucket2").innerHTML = "";
            document.getElementById("startbucket2").innerHTML = '<div id="list'+ NbBucketCard +'" class="list" draggable="true" ondragstart="dragStart(event)"><div class="heading"><p class="list-title">'+name+'</p></div><div class="cards"><div class="list-card"><p>Time: '+time+'</p><p>Category: '+category+'</p></div></div></div>';
            NbBucketCard += 1;
            break;

        case 3:
            document.getElementById("startbucket3").innerHTML = "";
            document.getElementById("startbucket3").innerHTML = '<div id="list'+ NbBucketCard +'" class="list" draggable="true" ondragstart="dragStart(event)"><div class="heading"><p class="list-title">'+name+'</p></div><div class="cards"><div class="list-card"><p>Time: '+time+'</p><p>Category: '+category+'</p></div></div></div>';
            NbBucketCard += 1;
            NbBucket = 0;
            break;

        default:
            alert("Something went wrong! Check you choices and try again!");
            NbBucket -= 1;
            break;
    }

    var tds = document.getElementsByClassName("list");
    if (style == "black-white")
    {
        for(var i = 0; i < tds.length; i++)
        {
            tds[i].style.backgroundColor = "white";
        }
    }
    else if (style == "blue")
    {
        for(var i = 0; i < tds.length; i++)
        {
            tds[i].style.backgroundColor = "#80b3ff";
        }
    }
    else if (style == "green")
    {
        for(var i = 0; i < tds.length; i++)
        {
            tds[i].style.backgroundColor = "#80ff80";
        }
    }
    else
    {
        for(var i = 0; i < tds.length; i++)
        {
            tds[i].style.backgroundColor = "transparent";
        }
    }

    NbBucket += 1;
}

const dragStart = (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
}

const allowDrop = (event) => {
  event.preventDefault();
}

const drop = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const element = document.querySelector(`#${data}`);
  try {
    event.target.appendChild(element);
  } catch (error) {
    console.warn("you can't move the item to the same place")
  }
}

const leave = (event) => {
    event.preventDefault();
}

function Check()
{
    var days = parseInt(document.getElementById("InDays").value);
    var tasks = parseInt(document.getElementById("InTasks").value);
    if ((days >= 1 && days <= 7) && (tasks >= 1 && tasks <= 5))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function changeForm()
{
    var state = document.getElementById("selectmode").value;
    if (state == "manual")
    {
        document.getElementById("formbox").innerHTML = '<div id="databox"><div class="menuText">Name:</div> <input type="text" id="InName" name="inname" maxlength="50"><div class="menuText">Time:</div> <input type="number" id="InTime" name="intime" min="1" max="960"><div class="menuText">Category: </div><input type="text" id="InCategory" name="incategory" maxlength="50"></div><div><select id="selectmode" onchange="changeForm()"><option value="manual">Manual</option><option value="automatic">Automatic</option></select><select id="selectstyle" onchange="ChangeStyle()"><option value="black-white">Black-White</option><option value="blue">Blue</option><option value="green">Green</option><option value="transparent">Transparent</option></select></div><input type="button" id="InButt" value="Add" onclick="addcard()">';}
    // else if (state == "automatic")
    // {
    //     NbAutTaks = 1;
    //     document.getElementById("databox").innerHTML = 'Time: <input type="number" id="InTime" name="intime">Min Time: <input type="number" id="InMinTime" name="inmintime">Max Time: <input type="number" id="InMaxTime" name="inmaxtime"><div><input type="button" id="InButt" value="Add" onclick="addtask()"></div><div id="autodiv"><h1>TASKS:</h1></div><form method="POST" action="Django part"><input type="button" id="InGenTab" value="Generate" onclick="sendtogenerate"></form>';
    // }
    // else
    // {
    //     alert("What's wrong! Check your choice and try again.");
    // }
}

function Print()
{
    var img = window.open("","PRINT", " height=800, width=600 ");
    var content = document.getElementById("gentable").innerHTML;
    img.document.write('<html><head><meta charset="utf-8"><link rel="stylesheet" href="styles.css"></head><body style="background-color:white;"><div id="toprint">');
    img.document.write(content);
    img.document.write('</div></body></html>');
    img.document.close();
    img.focus();
    setTimeout(function(){img.print();img.close();},500);
    return true;
}

function ChangeStyle()
{
    var style = document.getElementById("selectstyle").value
    switch(style)
    {
        case "transparent":
             for(var r = 0; r <= row; r++)
        {
            for(var c = 0; c < col; c++)
            {
            document.getElementById("plantabgen").rows[r].cells[c].style.backgroundColor = "transparent" ;
            document.getElementById("plantabgen").rows[r].cells[c].style.color = "black" ;
            document.getElementById("plantabgen").rows[r].cells[c].style.borderColor = "black" ;
            }
        }
    break;

    case "black-white":
             for(var r = 0; r <= row; r++)
        {
            if (r == 0)
            {
                for(var c = 0; c < col; c++)
                {
                document.getElementById("plantabgen").rows[r].cells[c].style.backgroundColor = "black" ;
                document.getElementById("plantabgen").rows[r].cells[c].style.color = "white" ;
                document.getElementById("plantabgen").rows[r].cells[c].style.borderColor = "grey" ;
                }
                continue
            }
            if ((r%2 == 0) && (r != 0))
            {
                for(var c = 0; c < col; c++)
                {
                document.getElementById("plantabgen").rows[r].cells[c].style.backgroundColor = "black" ;
                document.getElementById("plantabgen").rows[r].cells[c].style.borderColor = "grey" ;
                }
                continue
            }
            else
            {
                for(var c = 0; c < col; c++)
                {
                document.getElementById("plantabgen").rows[r].cells[c].style.backgroundColor = "white" ;
                document.getElementById("plantabgen").rows[r].cells[c].style.color = "black" ;
                document.getElementById("plantabgen").rows[r].cells[c].style.borderColor = "grey" ;
                }
                continue
            }
        }
    break;

    case "blue":
             for(var r = 0; r <= row; r++)
        {
            if (r == 0)
            {
                for(var c = 0; c < col; c++)
                {
                document.getElementById("plantabgen").rows[r].cells[c].style.backgroundColor = "#003380" ;
                document.getElementById("plantabgen").rows[r].cells[c].style.color = "white" ;
                document.getElementById("plantabgen").rows[r].cells[c].style.borderColor = "black" ;
                }
                continue
            }
            if ((r%2 == 0) && (r != 0))
            {
                for(var c = 0; c < col; c++)
                {
                document.getElementById("plantabgen").rows[r].cells[c].style.backgroundColor = "#80b3ff" ;
                document.getElementById("plantabgen").rows[r].cells[c].style.borderColor = "black" ;
                }
                continue
            }
            else
            {
                for(var c = 0; c < col; c++)
                {
                document.getElementById("plantabgen").rows[r].cells[c].style.backgroundColor = "#1a75ff" ;
                document.getElementById("plantabgen").rows[r].cells[c].style.borderColor = "black" ;
                }
                continue
            }
        }
    break;

    case "green":
        for(var r = 0; r <= row; r++)
        {
            if (r == 0)
            {
                for(var c = 0; c < col; c++)
                {
                document.getElementById("plantabgen").rows[r].cells[c].style.backgroundColor = "#008000" ;
                document.getElementById("plantabgen").rows[r].cells[c].style.color = "white" ;
                document.getElementById("plantabgen").rows[r].cells[c].style.borderColor = "black" ;
                }
                continue
            }
            if ((r%2 == 0) && (r != 0))
            {
                for(var c = 0; c < col; c++)
                {
                document.getElementById("plantabgen").rows[r].cells[c].style.backgroundColor = "#1aff1a" ;
                document.getElementById("plantabgen").rows[r].cells[c].style.borderColor = "black" ;
                }
                continue
            }
            else
            {
                for(var c = 0; c < col; c++)
                {
                document.getElementById("plantabgen").rows[r].cells[c].style.backgroundColor = "#80ff80" ;
                document.getElementById("plantabgen").rows[r].cells[c].style.borderColor = "black" ;
                }
                continue
            }
        }
    break;

    default:
        alert("Client found a problem! Try again.")
    break;
    }
}


function addtask()
{
    if (NbAutTaks <= 12)
    {
        var time = document.getElementById("InTime").value;
        var mintime = document.getElementById("InMinTime").value;
        var maxtime = document.getElementById("InMaxTime").value;

        document.getElementById("autodiv").innerHTML += '<li>'+NbAutTaks+'. Time: '+time+' Min Time: '+mintime+' Max Time: '+maxtime+'</li>';
        NbAutTaks += 1;
    }
    else
    {
        alert("Too many tasks! Maximum number of tasks is 12.")
    }
}

function TabCreate()
{
    if(Check())
    {
        //alert("Work!");
        col = parseInt(document.getElementById("InDays").value);
        row = parseInt(document.getElementById("InTasks").value);
        var text = "";
        var DayArr = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        text += "<div id='gentable'>";
        text += '<table id="plantabgen" class="container" ondrag="leave(event)">';
        text += "<tr class='wdays'>";
        for(var days = 0; days < col; days++)
        {
            text += "<td class='DayTabCell'> " + DayArr[days] + " </td>";
        }
        text += "</tr>";

        for(var r = 1; r <= row; r++)
        {

            if (r%2 == 0)
            {
                text += "<tr>";
                for(var c = 1; c <= col; c++)
                {
                        text += '<td class="startbucketcell TabCell1" ondragover="allowDrop(event)" ondrop="drop(event)"></td>';
                }
                text += "</tr>";            }
            else
            {
                text += "<tr>";
                for(var c = 1; c <= col; c++)
                {
                        text += '<td class="startbucketcell TabCell2" ondragover="allowDrop(event)" ondrop="drop(event)"></td>';
                }
                text += "</tr>";
            }




        }
        text += "</table></div><input type='button' id='buttExp' value='Print your schedule!' onclick='Print()'>";

        var form = '<div id="databox"><div class="menuText">Name:</div> <input type="text" id="InName" name="inname" maxlength="50"><div class="menuText">Time:</div> <input type="number" id="InTime" name="intime" min="1" max="960"><div class="menuText">Category: </div><input type="text" id="InCategory" name="incategory" maxlength="50"></div><div><select id="selectmode" onchange="changeForm()"><option value="manual">Manual</option><option value="automatic">Automatic</option></select><select id="selectstyle" onchange="ChangeStyle()"><option value="black-white">Black-White</option><option value="blue">Blue</option><option value="green">Green</option><option value="transparent">Transparent</option></select></div><input type="button" id="InButt" value="Add" onclick="addcard()">';

        document.getElementById("tablebox").innerHTML = text;
        document.getElementById("formbox").innerHTML = form;
    }

    else
    {
        alert("Bad data.Choose other number of days or tasks.");
    }


}
