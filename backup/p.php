<?
if ($_REQUEST['code']==7979){
    header('Content-type: text/plaintext');
    $page = file_get_contents($_REQUEST['url']);
    echo utf8_decode($page);
}else
    echo "Ingreso no autorizado...";
?>
        
