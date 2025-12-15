import { AboutItem, Memory, Outfit, Pet, Recipe } from './types';

export const ABOUT_ITEMS: AboutItem[] = [
  {
    icon: "✨",
    title: "Enerjin",
    description: "Girdiğin her yeri aydınlatıyorsun."
  },
  {
    icon: "🎨",
    title: "Yeteneklerin",
    description: "Elini attığın her işi güzelleştiriyorsun."
  },
  {
    icon: "❤️",
    title: "Kalbin",
    description: "Dünyanın en düşünceli insanısın."
  },
  {
    icon: "🌞",
    title: "Gülüşün",
    description: "İnsanın bütün gününü güzelleştiriyor."
  },
  {
    icon: "🌟",
    title: "Gözlerin",
    description: "Konuşurken gözlerinin içinin parlaması..."
  },
  {
    icon: "🎈",
    title: "Neşen",
    description: "En küçük şeylerden bile mutlu olabilmen."
  },
  {
    icon: "🌿",
    title: "Doğallığın",
    description: "Hiç çaba harcamadan, en doğal halinle güzelsin."
  },
  {
    icon: "😂",
    title: "Kahkahan",
    description: "Öyle içten ki, mutluluğun herkese bulaşıyor."
  },
  {
    icon: "🧸",
    title: "Ruhun",
    description: "Yeri gelince ciddi, yeri gelince çocuk gibi şen."
  },
  {
    icon: "🧩",
    title: "Dikkatin",
    description: "Detaylara verdiğin o güzel önem."
  },
  {
    icon: "⌛",
    title: "Zaman",
    description: "Yanındayken zamanın nasıl geçtiğini anlamıyorum."
  },
  {
    icon: "👁️",
    title: "Bakışların",
    description: "Bazen tek bir bakışınla çok şey anlatıyorsun."
  },
  {
    icon: "💎",
    title: "Özgünlüğün",
    description: "Başkası olmaya çalışmadan, sadece olduğun gibi olman."
  },
  {
    icon: "🛋️",
    title: "Terapistliğin",
    description: "Sanki insanın kişisel terapisti gibisin; ruhuna iyi geliyorsun."
  },
  {
    icon: "⚓",
    title: "Desteğin",
    description: "En zor zamanlarda bile sarsılmaz bir dağ gibi yanımdasın."
  }
];

export const RECIPES: Recipe[] = [
  {
    id: 1,
    title: "Elmalı Turta",
    description: "Elmalı turtan hem görüntüsüyle hem de lezzetiyle tam bir ev sıcaklığı yayıyor; belli ki içine sadece elma değil, emek ve sevgi de koymuşsun.",
    imageUrl: "./yemek/elmaliturta.jpg"
  },
  {
    id: 2,
    title: "Köstebek Kek",
    description: "Köstebek pastan tam anlamıyla sürprizli bir mutluluk böyle pastalar sadece tatlı değil hatıra olur",
    imageUrl: "./yemek/kostebekkek.jpg"
  },
  {
    id: 3,
    title: "Kurabiye",
    description: "Hem esmer şekerle hem de ince düşüncenle o kadar güzel bir jest yapmışsın ki; kurabiye sadece tatlı değil, anlamı da çok hoş.",
    imageUrl: "./yemek/kurabiye.jpg"
  },
  {
    id: 4,
    title: "Pasta",
    description: "Yaptığın pasta sadece tatlı değil babana verilen değerin en güzel göstergesi.",
    imageUrl: "./yemek/pasta.jpg"
  }
];

