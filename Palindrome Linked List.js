function textProcessor()
    {
        var numArr = document.getElementById('entry').value.split('');
        document.getElementById('result').innerHTML = isPalindrome(numArr);
    }
    var isPalindrome = function(head) {
        var isTrue = true;
        for (var i = 0; i < head.length; i++)
        {
            if (head[i] != head.reverse()[i])
                isTrue = false;
            else
                continue;
        }
        return isTrue;
    };