<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//echo "<script>var entities = [];var attributes = [];var relations = []; </script>"; //temporal

$xmlDoc = new DOMDocument();
//$xmlDoc->load("xml/test.xml"); //temporal
$xmlDoc->load($location); //temporal


$x = $xmlDoc->getElementsByTagName('relation');
foreach ($x AS $item){
    if ($item->getAttribute('relationship_type')=="Opposite"){

        echo "<script>document.getElementById('relationshipType').options[0].selected = true;</script>";
    }
    else{
        echo "<script>document.getElementById('relationshipType').options[1].selected = true;</script>";
    }
    $filepass = $item->getAttribute('pass');?>
    <script type="text/JavaScript">filepass = '<?echo $item->getAttribute('pass');?>';</script><?
}

$x = $xmlDoc->getElementsByTagName('entity');
foreach ($x AS $item){
    echo "<script>var entity = []; entity.push('".$item->getAttribute('name')."');";
    echo "entity.push('".$item->getAttribute('x')."');";
    echo "entity.push('".$item->getAttribute('y')."');";
    echo "entities.push(entity);</script>";
}


$x = $xmlDoc->getElementsByTagName('attribute');
foreach ($x AS $item){
    echo "<script>var attribute = []; attribute.push('".$item->parentNode->parentNode->getAttribute('name')."');";
    echo "attribute.push('".$item->getAttribute('name')."');";
    echo "attribute.push('".$item->getAttribute('type')."');";
    echo "attribute.push('".$item->getAttribute('width')."');";
    echo "attribute.push('".$item->getAttribute('scale')."');";
    echo "attribute.push('".$item->getAttribute('null')."');";
    echo "attribute.push('".$item->getAttribute('identity')."');";
    echo "attribute.push('".$item->getAttribute('seed')."');";
    echo "attribute.push('".$item->getAttribute('increment')."');";
    echo "attribute.push('".$item->getAttribute('pk')."');";
    echo "attributes.push(attribute);</script>";

}

$x = $xmlDoc->getElementsByTagName('relationship');
foreach ($x AS $item){
    echo "<script>var relation = []; relation.push('".$item->getAttribute('parent')."');";
    echo "relation.push('".$item->getAttribute('child')."');";
    echo "relation.push('".$item->getAttribute('card_parent')."');";
    echo "relation.push('".$item->getAttribute('card_child')."');";
    echo "relation.push('".$item->getAttribute('dependency')."');";
    echo "relations.push(relation);</script>";
}

?>
