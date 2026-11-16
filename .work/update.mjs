import fs from 'node:fs';
import vm from 'node:vm';
const path='web/dist/content.js';
const old=vm.runInNewContext(fs.readFileSync(path,'utf8')+';({pages,ui,chapters,testHead,testRows})');
const T=(en,zh,ja)=>({en,zh,ja});
const custom=T('Color, logo and packaging options vary by style. Request samples to check the look and feel before placing a bulk order.','可按款式选择颜色、标志与包装。大货下单前请通过样品确认外观与手感。','色、ロゴ、パッケージの対応はタイプにより異なります。量産発注前にサンプルで外観と手ざわりをご確認ください。');
const section=(h,t)=>[T(...h),T(...t)];
const page=(title,image,intro,sections=[],note=custom)=>({title:T(...title),image,intro:T(...intro),sections,note});
const p=old.pages;
p[2].intro=p[0].intro;
p[8].intro=T('Yoga blocks with grip, firmness, and finishes to suit your practice and your brand.','兼顾抓握感、坚实度与外观选择，适配您的练习与品牌。','グリップ感、硬さ、仕上げを選び、練習とブランドに合わせられるヨガブロック。');
p[10].intro=T('Explore textured surfaces and colors to suit your brand.','探索适配品牌的表面纹理与色彩。','ブランドに合う表面の質感と色をお選びください。');
const pages=[...p.slice(0,5),
{title:T('Product Range','产品范围','製品ラインアップ'),image:'overview',overview:true,intro:T('Yoga and fitness essentials for home practice, studios and everyday movement.','适用于居家练习、工作室与日常运动的瑜伽及健身用品。','自宅での練習、スタジオ、日々の運動に向けたヨガとフィットネス用品。'),products:[['mats',T('Yoga Mats','瑜伽垫','ヨガマット'),7],['collection',T('Yoga Blocks','瑜伽砖','ヨガブロック'),9],['ring',T('Pilates Rings','普拉提环','ピラティスリング'),22],['evaball',T('Massage Balls','按摩球','マッサージボール'),11],['banduse',T('Resistance Loop Bands','环形弹力带','ループバンド'),14],['wrist',T('Wrist Weights','腕部负重','リストウエイト'),15],['kettle',T('Kettlebells','壶铃','ケトルベル'),16],['tpeband',T('Stretch Bands','拉伸带','ストレッチバンド'),13],['towel',T('Sports Towels','运动毛巾','スポーツタオル'),17],['electricroller',T('Foam Rollers','泡沫轴','フォームローラー'),18],['ball',T('Yoga Balls','瑜伽球','ヨガボール'),20],['bottle',T('Sports Water Bottles','运动水壶','スポーツボトル'),21]]},
p[10],p[9],p[8],p[7],
page(['Massage Ball Collection','按摩球系列','マッサージボール コレクション'],'massageuse',[
'Designed for everyday relaxation after yoga or workouts. Roll under the soles of your feet or over areas such as the glutes.',
'适合瑜伽或训练后的日常放松，可在脚底或臀部等部位滚动使用。',
'ヨガや運動後の日々のリラックスに。足裏や臀部などに転がして使います。'],[
section(['EVA & PVC','EVA 与 PVC','EVA・PVC'],['Choose between EVA and PVC based on grip, surface feel, and how you plan to use them.','可根据抓握感、表面触感与使用方式选择 EVA 或 PVC。','グリップ感、表面の感触、使用方法に合わせてEVAまたはPVCを選べます。'])]),
{title:T('Massage Ball Materials','按摩球材质','マッサージボールの素材'),materials:[
['evaball',T('EVA Massage Ball','EVA 按摩球','EVAマッサージボール'),T('Lightweight EVA makes this ball easy to carry. Roll it under your foot while seated or use it on a mat for targeted relaxation.','轻量 EVA 材质便于携带。可坐姿置于脚底滚动，或在垫上进行局部放松。','軽量なEVAで持ち運びやすく、座った姿勢で足裏に転がしたり、マット上で部分的なリラックスに使えます。')],
['pvcball',T('PVC Massage Ball','PVC 按摩球','PVCマッサージボール'),T('Roll it by hand or use it against a wall. Choose a style based on how it feels, and use pressure and how much surface area it covers.','可手持滚动或靠墙使用。根据触感、使用压力与接触面积选择款式。','手で転がしたり、壁に当てて使います。感触、かける圧力、接触面積に合わせてタイプを選べます。')]]},
page(['TPE Resistance Band Collection','TPE 弹力带系列','TPEトレーニングバンド コレクション'],'tpeband',[
'Designed for warm-ups, assisted stretching, and everyday resistance training. Adjust your grip for shoulder, back, arm, and lower-body exercises.',
'适用于热身、辅助拉伸与日常阻力训练，可调整握持位置进行肩背、手臂与下肢练习。',
'ウォームアップ、補助ストレッチ、日々のレジスタンストレーニングに。握る位置を調整して肩、背中、腕、下半身の運動に使えます。'],[
section(['TPE material','TPE 材质','TPE素材'],['The flexible band provides resistance as it stretches and recoils when released. Choose a band that matches the range of motion and resistance you need.','柔韧带体拉伸时提供阻力，松开后回弹。请根据动作幅度与所需阻力选择。','柔軟なバンドが伸びるときに抵抗を生み、離すと戻ります。動作範囲と必要な抵抗に合わせて選べます。']),
section(['Band selection','弹力带选择','バンドの選び方'],['Consider length, how it feels as it stretches, and your range of motion. Request samples to confirm specifications and test how the band stretches before a bulk order.','选择时考虑长度、拉伸手感与动作范围，大货前可通过样品确认规格和拉伸表现。','長さ、伸ばしたときの感触、動作範囲をご検討ください。量産発注前にサンプルで仕様と伸び方を確認できます。'])]),
page(['Resistance Band Collection','环形弹力带系列','ループバンド コレクション'],'banduse',[
'Designed for home workouts, warm-ups, and glute and leg training. Add resistance to lateral walks, squats, and glute bridges.',
'适用于居家训练、热身与臀腿练习，为侧向行走、深蹲和臀桥增加阻力。',
'自宅での運動、ウォームアップ、臀部や脚のトレーニングに。サイドウォーク、スクワット、ヒップリフトに抵抗を加えます。'],[
section(['Fabric','织物','ファブリック'],['Woven fabric has a textured feel against the skin. Use it to add resistance to lateral walks and glute bridges.','编织面料具有纹理触感，适合为侧向行走与臀桥提供阻力。','織り生地の質感が肌に伝わります。サイドウォークやヒップリフトに抵抗を加えられます。']),
section(['TPE','TPE','TPE'],['Flexible TPE stretches and recoils as you move. It folds away easily and suits daily warm-ups and light resistance training.','柔韧 TPE 随动作伸展回弹，易于折叠收纳，适合日常热身与轻阻力训练。','柔軟なTPEが動きに合わせて伸縮します。折りたたみやすく、日々のウォームアップや軽い抵抗運動に適しています。'])],T('Choose fabric or TPE based on skin feel, stretch, and the exercises you do. Color, logo and packaging options vary by style; request samples before a bulk order.','可根据皮肤触感、拉伸表现与训练动作选择织物或 TPE。颜色、标志与包装按款式选择，大货前可申请样品。','肌ざわり、伸び方、運動内容に合わせてファブリックまたはTPEを選べます。色、ロゴ、包装はタイプにより異なります。量産前にサンプルをご請求ください。')),
page(['Wrist Weight Collection','腕部负重系列','リストウエイト コレクション'],'wrist',[
'Designed for home workouts, Pilates, and light upper-body training. Wear them on your wrists to keep your hands free for arm raises and stretches.',
'适合居家训练、普拉提与轻量上肢训练。佩戴于手腕，可腾出双手进行抬臂与拉伸。',
'自宅での運動、ピラティス、軽い上半身のトレーニングに。手首に着けることで、手を自由に使いながら腕上げやストレッチができます。'],[
section(['Silicone','硅胶','シリコーン'],['Smooth silicone feels soft against your wrist. Choose a style based on wrist circumference and how snug you want the fit.','光滑硅胶与手腕接触柔软，可根据腕围与所需贴合度选择款式。','なめらかなシリコーンが手首にやわらかく触れます。手首周りとお好みのフィット感に合わせて選べます。']),
section(['Wrist weights','腕部负重','リストウエイト'],['Add load to controlled arm raises, arm circles, and other upper-body movements. Choose a weight per wrist that suits your training.','为可控的抬臂、绕臂及其他上肢动作增加负重。请根据训练选择每只手腕的重量。','腕上げ、腕回しなどの上半身の動作に負荷を加えます。トレーニングに合う片手首あたりの重さを選んでください。'])]),
page(['Kettlebell Collection','壶铃系列','ケトルベル コレクション'],'kettle',[
'Compact weights for home strength training.','适合居家力量训练的紧凑型负重器材。','自宅の筋力トレーニングに使えるコンパクトなウエイト。'],[
section(['PVC style','PVC 款式','PVCタイプ'],['Compare handle thickness, grip clearance, and surface feel to find a PVC style that suits your grip.','比较手柄粗细、握持空间与表面触感，选择适合握持的 PVC 款式。','ハンドルの太さ、握る空間、表面の感触を比べて、握りやすいPVCタイプを選べます。']),
section(['Home strength','居家力量训练','自宅での筋力トレーニング'],['Use both hands for squats and deadlifts, or one hand for pulls. Choose a weight that suits the exercise and your training level.','可双手进行深蹲与硬拉，或单手进行提拉。根据动作与训练水平选择重量。','両手でスクワットやデッドリフト、片手でプル動作に使えます。運動とトレーニングレベルに合う重さを選んでください。'])],T('Discuss color, weight, logo, and packaging for your chosen style. Request samples to check appearance, weight, and grip before a bulk order.','可洽谈所选款式的颜色、重量、标志与包装，大货前通过样品确认外观、重量和握感。','お選びのタイプの色、重さ、ロゴ、包装をご相談ください。量産前にサンプルで外観、重さ、握り心地を確認できます。')),
page(['Sports Towel Collection','运动毛巾系列','スポーツタオル コレクション'],'towel',[
'Made for yoga, fitness, and everyday workouts. Wipe sweat from your face, hands, and body during breaks or after exercise.',
'适用于瑜伽、健身与日常运动，可在休息或训练后擦拭脸部、双手与身体的汗水。',
'ヨガ、フィットネス、日々の運動に。休憩中や運動後に顔、手、体の汗を拭けます。'],[
section(['Fiber fabric','纤维面料','繊維生地'],['Compare samples for fabric feel, thickness, and how well they absorb moisture.','通过样品比较面料触感、厚度与吸湿表现。','サンプルで生地の感触、厚さ、吸水性を比べられます。']),
section(['On the go','随行使用','持ち運びに'],['Choose a size based on how much you need to wipe and the space you have to store it. Pick a towel to carry with you or keep in your workout area.','根据擦拭需求与收纳空间选择尺寸，可随身携带或放置在训练区域。','拭く範囲と収納スペースに合わせてサイズを選び、持ち歩いたり運動スペースに置いたりできます。'])]),
page(['Foam Roller Collection','泡沫轴系列','フォームローラー コレクション'],'rolleruse',[
'ArchieNest foam rollers are designed for everyday rolling before and after exercise. Use them on a mat to roll areas like your calves and thighs.',
'ArchieNest 泡沫轴适合运动前后的日常滚动放松，可在垫上用于小腿、大腿等部位。',
'ArchieNestのフォームローラーは運動前後の日々のローリングに。マット上でふくらはぎや太ももなどに転がして使います。'],[
section(['Choose your roller','选择泡沫轴','ローラーを選ぶ'],['EVA foam rollers let you apply pressure manually. Electric foam rollers add vibration as you roll. Choose the rolling style that suits your routine.','EVA 泡沫轴通过手动控制施压，电动泡沫轴在滚动时增加振动，可根据日常使用习惯选择。','EVAフォームローラーは手動で圧力を調整でき、電動タイプは転がすときに振動を加えます。習慣に合う使い方を選べます。'])]),
{title:T('Foam Roller Options','泡沫轴款式','フォームローラーの種類'),materials:[
['roller',T('EVA Foam Roller','EVA 泡沫轴','EVAフォームローラー'),T('Made from EVA. Use your body weight to roll slowly over the surface. Adjust your body position and points of support to control pressure.','采用 EVA 材质，利用身体重量缓慢滚动，通过调整身体位置与支撑点控制压力。','EVA製。体重をかけてゆっくり転がし、姿勢や支える位置を調整して圧力を加減します。')],
['electricroller',T('Electric Foam Roller','电动泡沫轴','電動フォームローラー'),T('An electric motor adds vibration as you roll. Choose a model based on how it handles, how the vibration feels, and the features available.','电机在滚动时增加振动，可根据操作手感、振动感受及可用功能选择型号。','電動モーターがローリングに振動を加えます。扱いやすさ、振動の感触、搭載機能に合わせてモデルを選べます。')]]},
page(['Yoga Ball Collection','瑜伽球系列','ヨガボール コレクション'],'ball',[
'The ArchieNest yoga ball collection is designed for home workouts, balance practice, and assisted stretching. The ball provides support during seated and lying exercises.',
'ArchieNest 瑜伽球适用于居家训练、平衡练习与辅助拉伸，为坐姿和卧姿动作提供支撑。',
'ArchieNestのヨガボールは自宅での運動、バランス練習、補助ストレッチに。座ったり横になったりする運動で体を支えます。'],[
section(['PVC surface','PVC 表面','PVCの表面'],['Made of PVC, the ball inflates to form a rounded support surface. Choose a diameter, texture and shade that suit your space, and consider how the surface feels when inflated.','PVC 球体充气后形成圆形支撑面，可选择适合空间的直径、纹理与颜色，并确认充气后的表面触感。','PVC製のボールは空気を入れると丸い支持面になります。空間に合う直径、質感、色を選び、空気を入れた状態の感触を確認できます。']),
section(['Practice & storage','练习与收纳','練習と収納'],['Use the ball for seated balance drills to practice shifting your weight. When lying on your back, rest your calves on it for core exercises or leg stretches.','可坐在球上练习重心转移与平衡；仰卧时将小腿放于球上进行核心练习或腿部拉伸。','座って重心移動やバランスを練習できます。仰向けでふくらはぎを載せ、体幹運動や脚のストレッチにも使えます。'])]),
page(['Sports Bottle Collection','运动水壶系列','スポーツボトル コレクション'],'bottle',[
'For gym sessions, yoga, and the daily commute. Stay hydrated between exercises and on the go.',
'适合健身、瑜伽与日常通勤，在训练间隙及外出时补水。',
'ジム、ヨガ、日々の通勤に。運動の合間や外出先で水分補給できます。'],[
section(['Steel body','钢制瓶身','スチール製の本体'],['The range includes steel bottles with a metallic finish. Compare surface finishes, how the bottle feels in your hand, and its overall weight.','系列包含金属质感的钢制水壶，可比较表面处理、握持手感与整体重量。','金属の風合いを持つスチールボトルをご用意。表面仕上げ、持った感触、全体の重さを比べられます。']),
section(['Training & commutes','训练与通勤','トレーニングと通勤'],['Choose a capacity based on your daily water intake, workout length, and how you carry it. Compare bottle size, mouth width, and how the lid opens and closes.','根据日常饮水量、训练时长和携带方式选择容量，并比较瓶身尺寸、瓶口宽度与瓶盖开合方式。','日々の水分量、運動時間、持ち運び方に合う容量を選び、サイズ、飲み口の幅、ふたの開閉方法を比べられます。'])]),
page(['Pilates Ring Collection','普拉提环系列','ピラティスリング コレクション'],'ring',[
'For home Pilates and everyday fitness. Add resistance to upper-body and leg exercises with two-handed presses and seated ring squeezes.',
'适合居家普拉提与日常健身，可通过双手推压与坐姿夹环为上肢和腿部练习增加阻力。',
'自宅でのピラティスや日々の運動に。両手で押したり、座ってリングを挟んだりして、上半身や脚の運動に抵抗を加えます。'],[
section(['Silicone','硅胶','シリコーン'],['Silicone offers a soft contact surface. The feel varies with pad thickness and surface texture.','硅胶提供柔软的接触面，触感随握垫厚度与表面纹理而变化。','シリコーンはやわらかな接触面をつくります。パッドの厚さや表面の質感により感触が異なります。']),
section(['TPE','TPE','TPE'],['Thermoplastic elastomer has a flexible feel. Try the grip pads to see if the firmness and texture feel comfortable. Choose between TPE and silicone based on pad firmness, ring rebound, and pad shape.','热塑性弹性体触感柔韧，可试握确认握垫硬度与纹理。根据握垫硬度、环体回弹与握垫形状选择 TPE 或硅胶。','熱可塑性エラストマーは柔軟な感触です。グリップの硬さと質感を試し、パッドの硬さ、リングの反発、パッド形状に合わせてTPEまたはシリコーンを選べます。'])]),
page(['Pilates Set Collection','普拉提套装系列','ピラティスセット コレクション'],'set',[
'Designed for home Pilates and everyday fitness, the ArchieNest set brings together equipment for warm-ups, resistance training, and post-workout stretching.',
'ArchieNest 套装面向居家普拉提与日常健身，组合适用于热身、阻力训练及运动后拉伸的器材。',
'自宅でのピラティスや日々の運動に。ArchieNestのセットはウォームアップ、レジスタンストレーニング、運動後のストレッチに使う器具を組み合わせます。'],[
section(['Material options','材质选择','素材の選択'],['Choose from a range of materials, colors, and product combinations. Consider the feel, firmness, intended use, and purchasing needs when configuring your set.','可选择不同材质、颜色与产品组合，根据触感、硬度、使用目的与采购需求配置套装。','素材、色、製品の組み合わせを選べます。感触、硬さ、用途、購入ニーズに合わせて構成をご検討ください。']),
section(['Build your set','配置套装','セットの構成'],['Select products for everyday stretching, beginner Pilates, or advanced resistance training. Adjust the contents and packaging to suit your target price.','可围绕日常拉伸、入门普拉提或进阶阻力训练选配产品，并根据目标价格调整内容与包装。','日々のストレッチ、初級ピラティス、本格的な抵抗運動に合わせて製品を選び、目標価格に合う内容と包装に調整できます。'])]),
...p.slice(11)];
const chapters=[[3,old.chapters[0][1]],[6,old.chapters[1][1]],[7,old.chapters[2][1]],[24,old.chapters[3][1]],[27,old.chapters[4][1]],[28,old.chapters[5][1]]];
fs.writeFileSync(path,'const T=(en,zh,ja)=>({en,zh,ja});\n'+Object.entries({pages,ui:old.ui,chapters,testHead:old.testHead,testRows:old.testRows}).map(([k,v])=>`const ${k}=${JSON.stringify(v,null,2)};`).join('\n')+'\n');
let app=fs.readFileSync('web/dist/app.js','utf8');
app=app.replaceAll('Math.min(16,','Math.min(pages.length,').replaceAll('current===16','current===pages.length').replaceAll(' / 16',' / ${pages.length}').replaceAll('current/16','current/pages.length').replaceAll('n>16','n>pages.length').replaceAll('n=16','n=pages.length').replaceAll('n<=16','n<=pages.length').replaceAll('current===13','current===25');
app=app.replace("if(p.image){","if(p.image&&!p.overview){");
app=app.replace('map(([im,t])=>`<figure>${photo(im,text(t))}<figcaption>${esc(text(t))}</figcaption></figure>`)','map(([im,t,target])=>`<figure>${target?`<button class="product-link" data-page="${target}">${photo(im,text(t))}<span>${esc(text(t))} ↗</span></button>`:`${photo(im,text(t))}<figcaption>${esc(text(t))}</figcaption>`}</figure>`)');
app=app.replace("$('page').classList.toggle('cover',current===1);","$('page').classList.toggle('cover',current===1);$('page').classList.toggle('overview',!!p.overview);");
fs.writeFileSync('web/dist/app.js',app);
console.log(`Updated ${pages.length} pages`);
