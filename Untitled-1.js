
//function disp_alert(){alert( 'WARNING!!');}


function getTypes(){
	$.getJSON("selecttypes.php",{brandselect:$("#brandselect").val()},function(json){ 
var typeselect = $("#typeselect"); 
$("option",typeselect).remove(); //清空原有的选项
$.each(json,function(index,array){ 
var option = "<option value='"+array['type_id']+"'>"+array['type_name']+"</option>"; 
typeselect.append(option); 
}); 
}); 
}

function getColors(){
	$.getJSON("selectcolors.php",{typeselect:$("#typeselect").val()},function(json){ 
var colorselect = $("#colorselect"); 
$("option",colorselect).remove(); 
$.each(json,function(index,array){ 
var option = "<option value='"+array['color_id']+"'>"+array['color_name']+"</option>"; 
colorselect.append(option); 
}); 
}); 
}



$().ready(function(){ 
getTypes(); 

$("#test").click(function(){
	alert("It's fine!");
});
	
$("#brandselect").change(function(){  //品牌部分有变动时，执行getTypes()函数 
getTypes(); 
});

  $("#typeselect").change(function(){//型号部分有变动时，执行getColors()函数 
   getColors(); 
     });


	
  $("#submit").click(function(){
	
    $.get("result.php", {
        brandselect:$("#brandselect").val(), typeselect:$("#typeselect").val(), colorselect:$("#colorselect").val()}, function(data) {
         console.log;
            $("#div").html(data);}
      )
  });
   	
}); 
