$(function(){
    $("#no_reff").autocomplete({
        source:"auto1.php",
        minLength:2,
        select:function(event,data){
            $('input[name=nama_akun]').val(data.item.nama_akun);
        }
    });
});