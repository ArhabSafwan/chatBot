function talk(){
    var know ={
        "Hello":"Hi , I am A ChatBot",
        "Hi":"What's Up ?",
        "How Are You?":" I am Great !",
        "Bye":"Bye , Have A Great Day ! ! !",
        "what colour do you like?":"Well , I Think Blue Is Pretty Nice (:",
        "Naman":"Professional Coder",
        "Jarvis":"AI Automation System",
        "How Are You?":"Great"
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('display').innerHTML = user + "<br>";
    if (user in know){
        document.getElementById('display').innerHTML = know[user] + "<br>";
    }else{
        document.getElementById('display').innerHTML = "Sorry , I Did Not Understand";

    }
}