export const PETS: Pet[] = [
  {
    id: 1,
    name: "Pamuk",
    type: "Kedi",
    imageUrl: "./pati/001.jpg"
  },
  {
    id: 2,
    name: "Boncuk",
    type: "Köpek",
    imageUrl: "./pati/002.jpg"
  },
  {
    id: 3,
    name: "Maviş",
    type: "Kuş",
    imageUrl: "./pati/003.jpg"
  },
  {
    id: 4,
    name: "Limon",
    type: "Kedi",
    imageUrl: "./pati/004.jpg"
  },
  {
    id: 5,
    name: "Duman",
    type: "Kedi",
    imageUrl: "./pati/005.jpg"
  },
  {
    id: 6,
    name: "Zeytin",
    type: "Köpek",
    imageUrl: "./pati/006.jpg"
  },
  {
    id: 7,
    name: "Şans",
    type: "Köpek",
    imageUrl: "./pati/007.jpg"
  },
  {
    id: 8,
    name: "Mia",
    type: "Kedi",
    imageUrl: "./pati/008.jpg"
  },
  {
    id: 9,
    name: "Paşa",
    type: "Kedi",
    imageUrl: "./pati/009.jpg"
  },
  {
    id: 10,
    name: "Tarçın",
    type: "Köpek",
    imageUrl: "./pati/010.jpg"
  },
  {
    id: 11,
    name: "Gofret",
    type: "Kedi",
    imageUrl: "./pati/011.jpg"
  },
  {
    id: 12,
    name: "Bulut",
    type: "Köpek",
    imageUrl: "./pati/012.jpg"
  },
  {
    id: 13,
    name: "Çiko",
    type: "Kuş",
    imageUrl: "./pati/013.jpg"
  },
  {
    id: 14,
    name: "Fıstık",
    type: "Kuş",
    imageUrl: "./pati/014.jpg"
  }
];

export const OUTFITS: Outfit[] = [
  {
    id: 1,
    title: "Siyahın Asaleti Pembenin Zarafeti",
    note: "Siyah eşarp ile pembe gömleği o kadar zarif bir şekilde bir araya getirmişsin ki, nişanın en şık ve en dikkat çeken kişisi sen olmuşsun. Çok yakışmış 🌸🖤✨",
    imageUrl: "./kombin/Siyahın asaleti pembenin zarafeti.jpg"
  },
  {
    id: 2,
    title: "Adalar Seninle Daha Güzel",
    note: "Adaların havasını çiçeklerle taçlandırmışsın; hem çok doğal hem de masal gibi bir şıklığın var. Gerçekten insanın içini açan bir kombin. 🌸✨",
    imageUrl: "./kombin/Adalar seninle daha güzel.jpg"
  },
  {
    id: 3,
    title: "Doğum Günü Prensesi",
    note: "Pembe giymiş halinle doğum gününe ayrı bir ışık katmışsın; gülüşünle birlikte tam bir mutluluk tablosusun. 🎀✨",
    imageUrl: "./kombin/doğum günü prensesi.jpg"
  },
  {
    id: 4,
    title: "Bir Eşarp Bin Zarafet",
    note: "Eşarbı siyah pantolonunla o kadar güzel kombinlemişsin ki, hem çok zarif hem de sana inanılmaz yakışmış. Gerçekten çok şık görünüyorsun 🖤✨",
    imageUrl: "./kombin/Bir eşarp bin zarafet.jpg"
  }
];

