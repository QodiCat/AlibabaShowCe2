Add-Type -AssemblyName System.Drawing
$out=Join-Path $PWD 'web/dist/assets'
function Crop($n,$name,$x,$y,$w,$h){
 $im=[Drawing.Image]::FromFile((Join-Path $PWD ".work/slide-$n.png"))
 $r=[Drawing.Rectangle]::new([int]($x*$im.Width),[int]($y*$im.Height),[int]($w*$im.Width),[int]($h*$im.Height))
 $b=[Drawing.Bitmap]::new($r.Width,$r.Height)
 $g=[Drawing.Graphics]::FromImage($b);$g.DrawImage($im,([Drawing.Rectangle]::new(0,0,$r.Width,$r.Height)),$r,[Drawing.GraphicsUnit]::Pixel)
 $b.Save((Join-Path $out "$name.jpg"),[Drawing.Imaging.ImageFormat]::Jpeg);$g.Dispose();$b.Dispose();$im.Dispose()
}
Crop 1 cover 0 .15 1 .68
Crop 2 contents .01 .24 .44 .76
Crop 3 about .06 .43 .88 .43
Crop 4 supply .02 .25 .96 .325
Crop 5 life .055 .30 .56 .63
Crop 7 mats 0 .26 .57 .56
Crop 7 matdetail .67 .49 .29 .27
Crop 8 pu .51 .17 .46 .165
Crop 8 tpe .02 .34 .46 .16
Crop 8 suede .51 .51 .46 .16
Crop 8 cork .02 .68 .46 .145
Crop 8 jute .51 .84 .46 .14
Crop 9 collection 0 .27 .57 .55
Crop 9 blockdetail .63 .61 .34 .20
Crop 10 eva .04 .22 .48 .33
Crop 10 corkblock .48 .62 .49 .32
Crop 11 massageuse 0 .32 .56 .51
Crop 11 massagedetail .62 .64 .27 .18
Crop 12 evaball .06 .29 .41 .46
Crop 12 pvcball .52 .29 .44 .46
Crop 13 tpeband .06 .33 .57 .49
Crop 14 banduse .02 .31 .96 .36
Crop 15 wrist .02 .31 .59 .50
Crop 16 kettle .03 .20 .65 .62
Crop 17 towel .41 .20 .59 .58
Crop 18 rolleruse .06 .21 .57 .65
Crop 19 roller .06 .21 .32 .36
Crop 19 electricroller .54 .70 .43 .23
Crop 20 ball .06 .24 .55 .58
Crop 21 bottle .06 .27 .94 .42
Crop 22 ring .03 .26 .48 .36
Crop 22 ringtpe .66 .64 .30 .28
Crop 23 set .06 .28 .56 .52
Crop 24 compliance .06 .22 .88 .55
Crop 25 report .07 .20 .37 .38
Crop 25 results .54 .23 .38 .38
Crop 25 sample .54 .64 .30 .29
Crop 26 factory .05 .30 .90 .32
Crop 27 custom .03 .22 .57 .49
Crop 6 overview 0 0 1 1

