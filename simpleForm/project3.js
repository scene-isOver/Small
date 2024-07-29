function editData(data)
{
    var row=data.parentNode.parentNode;//先获取这一行数据
    var name=row.cells[0];
    var sex=row.cells[1];
    var number=row.cells[2];
    
    var inputName=prompt("请输入名字：");
    var inputSex=prompt("请输入性别：");
    var inputNumber=prompt("请输入电话号码：");

    if(!inputName&&!inputSex&&!inputNumber)
    {
        return;
    }

    name.innerHTML=inputName;
    sex.innerHTML=inputSex;
    number.innerHTML=inputNumber;
}

function deleteData(data)
{
    var row=data.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function addData()
{
    var table=document.getElementById("table");
    var length=table.rows.length;
    var newData=table.insertRow(length);//插入的位置

    //插入列
    var nameCol=newData.insertCell(0);
    var sexCol=newData.insertCell(1);
    var numCol=newData.insertCell(2);
    var actCol=newData.insertCell(3);

    //插入数据
    nameCol.innerHTML="未命名";
    sexCol.innerHTML="未知";
    numCol.innerHTML="无联系方式";
    actCol.innerHTML='<button onclick="editData(this);">编辑</button><button onclick="deleteData(this);">删除</button>'
}