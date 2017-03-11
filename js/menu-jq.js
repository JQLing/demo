$(function(){
    $('#menu').on('click','li',function(){
        
        if($(this).hasClass('btn-active')){
            $('#up').click();
//            return false;
        }
        
        var curIndex=$(this).index();
        var mvDis='-' + curIndex * 100 +'%';
        
//        alert("curIndex"+curIndex +"mvDis:"+mvDis);
        if($('#menu_cont').hasClass('active')){
            $('#menu_cont_list').animate({marginLeft:mvDis});
        }else{ alert(mvDis);
            $('#menu_cont_list').css({marginLef:mvDis});
            $('#menu_cont').animate({height:'200px'}).addClass('active');
         // $('#menu_cont_list').css('margin-left',mvDis);
         }
        
        $(this).addClass('btn-active').siblings().removeClass('btn-active');
         return false;
        
        });
    
    
        $('#up').on('click',function(){
            $('#menu_cont').animate( {height:'0px'},function(){
                $(this).removeClass('active');
                $('#menu .btn-active').removeClass('btn-active');
            });
            return false;
        
        
    });
/*    
    $('#menu').children('li').each().click(function(index){
        console.log(index);
        $('#menu_cont_list').children().hide();
        $('#menu_cont_list').children().eq(index)
            .show();
        
    });
*/
});