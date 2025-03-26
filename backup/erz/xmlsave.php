<?php
/* 
 * Write XML (DOMDocument) with 3 serial array
 * 
 */
    $doc = new DOMDocument();
    $doc->formatOutput = true;
    $root = $doc->createElement('relation');
    $doc->appendChild($root);

    $root_a = $doc->createAttribute('name');
    $root->appendChild($root_a);
    $root_t = $doc->createTextNode($_REQUEST["location"]);
    $root_a->appendChild($root_t);

    $root_a = $doc->createAttribute('pass');
    $root->appendChild($root_a);
    $root_t = $doc->createTextNode($_REQUEST["pass"]);
    $root_a->appendChild($root_t);

    $root_a = $doc->createAttribute('version');
    $root->appendChild($root_a);
    $root_t = $doc->createTextNode('1.0');
    $root_a->appendChild($root_t);

    $root_a = $doc->createAttribute('relationship_type');
    $root->appendChild($root_a);
    $root_t = $doc->createTextNode($_REQUEST["reltype"]);
    $root_a->appendChild($root_t);


    $etemp = explode (",",$_REQUEST["entities"]);
    $atemp = explode (",",$_REQUEST["attributes"]);
    $rtemp = explode (",",$_REQUEST["relations"]);
    if (count($etemp)>2){
        $es = $doc->createElement('entities');
        $root->appendChild($es);

        for ($i=0;$i<count($etemp);$i=$i+3){
            //entidades
            //$i+3 because have 3 values each entity in serial array
            $e = $doc->createElement('entity');
            $es->appendChild($e);

            $ea = $doc->createAttribute('name');
            $e->appendChild($ea);
            $et = $doc->createTextNode($etemp[$i]);
            $ea->appendChild($et);
    
            $ea = $doc->createAttribute('x');
            $e->appendChild($ea);
            $et = $doc->createTextNode($etemp[$i+1]);
            $ea->appendChild($et);

            $ea = $doc->createAttribute('y');
            $e->appendChild($ea);
            $et = $doc->createTextNode($etemp[$i+2]);
            $ea->appendChild($et);

            if (count($atemp)>9){
                
                $as = $doc->createElement('attributes');
                $e->appendChild($as);
        
                for ($j=0;$j<count($atemp);$j=$j+10){
                    //attributes
                    //$i+10 because have 10 values each entity in serial array
                    if ($atemp[$j]==$etemp[$i]){
                        $a = $doc->createElement('attribute');
                        $as->appendChild($a);

                        $aa = $doc->createAttribute('name');
                        $a->appendChild($aa);
                        $at = $doc->createTextNode($atemp[$j+1]);
                        $aa->appendChild($at);
    
                        $aa = $doc->createAttribute('type');
                        $a->appendChild($aa);
                        $at = $doc->createTextNode($atemp[$j+2]);
                        $aa->appendChild($at);
    
                        $aa = $doc->createAttribute('width');
                        $a->appendChild($aa);
                        $at = $doc->createTextNode($atemp[$j+3]);
                        $aa->appendChild($at);
    
                        $aa = $doc->createAttribute('scale');
                        $a->appendChild($aa);
                        $at = $doc->createTextNode($atemp[$j+4]);
                        $aa->appendChild($at);
    
                        $aa = $doc->createAttribute('null');
                        $a->appendChild($aa);
                        $at = $doc->createTextNode($atemp[$j+5]);
                        $aa->appendChild($at);
    
                        $aa = $doc->createAttribute('identity');
                        $a->appendChild($aa);
                        $at = $doc->createTextNode($atemp[$j+6]);
                        $aa->appendChild($at);
    
                        $aa = $doc->createAttribute('seed');
                        $a->appendChild($aa);
                        $at = $doc->createTextNode($atemp[$j+7]);
                        $aa->appendChild($at);
    
                        $aa = $doc->createAttribute('increment');
                        $a->appendChild($aa);
                        $at = $doc->createTextNode($atemp[$j+8]);
                        $aa->appendChild($at);
    
                        $aa = $doc->createAttribute('pk');
                        $a->appendChild($aa);
                        $at = $doc->createTextNode($atemp[$j+9]);
                        $aa->appendChild($at);
                    }
                }
            }
        }
    }
    
    if (count($rtemp)>3){
        $rs = $doc->createElement('relationships');
        $root->appendChild($rs);

        for ($i=0;$i<count($rtemp);$i=$i+5){
            //relationships
            //$i+5 because have 5 values each entity in serial array
            $r = $doc->createElement('relationship');
            $rs->appendChild($r);

            $ra = $doc->createAttribute('parent');
            $r->appendChild($ra);
            $rt = $doc->createTextNode($rtemp[$i]);
            $ra->appendChild($rt);

            $ra = $doc->createAttribute('child');
            $r->appendChild($ra);
            $rt = $doc->createTextNode($rtemp[$i+1]);
            $ra->appendChild($rt);

            $ra = $doc->createAttribute('card_parent');
            $r->appendChild($ra);
            $rt = $doc->createTextNode($rtemp[$i+2]);
            $ra->appendChild($rt);

            $ra = $doc->createAttribute('card_child');
            $r->appendChild($ra);
            $rt = $doc->createTextNode($rtemp[$i+3]);
            $ra->appendChild($rt);

            $ra = $doc->createAttribute('dependency');
            $r->appendChild($ra);
            $rt = $doc->createTextNode($rtemp[$i+4]);
            $ra->appendChild($rt);

        }
    }

    echo 'File Saved. Wrote: ' . $doc->save($_REQUEST["location"]) . ' bytes.';
?>
