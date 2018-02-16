function getFiboSeries(){

    var number = document.getElementById('fibo_input');
    
    fibo_limit = parseInt(number.value);
    
    first = 1 ;
    second = 1;
    third=0;
    series = first+" "+second;
    console.log(series);
    for(i=0; i< fibo_limit;i++){
        third = first+second;
        series +=" " + third;
        first = second;
        second = third;
    }
    
    document.getElementById("fibo_display_div").innerHTML= series;
}