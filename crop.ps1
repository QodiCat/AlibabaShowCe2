Add-Type -AssemblyName System.Drawing
$out=Join-Path $PSScriptRoot 'web/dist/assets'
New-Item -ItemType Directory -Force $out | Out-Null
function Crop($n,$name,$x,$y,$w,$h){
 $im=[Drawing.Image]::FromFile((Join-Path $PSScriptRoot "web/dist/slides/slide-$n.jpg"))
 $r=New-Object Drawing.Rectangle ([int]($x*$im.Width)),([int]($y*$im.Height)),([int]($w*$im.Width)),([int]($h*$im.Height))
 $b=New-Object Drawing.Bitmap $r.Width,$r.Height
 $g=[Drawing.Graphics]::FromImage($b);$g.DrawImage($im,(New-Object Drawing.Rectangle 0,0,$r.Width,$r.Height),$r,[Drawing.GraphicsUnit]::Pixel)
 $b.Save((Join-Path $out "$name.jpg"),[Drawing.Imaging.ImageFormat]::Jpeg);$g.Dispose();$b.Dispose();$im.Dispose()
}
Crop 1 cover 0 .32 .94 .68
Crop 2 contents .02 .23 .39 .72
Crop 3 about .30 .45 .64 .41
Crop 4 supply .02 .255 .59 .335
Crop 5 life 0 .31 .60 .68
Crop 6 wrist .04 .235 .30 .27
Crop 6 kettle .37 .145 .59 .38
Crop 6 tube .04 .57 .55 .24
Crop 6 loop .04 .86 .55 .11
Crop 6 bottle .62 .59 .34 .38
Crop 7 mat .03 .16 .55 .51
Crop 7 blocks .61 .15 .36 .21
Crop 7 ball .61 .40 .36 .27
Crop 7 roller .02 .73 .37 .22
Crop 7 towel .41 .73 .30 .22
Crop 7 massage .73 .73 .25 .22
Crop 8 eva .06 .195 .48 .35
Crop 8 corkblock .465 .64 .48 .33
Crop 9 collection 0 .18 .57 .68
Crop 9 camo .59 .62 .39 .23
Crop 10 pu 0 .18 .48 .27
Crop 10 tpe .51 .18 .46 .27
Crop 10 suede 0 .64 .31 .22
Crop 10 cork .33 .64 .31 .22
Crop 10 jute .66 .64 .31 .22
Crop 11 mats 0 .175 .64 .66
Crop 12 compliance .03 .87 .95 .13
Crop 13 report .075 .19 .36 .38
Crop 13 results .54 .23 .36 .38
Crop 13 sample .54 .67 .27 .30
Crop 14 factory .05 .32 .90 .32
Crop 15 custom .03 .22 .57 .51
