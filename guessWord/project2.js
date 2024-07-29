var Words=["apple","orange","peach","pear","animal","cup"];
var Max_guess=6;//每局猜测的总次数
var word="?"//每局的随机单词
var count=Max_guess;//剩余次数
var Guesses="";//已经猜测的字母

//游戏开始
function begin()
{
    var index_random=parseInt(Math.random()*Words.length);
    word=Words[index_random];
    count=Max_guess;
    Guesses="";
    update();
}

function guessLetter()
{
    var clue=document.getElementById("clue");
    var input=document.getElementById("guess");
    var letter=input.value;
    if(count==0||clue.innerHTML.indexOf("_")<0||Guesses.indexOf(letter)>=0)
    {
        return;//该字母已经猜过了或者游戏结束
    }
    Guesses+=letter;//更新已经猜过的字母
    if(word.indexOf(letter)<0)
    {
        count--;//猜测错误
    }
    update();
}

//更新已经猜到的部分的字符串
function update()
{
    var clue_word="";
    for(var i=0;i<word.length;i++)//匹配猜到的字母的位置
    {
        var temp=word.charAt(i);
        if(Guesses.indexOf(temp)>=0)
        {
            clue_word+=temp+" ";
        }else
        {
            clue_word+="_ ";
        }
    }

    var clue=document.getElementById("clue");
    clue.innerHTML=clue_word;

    var Guess=document.getElementById("guesses");
    if(count==0&&clue_word.indexOf("_")>=0)
    {
        Guess.innerHTML="很遗憾，你输了！";
    }else if(clue_word.indexOf("_")<0)
    {
        Guess.innerHTML="恭喜你，猜对了！";
    }else
    {
        Guess.innerHTML="猜过的字母："+Guesses;
    }
}