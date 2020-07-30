function Answer_Check(answer) {
    
    var message = "";
    
    if (answer == 1) {
        message = "残念！不正解です";
    } else if (answer == 2) {
        message = "正解です！";
    } else if (answer == 3) {
        message = "残念！不正解です";
    }
    
    alert(message);
}