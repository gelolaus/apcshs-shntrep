function result() {
    var t0 = $("#txtval1").val();
    var t1 = $("#txtval2").val();
    if($("#operation").val() == '+'){
         var ans = parseInt(t0) + parseInt(t2);
         $("#txtval2").val(ans);  
    }
    else if($("#operation").val() == '-'){
         var ans = parseInt(t0) - parseInt(t2);
         $("#txtval2").val(ans);  
    }
    else if($("#operation").val() == '*'){
        var ans = parseInt(t0) * parseInt(t2);
        $("#txtval2").val(ans);  
    }
    else if($("#operation").val() == '/'){
        var ans = parseInt(t0) / parseInt(t2);
        $("#txtval2").val(ans);  
    }
    else {
        $("#txtval2").val("INVALID OPERATION");  
    }
  }

  function cleartxt() {
    $("#txtval0").val("");
    $("#txtval1").val("");
    $("#txtval2").val("");
    $("#operation").val("");
  }