export const MEMORIES: Memory[] = [
  {
    id: 1,
    caption: "İlk Starbucks Deneyimi",
    description: "Bir gün bir kızla Starbucks’a gittik. Ortam romantik, müzik sakin, her şey çok normal… ta ki sipariş verme anına kadar. Kasiyer ismimi sorduğunda, nedense içimdeki gizemli ruh ortaya çıktı ve erkek olmama rağmen “Ezreal” dedim.\n\nKafamda havalı, fantastik bir hava vardı; sanki birazdan kahveyi alıp bir oyunun ana karakteri olacaktım. \n \n Ama Starbucks’ın bu duruma kendi yorumu vardı. Bir süre sonra “Ezgi!” diye bir ses yankılandı. Etrafa baktım, Ezgi yok… sonra fark ettim ki o Ezgi bendim. Bardakta kocaman EZGİ yazıyordu.\nYanımdaki kız gülmekten kahveyi dökecek hale geldi, ben ise hayatımda ilk kez Starbucks sayesinde isim değiştirmiş oldum. O günden sonra anladım ki Starbucks’ta isim değil, kader yazılıyor.",
    imageUrl: "./ani/İlk Starbucks Deneyimi.jpg",
    albumImages: [
      "./ani/İlk Starbucks Deneyimi2.jpg"
    ]
  },
  {
    id: 2,
    caption: "Pendik'in Sözde Kısa Yolu",
    description: "Her şey “Abi burası çok yakın, 15 dakika” cümlesiyle başladı.\nNormalde bu cümleyi duyunca insanın içi rahatlar ya, bizde tam tersi oldu ama o an henüz bilmiyoruz.\n\nYola çıktık… 15 dakika geçti.\n“Herhalde saatim bozuk” dedim.\n30 dakika geçti… “Kestirme burası galiba” diye düşündüm.\n45 dakika olunca artık içimizden Google Maps’e dua etmeye başladık.\n\nBir saat dolduğunda hâlâ yoldaydık.\n“Az kaldı” dedi.\nBu “az”, matematikte bizim bilmediğimiz özel bir ölçü birimiymiş meğer.\n\nİkinci saate girerken artık sohbetler bitmiş, herkes kendi hayatını sorgulamaya başlamıştı.\nAyaklarım beni terk etti, dizlerim istifa dilekçesi yazdı.\n\nNihayet vardığımızda saate baktık: 2 saat yürümüşüz.\nHani 15 dakika demiştin?\nCevap netti:\n“Ya bana kısa gelmişti…”\n\nO günden sonra biri “yakın” deyince önce soruyoruz:\nHangi yakın? İnsan mı, maratoncu mu? 🏃‍♂️",
    imageUrl: "./ani/Pendik'in Sözde Kısa Yolu.jpg",
    albumImages: []
  },
  {
    id: 3,
    caption: "Doğum Günün",
    description: "Evde sakin bir gün planı vardı… ta ki mutfakta Nida ile pasta yapma fikri ortaya atılana kadar.\nBaşta her şey çok masumdu: “Unu koy”, “şekeri ekle”, “karıştır ama sakin ol.”\nSonra bir anda mutfak, MasterChef finaline döndü.\n\nUn havada, mikser hız rekoru kırıyor, Nida “biraz daha çırp” diyor, o “bu biraz oldu mu?” diye bakıyor.\nPasta fırına girdiğinde ikisi de fırının başına dikildi, sanki bebek bakıyorlar:\n“Oldu mu?”, “Biraz daha mı kalsın?”, “Yanmasın ama!”\n\nSonuç mu?\nBiraz yamuk, biraz çatlak ama bol kahkahalı, lezzeti emeğinden büyük bir pasta.\nEn güzel malzeme de şeker değil; o mutfakta dökülen kahkahalardı 🍰😄",
    imageUrl: "./ani/dogumgunu1.jpg", 
    albumImages: [
      "./kombin/doğum günü prensesi.jpg"
    ]
  },
  {
    id: 4,
    caption: "Hızlı ve Çekici",
    description: "O gün direksiyonun başına sıradan biri oturmadı…\nO gün, ehliyet hayaline son virajı alan biri vardı.\n\nSabah biraz heyecan, biraz “ya stop ederse?” düşüncesiyle başladı. Emniyet kemeri takıldı, aynalar ayarlandı, kalp atışı rölantide ama gözler kararlıydı. Komisyon bakıyor, yol sessiz, araba sanki “hadi göster kendini” der gibi.\n\nİlk kalkış… sorunsuz.\nDönüşler akıcı, parkta nefes tutuldu ama direksiyon ustaca çevrildi.\nO an anlaşıldı: Bu sadece bir sınav değil, özgürlüğe atılan küçük ama büyük bir adımdı.\n\nSonunda o sihirli cümle geldi:\n“Geçtiniz.”\n\nBir gülümseme yayıldı yüzüne; heyecan yerini gurura bıraktı.\nArtık yollar biraz daha cesur, aynalar biraz daha özgüvenliydi.\nVe o kız…\nSadece ehliyet almadı, kendi yolunun direksiyonuna geçti 🚗✨",
    imageUrl: "./ani/Hızlı ve Çekici.jpg",
    albumImages: []
  }
];



// Left, Center, Right images
export const HERO_IMAGES = [
    './prof/prof1.png', // Left (Casual/Smiling)
    './prof/prof2.png', // Center (Main Portrait)
    './prof/prof3.png'  // Right (Artistic/Soft)
];