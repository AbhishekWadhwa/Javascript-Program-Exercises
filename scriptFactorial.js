function show() {

        var i, no, fact;
        fact = 1;
        no = Number(document.getElementById("num").value);
        for (i = 1; i <= no; i++) {
            fact = fact * i;
        }
        fact = parseInt(fact);
        document.getElementById("answer1").innerHTML = fact;
    }