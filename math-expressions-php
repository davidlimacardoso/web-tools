function callback1($m) {return calc($m[1]);}
function callback2($n,$m) {
    $o=$m[0];
    $m[0]=' ';
    return $o=='+' ? $n+$m : ($o=='-' ? $n-$m : ($o=='*' ? $n*$m : $n/$m));
}
function calc($s){ 
    while ($s != ($t = preg_replace_callback('/\(([^()]*)\)/','callback1',$s))) $s=$t;
		preg_match_all('![-+/*].*?[\d.]+!', "+$s", $m);
		return array_reduce($m[0], 'callback2');
}
 
$str = '(10 + 20) * 5';
echo calc($str);
