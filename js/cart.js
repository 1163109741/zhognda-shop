$(".change").click(function(){
	$(this).next(".sizenam").css("display","block")
})
$(".size-sure").click(function(){
	$(this).parent(".sizenam").css("display","none")
})

$(".plus").click(function(){  
  var me = $ (this), txt = me.prev (":text"), pc;
	txt.val(parseInt(txt.val())+1);  
	$(".min").removeAttr("disabled"); 
}) 
$(".min").click(function(){  
  var me = $ (this), txt = me.next (":text"), pc;
	 if (parseInt(txt.val())>1) {                
		txt.val(parseInt(txt.val())-1)  
		}else{  
		$(".min").attr("disabled","disabled")  
	 } 
}) 
$(".caryh p").each(function(){
  $(this).click(function(){
    $(this).addClass("act").siblings().removeClass("act");
   })
 })

  $(".GoodsCheck").click(function() {
    var goods = $(this).closest(".one-shop").find(".GoodsCheck");
    var goodsC = $(this).closest(".one-shop").find(".GoodsCheck:checked");
    var Shops = $(this).closest(".one-shop").find(".ShopCheck"); 
    if (goods.length == goodsC.length) {
      Shops.prop('checked', true);
      if ($(".ShopCheck").length == $(".ShopCheck:checked").length) {
        $("#AllCheck").prop('checked', true);
        TotalPrice();
      } else {
        $("#AllCheck").prop('checked', false); 
        TotalPrice();
      }
    } else {
      Shops.prop('checked', false);
      $("#AllCheck").prop('checked', false);
      TotalPrice();
    }
  });
  $(".ShopCheck").change(function() {
    if ($(this).prop("checked") == true) { 
      $(this).parents(".one-shop").find(".goods-check").prop('checked', true); 
      if ($(".ShopCheck").length == $(".ShopCheck:checked").length) {
        $("#AllCheck").prop('checked', true); 
        TotalPrice();
      } else {
        $("#AllCheck").prop('checked', false); 
        TotalPrice();
      }
    } else {
      $(this).parents(".one-shop").find(".goods-check").prop('checked', false);
      $("#AllCheck").prop('checked', false);
      TotalPrice();
    }
  });
  $("#AllCheck").click(function() {
    if ($(this).prop("checked") == true) {
      $(".goods-check").prop('checked', true);
      TotalPrice();
    } else {
      $(".goods-check").prop('checked', false); 
      TotalPrice();
    }
    $(".ShopCheck").change();
  });

