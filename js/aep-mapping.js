var Ashfall = {};

Ashfall.volcanoes = (function () {
    // Note volcano names copied using this script:
    // https://github.com/susannajenkins/Ashfall/wiki/Helper-scripts
    var volcanoNames = ['West Eifel Volcanic Field', 'Chaine des Puys',
            'Calatrava Volcanic Field', 'Larderello', 'Campi Flegrei',
            'Vesuvius', 'Ischia', 'Stromboli', 'Lipari', 'Vulcano', 'Etna',
            'Pantelleria', 'Methana', 'Milos', 'Santorini', 'Nisyros',
            'Acigol-Nevsehir', 'Erciyes Dagi', 'Nemrut Dagi', 'Suphan Dagi',
            'Tendurek Dagi', 'Ararat', 'Elbrus', 'Porak', 'Tskhouk-Karckar',
            'Tair, Jebel at', 'Zubair Group', 'Dallol', 'Dalaffilla',
            'Erta Ale', 'Dubbi', 'Alayta', 'Dabbahu', 'Manda Hararo',
            'Manda-Inakir', 'Ardoukoba', 'Dama Ali', 'Kone', 'Tullu Moje',
            'Alutu', 'South Island', 'Barrier, The', 'Namarunu',
            'Emuruangogolak', 'Silali', 'Paka', 'Menengai', 'Olkaria',
            'Longonot', 'Lengai, Ol Doinyo', 'Chyulu Hills', 'Meru', 'Ngozi',
            'Rungwe', 'Kyejo', 'Fort Portal', 'Nyamuragira', 'Nyiragongo',
            'Visoke', 'Cameroon', 'Marra, Jebel', 'Meidob Volcanic Field',
            "'Uwayrid, Harrat", 'Khaybar, Harrat', 'Rahat, Harrat',
            'Yar, Jabal', 'Arhab, Harra of', 'Dhamar, Harras of',
            'Sawad, Harra es-', 'Mayotte Island', 'Karthala',
            'Itasy Volcanic Field', 'Fournaise, Piton de la', 'St. Paul',
            'Heard', 'McDonald Islands', 'Marion Island',
            'Kaikohe-Bay of Islands', 'Auckland Field', 'Mayor Island',
            'Taranaki [Egmont]', 'White Island', 'Okataina', 'Reporoa', 'Maroa',
            'Taupo', 'Tongariro', 'Ruapehu', 'Macauley Island', 'Raoul Island',
            'Tofua', 'Late', 'Fonualei', "Niuafo'ou", 'Ofu-Olosega', "Savai'i",
            'Taveuni', 'Nabukelevu', 'St. Andrew Strait', 'Bam', 'Manam',
            'Karkar', 'Long Island', 'Ritter Island', 'Langila', 'Dakataua',
            'Garbuna Group', 'Pago', 'Hargy', 'Bamus', 'Ulawun', 'Lolobau',
            'Rabaul', 'Tavui', 'Lamington', 'Victory', 'Waiowa', 'Ambitle',
            'Billy Mitchell', 'Bagana', 'Loloru', 'Simbo', 'Savo', 'Tinakula',
            'Suretamatai', 'Gaua', 'Aoba', 'Ambrym', 'Lopevi', 'Epi', 'Kuwae',
            'Yasur', 'Matthew Island', 'Hunter Island',
            'Newer Volcanics Province', 'Barren Island', 'Seulawah Agam',
            'Peuet Sague', 'Telong, Bur ni', 'Sibayak', 'Sinabung',
            'Sorikmarapi', 'Marapi', 'Tandikat', 'Talang', 'Kerinci', 'Sumbing',
            'Kaba', 'Dempo', 'Besar', 'Suoh', 'Krakatau', 'Perbakti-Gagak',
            'Salak', 'Gede', 'Tangkubanparahu', 'Papandayan', 'Guntur',
            'Galunggung', 'Cereme', 'Slamet', 'Dieng Volcanic Complex',
            'Sundoro', 'Sumbing', 'Merbabu', 'Merapi', 'Lawu', 'Kelut',
            'Arjuno-Welirang', 'Semeru', 'Tengger Caldera', 'Lamongan', 'Raung',
            'Ijen', 'Batur', 'Agung', 'Rinjani', 'Tambora', 'Sangeang Api',
            'Ranakah', 'Inierie', 'Inielika', 'Ebulobo', 'Iya', 'Kelimutu',
            'Paluweh', 'Egon', 'Lewotobi', 'Leroboleng', 'Iliboleng',
            'Lewotolo', 'Iliwerung', 'Tara, Batu', 'Sirung', 'Gunungapi Wetar',
            'Wurlali', 'Teon', 'Nila', 'Serua', 'Banda Api', 'Colo [Una Una]',
            'Soputan', 'Lokon-Empung', 'Mahawu', 'Tongkoko', 'Ruang',
            'Karangetang [Api Siau]', 'Awu', 'Dukono', 'Ibu', 'Gamkonora',
            'Gamalama', 'Makian', 'Parker', 'Matutum', 'Leonard Range',
            'Makaturing', 'Ragang', 'Musuan', 'Camiguin', 'Kanlaon', 'Cabalian',
            'Biliran', 'Bulusan', 'Mayon', 'San Pablo Volcanic Field', 'Taal',
            'Pinatubo', 'Cagua', 'Camiguin de Babuyanes', 'Didicas',
            'Babuyan Claro', 'Iraya', 'Hainan Dao', 'Tatun Group',
            'Iwo-Tori-shima', 'Yokoate-jima', 'Suwanose-jima', 'Nakano-shima',
            'Kuchino-shima', 'Kuchinoerabu-jima', 'Kikai',
            'Ibusuki Volcanic Field', 'Sakura-jima', 'Sumiyoshi-ike',
            'Kirishima', 'Fukue-jima', 'Unzen', 'Aso', 'Kuju', 'Tsurumi', 'Abu',
            'Sanbe', 'Izu-Tobu', 'Hakone', 'Fuji', 'Kita Yatsuga-take',
            'On-take', 'Haku-san', 'Norikura', 'Yake-dake', 'Tate-yama',
            'Niigata-Yake-yama', 'Myoko', 'Asama', 'Kusatsu-Shirane', 'Haruna',
            'Hiuchi', 'Nikko-Shirane', 'Nantai', 'Takahara', 'Nasu', 'Numazawa',
            'Bandai', 'Adatara', 'Azuma', 'Zao', 'Narugo', 'Kurikoma', 'Chokai',
            'Akita-Komaga-take', 'Iwate', 'Hachimantai', 'Akita-Yake-yama',
            'Megata', 'Iwaki', 'Towada', 'Hakkoda Group', 'Oshima', 'Nii-jima',
            'Kozu-shima', 'Miyake-jima', 'Mikura-jima', 'Hachijo-jima',
            'Aoga-shima', 'Tori-shima', 'Nishino-shima', 'Kita-Iwo-jima',
            'Ioto [Iwo-jima]', 'Farallon de Pajaros', 'Asuncion', 'Agrigan',
            'Pagan', 'Alamagan', 'Guguan', 'Anatahan', 'Oshima-Oshima', 'E-san',
            'Komaga-take', 'Usu', 'Niseko', 'Yotei', 'Kuttara', 'Shikotsu',
            'Rishiri', 'Tokachi', 'Daisetsu', 'Nipesotsu-Maruyama', 'Akan',
            'Kutcharo', 'Mashu', 'Rausu', 'Shiretoko-Iwo-zan', 'Kolokol Group',
            'Chirpoi', 'Goriaschaia Sopka', 'Zavaritzki Caldera', 'Prevo Peak',
            'Ketoi', 'Ushishur', 'Rasshua', 'Sarychev Peak', 'Raikoke',
            'Chirinkotan', 'Ekarma', 'Sinarka', 'Kharimkotan',
            'Tao-Rusyr Caldera', 'Nemo Peak', 'Fuss Peak', 'Karpinsky Group',
            'Chikurachki', 'Ebeko', 'Alaid', 'Kambalny', 'Koshelev', 'Yavinsky',
            'Diky Greben', 'Kurile Lake', 'Ilyinsky', 'Zheltovsky', 'Ksudach',
            'Khodutka', 'Mutnovsky', 'Gorely', 'Opala', 'Tolmachev Dol',
            'Vilyuchik', 'Barkhatnaya Sopka', 'Koryaksky', 'Avachinsky',
            'Zhupanovsky', 'Veer', 'Kostakan', 'Bakening', 'Zavaritsky',
            'Akademia Nauk', 'Karymsky', 'Maly Semiachik', 'Taunshits', 'Uzon',
            'Kikhpinych', 'Krasheninnikov', 'Kronotsky', 'Gamchen', 'Kizimen',
            'Tolbachik', 'Bezymianny', 'Kliuchevskoi', 'Ushkovsky', 'Shiveluch',
            'Khangar', 'Cherpuk Group', 'Ichinsky', 'Bolshoi-Kekuknaysky',
            'Alney-Chashakondzha', 'Terpuk', 'Sedankinsky', 'Gorny Institute',
            'Kinenin', 'Bliznetsy', 'Elovsky', 'Spokoiny', 'Ostry', 'Severny',
            'Udokan Plateau', 'Taryatu-Chulutu', 'Turfan',
            'Tianshan Volcanic Group', 'Kunlun Volcanic Group', 'Arshan',
            'Wudalianchi', 'Jingbo', 'Longgang Group', 'Changbaishan',
            'Ulreung', 'Halla', 'Kiska', 'Little Sitkin', 'Semisopochnoi',
            'Gareloi', 'Tanaga', 'Takawangha', 'Kanaga', 'Moffett',
            'Great Sitkin', 'Kasatochi', 'Atka', 'Korovin', 'Seguam', 'Amukta',
            'Yunaska', 'Cleveland', 'Vsevidof', 'Okmok', 'Makushin', 'Akutan',
            'Westdahl', 'Fisher', 'Shishaldin', 'Roundtop', 'Pavlof', 'Dana',
            'Kupreanof', 'Veniaminof', 'Black Peak', 'Aniakchak', 'Yantarni',
            'Chiginagak', 'Ugashik-Peulik', 'Ukinrek Maars', 'Martin', 'Mageik',
            'Trident', 'Katmai', 'Novarupta', 'Griggs', 'Snowy Mountain',
            'Kaguyak', 'Fourpeaked', 'Augustine', 'Iliamna', 'Redoubt', 'Spurr',
            'Hayes', 'St. Paul Island', 'Imuruk Lake', 'Buzzard Creek',
            'Wrangell', 'Churchill', 'Edgecumbe', 'Edziza',
            'Iskut-Unuk River Cones', 'Tseax River Cone', 'Nazko',
            'Wells Gray-Clearwater', 'Meager', 'Garibaldi', 'Baker',
            'Glacier Peak', 'Rainier', 'Adams', 'St. Helens', 'West Crater',
            'Indian Heaven', 'Hood', 'Jefferson', 'Blue Lake Crater',
            'Sand Mountain Field', 'Belknap', 'North Sister Field',
            'South Sister', 'Bachelor', 'Davis Lake', 'Newberry', 'Crater Lake',
            'Diamond Craters', 'Jordan Craters', 'Shasta', 'Medicine Lake',
            'Lassen Volcanic Center', 'Mono Craters', 'Inyo Craters',
            'Mammoth Mountain', 'Ubehebe Craters', 'Golden Trout Creek',
            'Salton Buttes', 'Wapi Lava Field', 'Yellowstone',
            'Black Rock Desert', 'Carrizozo', 'Zuni-Bandera', 'Dotsero',
            'Uinkaret Field', 'Sunset Crater', 'Kilauea', 'Mauna Loa',
            'Mauna Kea', 'Hualalai', 'Haleakala', 'Barcena', 'Socorro',
            'Ceboruco', 'Colima', 'Michoacan-Guanajuato', 'Jocotitlan',
            'Toluca, Nevado de', 'Chichinautzin', 'Popocatepetl',
            'Malinche, La', 'Naolinco Volcanic Field', 'Cofre de Perote',
            'Orizaba, Pico de', 'San Martin', 'Chichon, El', 'Tacana',
            'Santa Maria', 'Almolonga', 'Atitlan', 'Acatenango', 'Fuego',
            'Pacaya', 'Tecuamburro', 'Santa Ana', 'Izalco', 'San Salvador',
            'Ilopango', 'San Miguel', 'Conchaguita', 'Cosiguina',
            'San Cristobal', 'Telica', 'Negro, Cerro', 'Pilas, Las',
            'Momotombo', 'Apoyeque', 'Nejapa-Miraflores', 'Masaya',
            'Concepcion', 'Rincon de la Vieja', 'Miravalles', 'Arenal', 'Poas',
            'Barva', 'Irazu', 'Turrialba', 'Baru', 'Romeral', 'Bravo, Cerro',
            'Ruiz, Nevado del', 'Tolima, Nevado del', 'Machin',
            'Huila, Nevado del', 'Purace', 'Dona Juana', 'Galeras', 'Azufral',
            'Cumbal', 'Negro de Mayasquer, Cerro', 'Soche', 'Chachimbiro',
            'Cuicocha', 'Imbabura', 'Cayambe', 'Reventador', 'Pululagua',
            'Guagua Pichincha', 'Atacazo', 'Chacana', 'Antisana', 'Aliso',
            'Sumaco', 'Cotopaxi', 'Quilotoa', 'Chimborazo', 'Tungurahua',
            'Sangay', 'Fernandina', 'Wolf', 'Darwin', 'Alcedo', 'Negra, Sierra',
            'Azul, Cerro', 'Marchena', 'Andahua-Orcopampa', 'Huambo',
            'Sabancaya', 'Misti, El', 'Ubinas', 'Huaynaputina', 'Ticsani',
            'Yucamane', 'Taapaca', 'Parinacota', 'Guallatiri', 'Isluga',
            'Irruputuncu', 'San Pedro', 'Lascar', 'Socompa', 'Llullaillaco',
            'Ojos del Salado, Nevados', 'Robinson Crusoe', 'Tupungatito',
            'San Jose', 'Maipo', 'Tinguiririca', 'Planchon-Peteroa',
            'Descabezado Grande', 'Azul, Cerro', 'Longavi, Nevado de',
            'Chillan, Nevados de', 'Tromen', 'Antuco', 'Copahue', 'Callaqui',
            'Lonquimay', 'Llaima', 'Sollipulli', 'Caburgua-Huelemolle',
            'Villarrica', 'Quetrupillan', 'Lanin', 'Huanquihue Group',
            'Mocho-Choshuenco', 'Carran-Los Venados', 'Puyehue-Cordon Caulle',
            'Antillanca Group', 'Puntiagudo-Cordon Cenizos', 'Osorno',
            'Cayutue-La Vigueria', 'Calbuco', 'Huequi', 'Minchinmavida',
            'Chaiten', 'Yanteles', 'Corcovado', 'Melimoyu', 'Mentolat', 'Maca',
            'Hudson, Cerro', 'Arenales', 'Lautaro', 'Viedma', 'Aguilera',
            'Reclus', 'Burney, Monte', 'Palei-Aike Volcanic Field', 'Fueguino',
            'Saba', 'Quill, The', 'Liamuiga', 'Soufriere Hills',
            'Soufriere Guadeloupe', 'Trois Pitons, Morne', 'Watt, Morne',
            'Plat Pays, Morne', 'Pelee', 'Qualibou', 'Soufriere St. Vincent',
            'Ljosufjoll', 'Reykjanes', 'Krisuvik', 'Brennisteinsfjoll',
            'Hengill', 'Grimsnes', 'Hveravellir', 'Eyjafjallajokull', 'Katla',
            'Torfajokull', 'Hekla', 'Grimsvotn', 'Bardarbunga', 'Kverkfjoll',
            'Askja', 'Fremrinamur', 'Krafla', 'Oraefajokull', 'Jan Mayen',
            'Flores', 'Fayal', 'Pico', 'San Jorge', 'Terceira', 'Sete Cidades',
            'Picos Volcanic System', 'Agua de Pau', 'Furnas', 'Madeira',
            'La Palma', 'Hierro', 'Tenerife', 'Gran Canaria', 'Lanzarote',
            'Fogo', 'Tristan da Cunha', 'Nightingale Island', 'Buckle Island',
            'Melbourne', 'Erebus', 'Takahe', 'Hudson Mountains',
            'Deception Island', 'Penguin Island', 'Thule Islands',
            'Bristol Island', 'Montagu Island', 'Michael', 'Candlemas Island',
            'Zavodovski'],
        volcanoLookup = {},

        indexVolcanoes = function () {
            // Create a quick lookup for known volcano names
            var i, volcanoName;
            for (i = 0; i < volcanoNames.length; i++) {
                volcanoName = volcanoNames[i];
                volcanoLookup[volcanoName] = true;
            }
        },

        isKnownVolcano = function (volcanoName) {
            // Whether the volcano is one that we should
            // have AEP data for
            return volcanoLookup[volcanoName] === true;
        };

    indexVolcanoes();

    return {
        isKnownVolcano: isKnownVolcano
    };
}());

// DEPRECATED
Ashfall.colorSchemes = (function ($) {
    /*
    MatPlotLib colours taken from https://bl.ocks.org/mbostock/b75883984a032ea0ba26

    To generate other MatPlotLib colormaps, you can use the following in a python command line,
    changing the color_map_name to one of the values found on the reference page
    http://matplotlib.org/examples/color/colormaps_reference.html then copy the results below.
    You'll also need to add it to the colourscheme dropdown box on the html page and create
    a colour scale for it below in createNormalisedColourScale():

    import matplotlib.pyplot as plt
    from matplotlib.colors import rgb2hex

    color_map_name = 'hot'
    color_map = plt.get_cmap(color_map_name)
    hex_colors = [rgb2hex(color_map(i)) for i in range(color_map.N)]
    hex_colors.reverse()
    hex_colors_no_hash = [c[1:] for c in hex_colors]
    ",".join(hex_colors_no_hash)

    */
    var magmaStr = "000004,010005,010106,010108,020109,02020b,02020d,03030f,030312,040414,050416,060518,06051a,07061c,08071e,090720,0a0822,0b0924,0c0926,0d0a29,0e0b2b,100b2d,110c2f,120d31,130d34,140e36,150e38,160f3b,180f3d,19103f,1a1042,1c1044,1d1147,1e1149,20114b,21114e,221150,241253,251255,271258,29115a,2a115c,2c115f,2d1161,2f1163,311165,331067,341069,36106b,38106c,390f6e,3b0f70,3d0f71,3f0f72,400f74,420f75,440f76,451077,471078,491078,4a1079,4c117a,4e117b,4f127b,51127c,52137c,54137d,56147d,57157e,59157e,5a167e,5c167f,5d177f,5f187f,601880,621980,641a80,651a80,671b80,681c81,6a1c81,6b1d81,6d1d81,6e1e81,701f81,721f81,732081,752181,762181,782281,792282,7b2382,7c2382,7e2482,802582,812581,832681,842681,862781,882781,892881,8b2981,8c2981,8e2a81,902a81,912b81,932b80,942c80,962c80,982d80,992d80,9b2e7f,9c2e7f,9e2f7f,a02f7f,a1307e,a3307e,a5317e,a6317d,a8327d,aa337d,ab337c,ad347c,ae347b,b0357b,b2357b,b3367a,b5367a,b73779,b83779,ba3878,bc3978,bd3977,bf3a77,c03a76,c23b75,c43c75,c53c74,c73d73,c83e73,ca3e72,cc3f71,cd4071,cf4070,d0416f,d2426f,d3436e,d5446d,d6456c,d8456c,d9466b,db476a,dc4869,de4968,df4a68,e04c67,e24d66,e34e65,e44f64,e55064,e75263,e85362,e95462,ea5661,eb5760,ec5860,ed5a5f,ee5b5e,ef5d5e,f05f5e,f1605d,f2625d,f2645c,f3655c,f4675c,f4695c,f56b5c,f66c5c,f66e5c,f7705c,f7725c,f8745c,f8765c,f9785d,f9795d,f97b5d,fa7d5e,fa7f5e,fa815f,fb835f,fb8560,fb8761,fc8961,fc8a62,fc8c63,fc8e64,fc9065,fd9266,fd9467,fd9668,fd9869,fd9a6a,fd9b6b,fe9d6c,fe9f6d,fea16e,fea36f,fea571,fea772,fea973,feaa74,feac76,feae77,feb078,feb27a,feb47b,feb67c,feb77e,feb97f,febb81,febd82,febf84,fec185,fec287,fec488,fec68a,fec88c,feca8d,fecc8f,fecd90,fecf92,fed194,fed395,fed597,fed799,fed89a,fdda9c,fddc9e,fddea0,fde0a1,fde2a3,fde3a5,fde5a7,fde7a9,fde9aa,fdebac,fcecae,fceeb0,fcf0b2,fcf2b4,fcf4b6,fcf6b8,fcf7b9,fcf9bb,fcfbbd,fcfdbf",
        infernoStr = "000004,010005,010106,010108,02010a,02020c,02020e,030210,040312,040314,050417,060419,07051b,08051d,09061f,0a0722,0b0724,0c0826,0d0829,0e092b,10092d,110a30,120a32,140b34,150b37,160b39,180c3c,190c3e,1b0c41,1c0c43,1e0c45,1f0c48,210c4a,230c4c,240c4f,260c51,280b53,290b55,2b0b57,2d0b59,2f0a5b,310a5c,320a5e,340a5f,360961,380962,390963,3b0964,3d0965,3e0966,400a67,420a68,440a68,450a69,470b6a,490b6a,4a0c6b,4c0c6b,4d0d6c,4f0d6c,510e6c,520e6d,540f6d,550f6d,57106e,59106e,5a116e,5c126e,5d126e,5f136e,61136e,62146e,64156e,65156e,67166e,69166e,6a176e,6c186e,6d186e,6f196e,71196e,721a6e,741a6e,751b6e,771c6d,781c6d,7a1d6d,7c1d6d,7d1e6d,7f1e6c,801f6c,82206c,84206b,85216b,87216b,88226a,8a226a,8c2369,8d2369,8f2469,902568,922568,932667,952667,972766,982766,9a2865,9b2964,9d2964,9f2a63,a02a63,a22b62,a32c61,a52c60,a62d60,a82e5f,a92e5e,ab2f5e,ad305d,ae305c,b0315b,b1325a,b3325a,b43359,b63458,b73557,b93556,ba3655,bc3754,bd3853,bf3952,c03a51,c13a50,c33b4f,c43c4e,c63d4d,c73e4c,c83f4b,ca404a,cb4149,cc4248,ce4347,cf4446,d04545,d24644,d34743,d44842,d54a41,d74b3f,d84c3e,d94d3d,da4e3c,db503b,dd513a,de5238,df5337,e05536,e15635,e25734,e35933,e45a31,e55c30,e65d2f,e75e2e,e8602d,e9612b,ea632a,eb6429,eb6628,ec6726,ed6925,ee6a24,ef6c23,ef6e21,f06f20,f1711f,f1731d,f2741c,f3761b,f37819,f47918,f57b17,f57d15,f67e14,f68013,f78212,f78410,f8850f,f8870e,f8890c,f98b0b,f98c0a,f98e09,fa9008,fa9207,fa9407,fb9606,fb9706,fb9906,fb9b06,fb9d07,fc9f07,fca108,fca309,fca50a,fca60c,fca80d,fcaa0f,fcac11,fcae12,fcb014,fcb216,fcb418,fbb61a,fbb81d,fbba1f,fbbc21,fbbe23,fac026,fac228,fac42a,fac62d,f9c72f,f9c932,f9cb35,f8cd37,f8cf3a,f7d13d,f7d340,f6d543,f6d746,f5d949,f5db4c,f4dd4f,f4df53,f4e156,f3e35a,f3e55d,f2e661,f2e865,f2ea69,f1ec6d,f1ed71,f1ef75,f1f179,f2f27d,f2f482,f3f586,f3f68a,f4f88e,f5f992,f6fa96,f8fb9a,f9fc9d,fafda1,fcffa4",
        plasmaStr = "0d0887,100788,130789,16078a,19068c,1b068d,1d068e,20068f,220690,240691,260591,280592,2a0593,2c0594,2e0595,2f0596,310597,330597,350498,370499,38049a,3a049a,3c049b,3e049c,3f049c,41049d,43039e,44039e,46039f,48039f,4903a0,4b03a1,4c02a1,4e02a2,5002a2,5102a3,5302a3,5502a4,5601a4,5801a4,5901a5,5b01a5,5c01a6,5e01a6,6001a6,6100a7,6300a7,6400a7,6600a7,6700a8,6900a8,6a00a8,6c00a8,6e00a8,6f00a8,7100a8,7201a8,7401a8,7501a8,7701a8,7801a8,7a02a8,7b02a8,7d03a8,7e03a8,8004a8,8104a7,8305a7,8405a7,8606a6,8707a6,8808a6,8a09a5,8b0aa5,8d0ba5,8e0ca4,8f0da4,910ea3,920fa3,9410a2,9511a1,9613a1,9814a0,99159f,9a169f,9c179e,9d189d,9e199d,a01a9c,a11b9b,a21d9a,a31e9a,a51f99,a62098,a72197,a82296,aa2395,ab2494,ac2694,ad2793,ae2892,b02991,b12a90,b22b8f,b32c8e,b42e8d,b52f8c,b6308b,b7318a,b83289,ba3388,bb3488,bc3587,bd3786,be3885,bf3984,c03a83,c13b82,c23c81,c33d80,c43e7f,c5407e,c6417d,c7427c,c8437b,c9447a,ca457a,cb4679,cc4778,cc4977,cd4a76,ce4b75,cf4c74,d04d73,d14e72,d24f71,d35171,d45270,d5536f,d5546e,d6556d,d7566c,d8576b,d9586a,da5a6a,da5b69,db5c68,dc5d67,dd5e66,de5f65,de6164,df6263,e06363,e16462,e26561,e26660,e3685f,e4695e,e56a5d,e56b5d,e66c5c,e76e5b,e76f5a,e87059,e97158,e97257,ea7457,eb7556,eb7655,ec7754,ed7953,ed7a52,ee7b51,ef7c51,ef7e50,f07f4f,f0804e,f1814d,f1834c,f2844b,f3854b,f3874a,f48849,f48948,f58b47,f58c46,f68d45,f68f44,f79044,f79143,f79342,f89441,f89540,f9973f,f9983e,f99a3e,fa9b3d,fa9c3c,fa9e3b,fb9f3a,fba139,fba238,fca338,fca537,fca636,fca835,fca934,fdab33,fdac33,fdae32,fdaf31,fdb130,fdb22f,fdb42f,fdb52e,feb72d,feb82c,feba2c,febb2b,febd2a,febe2a,fec029,fdc229,fdc328,fdc527,fdc627,fdc827,fdca26,fdcb26,fccd25,fcce25,fcd025,fcd225,fbd324,fbd524,fbd724,fad824,fada24,f9dc24,f9dd25,f8df25,f8e125,f7e225,f7e425,f6e626,f6e826,f5e926,f5eb27,f4ed27,f3ee27,f3f027,f2f227,f1f426,f1f525,f0f724,f0f921",
        viridisStr = "440154,440256,450457,450559,46075a,46085c,460a5d,460b5e,470d60,470e61,471063,471164,471365,481467,481668,481769,48186a,481a6c,481b6d,481c6e,481d6f,481f70,482071,482173,482374,482475,482576,482677,482878,482979,472a7a,472c7a,472d7b,472e7c,472f7d,46307e,46327e,46337f,463480,453581,453781,453882,443983,443a83,443b84,433d84,433e85,423f85,424086,424186,414287,414487,404588,404688,3f4788,3f4889,3e4989,3e4a89,3e4c8a,3d4d8a,3d4e8a,3c4f8a,3c508b,3b518b,3b528b,3a538b,3a548c,39558c,39568c,38588c,38598c,375a8c,375b8d,365c8d,365d8d,355e8d,355f8d,34608d,34618d,33628d,33638d,32648e,32658e,31668e,31678e,31688e,30698e,306a8e,2f6b8e,2f6c8e,2e6d8e,2e6e8e,2e6f8e,2d708e,2d718e,2c718e,2c728e,2c738e,2b748e,2b758e,2a768e,2a778e,2a788e,29798e,297a8e,297b8e,287c8e,287d8e,277e8e,277f8e,27808e,26818e,26828e,26828e,25838e,25848e,25858e,24868e,24878e,23888e,23898e,238a8d,228b8d,228c8d,228d8d,218e8d,218f8d,21908d,21918c,20928c,20928c,20938c,1f948c,1f958b,1f968b,1f978b,1f988b,1f998a,1f9a8a,1e9b8a,1e9c89,1e9d89,1f9e89,1f9f88,1fa088,1fa188,1fa187,1fa287,20a386,20a486,21a585,21a685,22a785,22a884,23a983,24aa83,25ab82,25ac82,26ad81,27ad81,28ae80,29af7f,2ab07f,2cb17e,2db27d,2eb37c,2fb47c,31b57b,32b67a,34b679,35b779,37b878,38b977,3aba76,3bbb75,3dbc74,3fbc73,40bd72,42be71,44bf70,46c06f,48c16e,4ac16d,4cc26c,4ec36b,50c46a,52c569,54c568,56c667,58c765,5ac864,5cc863,5ec962,60ca60,63cb5f,65cb5e,67cc5c,69cd5b,6ccd5a,6ece58,70cf57,73d056,75d054,77d153,7ad151,7cd250,7fd34e,81d34d,84d44b,86d549,89d548,8bd646,8ed645,90d743,93d741,95d840,98d83e,9bd93c,9dd93b,a0da39,a2da37,a5db36,a8db34,aadc32,addc30,b0dd2f,b2dd2d,b5de2b,b8de29,bade28,bddf26,c0df25,c2df23,c5e021,c8e020,cae11f,cde11d,d0e11c,d2e21b,d5e21a,d8e219,dae319,dde318,dfe318,e2e418,e5e419,e7e419,eae51a,ece51b,efe51c,f1e51d,f4e61e,f6e620,f8e621,fbe723,fde725",
        hotReversedStr = "ffffff,fffffb,fffff7,fffff3,ffffef,ffffeb,ffffe7,ffffe3,ffffdf,ffffdc,ffffd8,ffffd4,ffffd0,ffffcc,ffffc8,ffffc4,ffffc0,ffffbc,ffffb8,ffffb4,ffffb0,ffffac,ffffa8,ffffa4,ffffa0,ffff9d,ffff99,ffff95,ffff91,ffff8d,ffff89,ffff85,ffff81,ffff7d,ffff79,ffff75,ffff71,ffff6d,ffff69,ffff65,ffff61,ffff5e,ffff5a,ffff56,ffff52,ffff4e,ffff4a,ffff46,ffff42,ffff3e,ffff3a,ffff36,ffff32,ffff2e,ffff2a,ffff26,ffff22,ffff1f,ffff1b,ffff17,ffff13,ffff0f,ffff0b,ffff07,ffff03,fffe00,fffc00,fff900,fff600,fff400,fff100,ffef00,ffec00,ffe900,ffe700,ffe400,ffe100,ffdf00,ffdc00,ffda00,ffd700,ffd400,ffd200,ffcf00,ffcc00,ffca00,ffc700,ffc500,ffc200,ffbf00,ffbd00,ffba00,ffb700,ffb500,ffb200,ffb000,ffad00,ffaa00,ffa800,ffa500,ffa200,ffa000,ff9d00,ff9b00,ff9800,ff9500,ff9300,ff9000,ff8e00,ff8b00,ff8800,ff8600,ff8300,ff8000,ff7e00,ff7b00,ff7900,ff7600,ff7300,ff7100,ff6e00,ff6b00,ff6900,ff6600,ff6400,ff6100,ff5e00,ff5c00,ff5900,ff5600,ff5400,ff5100,ff4f00,ff4c00,ff4900,ff4700,ff4400,ff4100,ff3f00,ff3c00,ff3a00,ff3700,ff3400,ff3200,ff2f00,ff2c00,ff2a00,ff2700,ff2500,ff2200,ff1f00,ff1d00,ff1a00,ff1700,ff1500,ff1200,ff1000,ff0d00,ff0a00,ff0800,ff0500,ff0200,ff0000,fc0000,f90000,f70000,f40000,f20000,ef0000,ec0000,ea0000,e70000,e40000,e20000,df0000,dd0000,da0000,d70000,d50000,d20000,cf0000,cd0000,ca0000,c80000,c50000,c20000,c00000,bd0000,ba0000,b80000,b50000,b30000,b00000,ad0000,ab0000,a80000,a50000,a30000,a00000,9e0000,9b0000,980000,960000,930000,900000,8e0000,8b0000,890000,860000,830000,810000,7e0000,7b0000,790000,760000,740000,710000,6e0000,6c0000,690000,660000,640000,610000,5f0000,5c0000,590000,570000,540000,510000,4f0000,4c0000,4a0000,470000,440000,420000,3f0000,3c0000,3a0000,370000,350000,320000,2f0000,2d0000,2a0000,270000,250000,220000,200000,1d0000,1a0000,180000,150000,120000,100000,0d0000,0b0000",
        matPlotLibToHexArray = function (valsStr) {
            // Turns MatPlotLib colour string into array of hex colours
            return $.map(valsStr.split(","), function (item) {
                return "#" + item;
            });
        };
    
    return {
        magma: matPlotLibToHexArray(magmaStr),
        inferno: matPlotLibToHexArray(infernoStr),
        plasma: matPlotLibToHexArray(plasmaStr),
        viridis: matPlotLibToHexArray(viridisStr),
        hot_r: matPlotLibToHexArray(hotReversedStr)
    };
}($));

Ashfall.maps = (function ($, L, d3, omnivore) {
    var colorSchemes = Ashfall.colorSchemes,
        addTileLayer = function (map) {
            var mapboxAccessToken = "pk.eyJ1Ijoia2V2ayIsImEiOiJjaXZjOXh6aGMwMDM0MnltcXRyc2FvdDFpIn0.i0ZaZBy5NkiSe6_UOEFupg";

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                id: 'mapbox.streets'
            }).addTo(map);
        },
        // DEPRECATED
        processCsvRow = function (d) {
            // Process raw D3 csv row into correct datatypes
            return {
                threshold: +d.threshold,
                aep: +d.aep,
                ari: +d.ari,
                longitude: +d.longitude,
                latitude: +d.latitude,
                hit: +d.hit
            };
        },
        // DEPRECATED
        createCircles = function (data, measure, colourScale, normScale) {
            var circles = [],
                colour, i, row, circle;
            
            for (i = 0; i < data.length; i++) {
                row = data[i];
                colour = colourScale(normScale(row[measure]));
                circle = L.circle([row.latitude, row.longitude], 500, {
                    color: colour,
                    fillColor: colour,
                    fillOpacity: 1.0
                });
                circle.bindPopup(measure.toUpperCase() + ': ' + row[measure] + '<br>Latitude: ' + row.latitude + '<br>Longitude:' + row.longitude);
                circles.push(circle);
            }
            return circles;
        },
        // DEPRECATED
        createNormalisedColourScale = function (colourSchemeName) {
            var colours = [];
            switch (colourSchemeName) {
                // These colours represent the 'jet' colour scheme in matplotlib
                // however there's problems with this colour scale, e.g see:
                // https://jakevdp.github.io/blog/2014/10/16/how-bad-is-your-colormap/
                case "jet":
                    colours = ['#000080', '#000084', '#000089', '#00008d', '#000092', '#000096', '#00009b', 
                        '#00009f', '#0000a4', '#0000a8', '#0000ad', '#0000b2', '#0000b6', '#0000bb', '#0000bf', 
                        '#0000c4', '#0000c8', '#0000cd', '#0000d1', '#0000d6', '#0000da', '#0000df', '#0000e3', 
                        '#0000e8', '#0000ed', '#0000f1', '#0000f6', '#0000fa', '#0000ff', '#0000ff', '#0000ff', 
                        '#0000ff', '#0000ff', '#0004ff', '#0008ff', '#000cff', '#0010ff', '#0014ff', '#0018ff', 
                        '#001cff', '#0020ff', '#0024ff', '#0028ff', '#002cff', '#0030ff', '#0034ff', '#0038ff', 
                        '#003cff', '#0040ff', '#0044ff', '#0048ff', '#004cff', '#0050ff', '#0054ff', '#0058ff', 
                        '#005cff', '#0060ff', '#0064ff', '#0068ff', '#006cff', '#0070ff', '#0074ff', '#0078ff', 
                        '#007cff', '#0080ff', '#0084ff', '#0088ff', '#008cff', '#0090ff', '#0094ff', '#0098ff', 
                        '#009cff', '#00a0ff', '#00a4ff', '#00a8ff', '#00acff', '#00b0ff', '#00b4ff', '#00b8ff', 
                        '#00bcff', '#00c0ff', '#00c4ff', '#00c8ff', '#00ccff', '#00d0ff', '#00d4ff', '#00d8ff', 
                        '#00dcfe', '#00e0fb', '#00e4f8', '#02e8f4', '#06ecf1', '#09f0ee', '#0cf4eb', '#0ff8e7', 
                        '#13fce4', '#16ffe1', '#19ffde', '#1cffdb', '#1fffd7', '#23ffd4', '#26ffd1', '#29ffce', 
                        '#2cffca', '#30ffc7', '#33ffc4', '#36ffc1', '#39ffbe', '#3cffba', '#40ffb7', '#43ffb4', 
                        '#46ffb1', '#49ffad', '#4dffaa', '#50ffa7', '#53ffa4', '#56ffa0', '#5aff9d', '#5dff9a', 
                        '#60ff97', '#63ff94', '#66ff90', '#6aff8d', '#6dff8a', '#70ff87', '#73ff83', '#77ff80', 
                        '#7aff7d', '#7dff7a', '#80ff77', '#83ff73', '#87ff70', '#8aff6d', '#8dff6a', '#90ff66', 
                        '#94ff63', '#97ff60', '#9aff5d', '#9dff5a', '#a0ff56', '#a4ff53', '#a7ff50', '#aaff4d', 
                        '#adff49', '#b1ff46', '#b4ff43', '#b7ff40', '#baff3c', '#beff39', '#c1ff36', '#c4ff33', 
                        '#c7ff30', '#caff2c', '#ceff29', '#d1ff26', '#d4ff23', '#d7ff1f', '#dbff1c', '#deff19', 
                        '#e1ff16', '#e4ff13', '#e7ff0f', '#ebff0c', '#eeff09', '#f1fc06', '#f4f802', '#f8f500', 
                        '#fbf100', '#feed00', '#ffea00', '#ffe600', '#ffe200', '#ffde00', '#ffdb00', '#ffd700', 
                        '#ffd300', '#ffd000', '#ffcc00', '#ffc800', '#ffc400', '#ffc100', '#ffbd00', '#ffb900', 
                        '#ffb600', '#ffb200', '#ffae00', '#ffab00', '#ffa700', '#ffa300', '#ff9f00', '#ff9c00', 
                        '#ff9800', '#ff9400', '#ff9100', '#ff8d00', '#ff8900', '#ff8600', '#ff8200', '#ff7e00', 
                        '#ff7a00', '#ff7700', '#ff7300', '#ff6f00', '#ff6c00', '#ff6800', '#ff6400', '#ff6000', 
                        '#ff5d00', '#ff5900', '#ff5500', '#ff5200', '#ff4e00', '#ff4a00', '#ff4700', '#ff4300', 
                        '#ff3f00', '#ff3b00', '#ff3800', '#ff3400', '#ff3000', '#ff2d00', '#ff2900', '#ff2500', 
                        '#ff2200', '#ff1e00', '#ff1a00', '#ff1600', '#ff1300', '#fa0f00', '#f60b00', '#f10800', 
                        '#ed0400', '#e80000', '#e40000', '#df0000', '#da0000', '#d60000', '#d10000', '#cd0000', 
                        '#c80000', '#c40000', '#bf0000', '#bb0000', '#b60000', '#b20000', '#ad0000', '#a80000', '#a40000', 
                        '#9f0000', '#9b0000', '#960000', '#920000', '#8d0000', '#890000', '#840000', '#800000'];
                    break;
                case "magma":
                    colours = colorSchemes.magma;
                    break;
                case "inferno":
                    colours = colorSchemes.inferno;
                    break;
                case "plasma":
                    colours = colorSchemes.plasma;
                    break;
                case "viridis":
                    colours = colorSchemes.viridis;
                    break;
                case "hot_r":
                    colours = colorSchemes.hot_r;
                    break;
                default:
                    throw new Error("Unrecognised colour scheme " + colourSchemeName);
            }

            var colourScale = d3.scaleQuantize()
                .domain([0, 1])
                .range(colours);

            return colourScale;
        },
        // DEPRECATED
        createLogNormScale = function (values) {
            // Creates a normalised scale which turns log of
            // value into range 0 to 1
            var min = d3.min(values),
                max = d3.max(values);

            var scale = d3.scaleLog()
                .domain([min, max])
                .range([0, 1]);

            return scale;
        },
        // DEPRECATED
        extractArray = function (data, propertyName) {
            // Extracts an array of values (a 'column') from
            // d3 style rows (i.e. an array of JavaScript Objects)
            var vals = [],
                i;
            for (i = 0; i < data.length; i++) {
                vals.push(data[i][propertyName]);
            }
            return vals;
        },
        // DEPRECATED
        extractMapBounds = function (data) {
            // Extracts the lat/long bounds from the data
            var maxLat = d3.max(data, function (d) {return d.latitude; }),
                minLat = d3.min(data, function (d) {return d.latitude; }),
                maxLong = d3.max(data, function (d) {return d.longitude; }),
                minLong = d3.min(data, function (d) {return d.longitude; }),
                southWest = L.latLng(minLat, minLong),
                northEast = L.latLng(maxLat, maxLong),
                bounds = L.latLngBounds(southWest, northEast);
            return bounds;
        },
        // DEPRECATED
        drawColourLegend = function (colourScaleId, colorScale, valueScale) {
            var colourBarWidth = 30,
                colourBarHeight = 400,
                axisWidth = 70,
                axisHeight = colourBarHeight,
                divElement = d3.select("#" + colourScaleId);

            // Clear existing legend
            divElement.selectAll("*").remove();

            // Draw the colour scale to the page for reference
            var colourBarSvg = divElement.append("svg")
                .attr("width", colourBarWidth)
                .attr("height", colourBarHeight);
            
            var defs = colourBarSvg.append("defs");
            var linearGradient = defs.append("linearGradient")
                .attr("id", "linear-gradient")
                .attr("x1", "0%")
                .attr("y1", "0%")
                .attr("x2", "0%")
                .attr("y2", "100%");
            
            // Create gradient colour fill stops
            var sampleVals = colorScale.ticks();
            // console.log("sampleRange", sampleVals);

            // Note: reversed the tick samples so high value colours appear 
            // at top (also see axis ticks below)
            linearGradient.selectAll("stop") 
                    .data( sampleVals.reverse() )                  
                .enter().append("stop")
                    .attr("offset", function(d,i) { 
                        // console.log(i/(sampleVals.length-1));
                        return i/(sampleVals.length-1); })
                    .attr("stop-color", function(d) { return colorScale(d); });

            colourBarSvg.append("rect")
                .attr("width", colourBarWidth)
                .attr("height", colourBarHeight)
                .style("fill", "url(#linear-gradient)");


            // Draw the axis
            // For this we need a copy of the value scale, but 
            // with it's range set over the length of the axis
            // Note: scale range reversed so high values appear at top
            var axisValueScale = valueScale.copy()
                    .range([axisHeight, 0]),
                colourAxis = d3.axisRight()
                    .scale(axisValueScale)
                    // .ticks(4)
                    .tickFormat(d3.format("f"));

            divElement.append("svg")
                    .attr("class", "axis")
                    .attr("width", axisWidth)
                    .attr("height", axisHeight)
                .append("g")
                    .call(colourAxis);
        },
        // DEPRECATED
        drawDataDetails = function (dataDetailsId, data, threshold) {
            // Add some details to the page about the data
            var dataText = "";
            dataText += data.length + " data point" + (data.length === 1 ? "" : "s");
            dataText += " for threshold " + threshold;
            $("#" + dataDetailsId).html(dataText);
        },
        drawDataInfo = function (dataDetailsId, countOfPoints, threshold) {
            // Add some details to the page about the data
            var dataText = (typeof countOfPoints === "undefined") ? "unknown" : countOfPoints;
            dataText += " points for threshold " + threshold;
            $("#" + dataDetailsId).html(dataText);
        },
        createVolcanoIconsLayer = function (map) {
            var isKnownVolcano = Ashfall.volcanoes.isKnownVolcano,
                volcIcon = L.icon({
                    iconUrl: 'images/volcano-icon.png',
                    iconSize:     [20, 18],
                    iconAnchor:   [10, 9]
                    // iconSize:     [30, 26], // size of the icon
                    // iconAnchor:   [15, 13]  // point of the icon which will correspond to marker's location
                }),
                volcanoLayer = L.geoJson(null, {
                    pointToLayer: function (data, latlng) {
                        // Show a triangle shape
                        // return L.shapeMarker(latlng, {
                        //     fillColor: "#ff0000",
                        //     color: "#ff0000",
                        //     shape: "triangle",
                        //     radius: 10
                        // });

                        return L.marker(latlng, {icon: volcIcon});
                    },
                    onEachFeature: function (feature, layer) {
                        // Add popup box with volcano name
                        if (feature.properties && feature.properties.name) {
                            layer.bindPopup(feature.properties.name);
                        }
                    },
                    filter: function (feature, layer) {
                        // Only show volcanoes with AEP calcs
                        return isKnownVolcano(feature.properties.name);
                    }
                });

            // Circle icons for volcanoes
            // var volcanoStyle = { color: '#f00' };
            // var volcanoCircleLayer = L.geoJson(null, {
            //     pointToLayer: function (data, latlng) {
            //         return L.circleMarker(latlng, {style: volcanoStyle});
            //     },
            //     onEachFeature: function (feature, layer) {
            //         if (feature.properties && feature.properties.name) {
            //             layer.bindPopup(feature.properties.name);
            //         }
            //     } 
            // });
            // omnivore.kml("data/volcanoes/GVPWorldVolcanoes-List.kml", null, volcanoCircleLayer).addTo(map);

            return omnivore.kml("data/volcanoes/GVPWorldVolcanoes-List.kml", null, volcanoLayer);
        },
        // DEPRECATED
        extendBounds = function (bounds, llcrnrlat, urcrnrlat, llcrnrlon, urcrnrlon) {
            // Extends the bounds of the bounding box to fit new co-ords
            if (typeof bounds.llcrnrlat === "undefined" && !isNaN(llcrnrlat)) {
                bounds.llcrnrlat = llcrnrlat;
            }
            if (typeof bounds.urcrnrlat === "undefined" && !isNaN(urcrnrlat)) {
                bounds.urcrnrlat = urcrnrlat;
            }
            if (typeof bounds.llcrnrlon === "undefined" && !isNaN(llcrnrlon)) {
                bounds.llcrnrlon = llcrnrlon;
            }
            if (typeof bounds.urcrnrlon === "undefined" && !isNaN(urcrnrlon)) {
                bounds.urcrnrlon = urcrnrlon;
            }

            if (!isNaN(llcrnrlat) && llcrnrlat < bounds.llcrnrlat) {
                bounds.llcrnrlat = llcrnrlat;
            }
            if (!isNaN(urcrnrlat) && urcrnrlat > bounds.urcrnrlat) {
                bounds.urcrnrlat = urcrnrlat;
            }
            if (!isNaN(llcrnrlon) && llcrnrlon < bounds.llcrnrlon) {
                bounds.llcrnrlon = llcrnrlon;
            }
            if (!isNaN(urcrnrlon) && urcrnrlon > bounds.urcrnrlon) {
                bounds.urcrnrlon = urcrnrlon;
            }
        },
        map = null,
        // DEPRECATED
        drawPoints = function (map, colourScaleId, dataDetailsId, countries, measure, 
            threshold, colourScheme, opacity, showVolcanoes, countryNameLoopup) {
            // Plots individual data points on map for volcanoes

            // $.each(countries, function (i, country) {
            //     var imageUrl = 'raster/' + country + '_threshold_' + threshold.toFixed(1) + '_' + colourScheme + '_aep.png',
            //         jsonUrl = 'raster/' + country + '.json';

            //     $.getJSON(jsonUrl)
            //         .then(function (data) {
            //             // Get map image bounds
            //             var llcrnrlat = data.llcrnrlat,
            //                 urcrnrlat = data.urcrnrlat,
            //                 llcrnrlon = data.llcrnrlon,
            //                 urcrnrlon = data.urcrnrlon,
            //                 imageBounds = [[llcrnrlat, llcrnrlon], [urcrnrlat, urcrnrlon]];

            //             // Remember max bounds
            //             extendBounds(mapBounds, llcrnrlat, urcrnrlat, llcrnrlon, urcrnrlon);

            //             mapLayers[country] = L.imageOverlay(imageUrl, imageBounds).addTo(map);
            //         });
            // });

            var promises = [],
                mapLayers = {};
            $.each(countries, function (i, country) {
                // Create promise to fetch data
                var csvUrl = "data/aep_thresholds_" + country + ".csv";
                promises.push($.ajax(csvUrl));
            });

            $.when.apply($, promises).then(
                function () {
                    // Turn the CSV data into D3 ready data
                    var data = [],
                        tmpData;
                    // Parse the data from CSV strings and build up dataset
                    // that accumulates data across all CSV files
                    if (promises.length === 1) {
                        tmpData = d3.csvParse(arguments[0], processCsvRow);
                        data = data.concat(tmpData);
                    } else {
                        for (var i = 0; i < arguments.length; i++) {
                            tmpData = d3.csvParse(arguments[i][0], processCsvRow);
                            data = data.concat(tmpData);
                        }
                    }

                    // For slightly cleaner processing, pass finished data on for
                    // display on map as deferred rather than making map here
                    var d = $.Deferred(),
                        promise = d.promise();
                    return d.resolve(data);
                })
                .then (function (data) {
                    var filteredData = data.filter(function (d) { return d.threshold === threshold}),
                        colourScale = createNormalisedColourScale(colourScheme),
                        values = extractArray(filteredData, measure),
                        valueScale = createLogNormScale(values),
                        circles = createCircles(filteredData, measure, colourScale, valueScale);
                        features = L.featureGroup(circles),
                        bounds = extractMapBounds(data);
                    
                    // features.addTo(map);

                    // Zoom in on features
                    // Note: centre map on unfiltered data, as filtered data is often empty
                    if (countries.length > 1) {
                        bounds = bounds.pad(0.01);
                        // map.fitBounds(bounds, { padding: [2,2] });
                    }
                    // map.fitBounds(bounds);

                    // Draw the colour scale
                    drawColourLegend(colourScaleId, colourScale, valueScale);

                    // Add some text details about data
                    // drawDataDetails(dataDetailsId, filteredData, threshold);

                    // Draw the volcano icons
                    // drawVolcanoIcons(map);

                    // TODO: add volcano icons to layers control
                    // var featuresLayer = {
                    //     "features": features,
                    //     "Sudan": volcMap
                    // };
                    mapLayers["Dots"] = features;
                    L.control.layers(null, mapLayers).addTo(map);
                    // L.control.layers(null, featuresLayer).addTo(map);
                })
                .fail (function (error) {
                    console.log("Error loading CSV file.");
                    throw error;
                });
        },
        // DEBUG
        // Creates a promise which gets json info from file and generates image layer info
        createMapImagePromise = function (imageUrl, jsonUrl, label) {
            var deferred = $.Deferred();
                // imageUrl = 'temp-cumulate/' + prepost + '_snapLatLongToGrid_volc_' + volcNum + '.png',
                // jsonUrl = 'temp-cumulate/' + prepost + '_snapLatLongToGrid_volc_' + volcNum + '.json';

            $.getJSON(jsonUrl)
                .then(function (data) {
                    // Get map image bounds
                    var southWestLat = data.bounds.south_west_lat,
                        southWestLong = data.bounds.south_west_long,
                        northEastLat = data.bounds.north_east_lat,
                        northEastLong = data.bounds.north_east_long,
                        imageBounds = [[southWestLat, southWestLong], [northEastLat, northEastLong]];
                        // countOfPoints = data.threshold_info[threshold.toFixed(1)].count_of_points;

                    deferred.resolve({
                        "country": label, 
                        "imageUrl": imageUrl, 
                        "imageBounds": imageBounds});
                        // "countOfPoints": countOfPoints});
                })
                .fail (function (error) {
                    deferred.reject(error);
                });
            return deferred.promise();
        },
        // DEBUG
        getCountryVolcNums = function (country) {
            switch (country) {
                case "kenya":
                    return [
                        222020,
                        222030,
                        222040,
                        222051,
                        222052,
                        222053,
                        222060,
                        222090,
                        222100,
                        222130];
                case "sudan":
                    return [
                        225030,
                        225050];
                default:
                    throw new Error("Unrecognised country");
            }
        },
        createMapLayers = function (map, layerLabel, promises, countryNameLoopup) {
            // When all country info is loaded, draw the map
            $.when.apply($, promises)
                .then(function (data) {
                    var mapLayers = {},
                        mapBounds = null,
                        dataDetails = "",
                        numArgs = arguments.length;
                     console.log(arguments);

                    // Build layer for map
                    $.each(arguments, function (i, countryData) {
                        var country = countryData.country,
                            imageUrl = countryData.imageUrl,
                            imageBounds = countryData.imageBounds,
                            imageOptions = {"opacity": opacity},
                            mapLayer = L.imageOverlay(imageUrl, imageBounds, imageOptions),
                            // countOfPoints = countryData.countOfPoints,
                            countryFriendlyName = countryNameLoopup[country] || country;

                        // Show layer on map
                        //if (countOfPoints) {
                        // mapLayer.addTo(map);
                        mapLayers[countryFriendlyName] = mapLayer;
                        //}

                        // Remember max bounds
                        // if (i === 0) {
                        //     mapBounds = L.latLngBounds(imageBounds);
                        // } else {
                        //     mapBounds.extend(imageBounds);
                        // }

                        // Remember number of points for each country
                        // dataDetails += countryFriendlyName + ": " + countOfPoints + " points";
                        // console.log(i + 1, arguments.length, numArgs);
                        // if (i + 1 < numArgs) {
                        //     dataDetails += ", ";
                        // }
                    });

                    // Draw the map layers
                    var mapLayersCtrl = L.control.layers(null, mapLayers).addTo(map);
                    $(mapLayersCtrl.getContainer()).prepend(layerLabel);
                    if (mapBounds) {
                        map.fitBounds(mapBounds);
                    }

                    // Add some text details about data
                    // $("#" + dataDetailsId).html(dataDetails);
                });
        },
        // DEBUG: Draw images of raw simulation data for volcano
        debugDrawSimData = function (map, colourScaleId, dataDetailsId, countries, measure, 
            threshold, colourScheme, opacity, showVolcanoes, countryNameLoopup) {
            //
            // Use promises to load country data in parallel
            var volcNum = 225050; // Sudan - Meidob Volcanic Field
            // var volcNum = 222051; // Kenya - Emuruangogolak
            var promises = [];
            $.each(countries, function (i, country) {
                var volcNums = getCountryVolcNums(country);

                $.each(volcNums, function (j, volcNum) {
                    var imageUrl = 'temp-sim/' + country + '_simulation_points_v' + volcNum + '.png',
                        jsonUrl = imageUrl + ".json",
                        label = country + " " + volcNum,
                        promise = createMapImagePromise(imageUrl, jsonUrl, label);
                    promises.push(promise);
                });

                /*
                var deferred = $.Deferred(),
                    imageUrl = 'temp-sim/' + country + '_simulation_points_v' + volcNum + '.png',
                    jsonUrl = imageUrl + ".json";
                    // jsonUrl = 'temp-sim/' + country + '.json';

                var promise = createMapImagePromise(imageUrl, jsonUrl, label);
                countryPromises.push(promise);

                $.getJSON(jsonUrl)
                    .then(function (data) {
                        // Get map image bounds
                        var southWestLat = data.bounds.south_west_lat,
                            southWestLong = data.bounds.south_west_long,
                            northEastLat = data.bounds.north_east_lat,
                            northEastLong = data.bounds.north_east_long,
                            imageBounds = [[southWestLat, southWestLong], [northEastLat, northEastLong]];
                            // countOfPoints = data.threshold_info[threshold.toFixed(1)].count_of_points;

                        deferred.resolve({
                            "country": country, 
                            "imageUrl": imageUrl, 
                            "imageBounds": imageBounds});
                            // "countOfPoints": countOfPoints});
                    })
                    .fail (function (error) {
                        deferred.reject(error);
                    });

                countryPromises.push(deferred.promise());
                */
            });

            createMapLayers(map, "&nbsp;debug: raw sim data&nbsp;", promises, countryNameLoopup);

            /*
            // When all country info is loaded, draw the map
            $.when.apply($, countryPromises)
                .then(function (data) {
                    var mapLayers = {},
                        mapBounds = null,
                        dataDetails = "",
                        numArgs = arguments.length;
                     console.log(arguments);

                    // Build layer for map
                    $.each(arguments, function (i, countryData) {
                        var country = countryData.country,
                            imageUrl = countryData.imageUrl,
                            imageBounds = countryData.imageBounds,
                            imageOptions = {"opacity": opacity},
                            mapLayer = L.imageOverlay(imageUrl, imageBounds, imageOptions),
                            // countOfPoints = countryData.countOfPoints,
                            countryFriendlyName = countryNameLoopup[country] || country;

                        // Show layer on map
                        //if (countOfPoints) {
                        mapLayer.addTo(map);
                        mapLayers[countryFriendlyName] = mapLayer;
                        //}

                        // Remember max bounds
                        if (i === 0) {
                            mapBounds = L.latLngBounds(imageBounds);
                        } else {
                            mapBounds.extend(imageBounds);
                        }

                        // Remember number of points for each country
                        // dataDetails += countryFriendlyName + ": " + countOfPoints + " points";
                        // console.log(i + 1, arguments.length, numArgs);
                        // if (i + 1 < numArgs) {
                        //     dataDetails += ", ";
                        // }
                    });

                    // Draw the map layers
                    var mapLayersCtrl = L.control.layers(null, mapLayers).addTo(map);
                    $(mapLayersCtrl.getContainer()).prepend("&nbsp;debug: raw sim data&nbsp;");
                    // if (mapBounds) {
                    //     map.fitBounds(mapBounds);
                    // }

                    // Add some text details about data
                    // $("#" + dataDetailsId).html(dataDetails);
                });
            */
        },
        // DEBUG: Draw images of cumulate aep data before and after snap to grid
        debugDrawCumulateSnapData = function (map, colourScaleId, dataDetailsId, countries, measure, 
            threshold, colourScheme, opacity, showVolcanoes, countryNameLoopup) {
            var cumulateStages = ["volcaeps", "aep"];

            // Use promises to load country data in parallel
            var promises = [];
            $.each(countries, function (i, country) {
                var volcNums = getCountryVolcNums(country);

                $.each(volcNums, function (j, volcNum) {
                    $.each(cumulateStages, function (k, cumulateStage) {
                        var imageUrl = 'temp-cumulate/' + country + '_' + cumulateStage + '_' + threshold.toFixed(1) + '_v' + volcNum + '.png',
                            jsonUrl = imageUrl + ".json",
                            label = country + " " + cumulateStage + " " + threshold.toFixed(1) + " " + volcNum,
                            promise = createMapImagePromise (imageUrl, jsonUrl, label);
                        promises.push(promise);
                    });
                });
            });

            createMapLayers(map, "&nbsp;debug: cumulate process&nbsp;", promises, countryNameLoopup);

            /*
            // When all country info is loaded, draw the map
            $.when.apply($, promises)
                .then(function (data) {
                    var mapLayers = {},
                        mapBounds = null,
                        dataDetails = "",
                        numArgs = arguments.length;
                     console.log(arguments);

                    // Build layer for map
                    $.each(arguments, function (i, countryData) {
                        var country = countryData.country,
                            imageUrl = countryData.imageUrl,
                            imageBounds = countryData.imageBounds,
                            imageOptions = {"opacity": opacity},
                            mapLayer = L.imageOverlay(imageUrl, imageBounds, imageOptions),
                            // countOfPoints = countryData.countOfPoints,
                            countryFriendlyName = countryNameLoopup[country] || country;

                        // Show layer on map
                        //if (countOfPoints) {
                        // mapLayer.addTo(map);
                        mapLayers[countryFriendlyName] = mapLayer;
                        //}

                        // Remember max bounds
                        // if (i === 0) {
                        //     mapBounds = L.latLngBounds(imageBounds);
                        // } else {
                        //     mapBounds.extend(imageBounds);
                        // }

                        // Remember number of points for each country
                        // dataDetails += countryFriendlyName + ": " + countOfPoints + " points";
                        // console.log(i + 1, arguments.length, numArgs);
                        // if (i + 1 < numArgs) {
                        //     dataDetails += ", ";
                        // }
                    });

                    // Draw the map layers
                    var mapLayersCtrl = L.control.layers(null, mapLayers).addTo(map);
                    $(mapLayersCtrl.getContainer()).prepend("&nbsp;debug: cumulate process&nbsp;");
                    if (mapBounds) {
                        map.fitBounds(mapBounds);
                    }

                    // Add some text details about data
                    // $("#" + dataDetailsId).html(dataDetails);
                });
            */
        },
        drawMap = function (mapId, colourScaleId, dataDetailsId, countries, measure, 
            threshold, colourScheme, opacity, showVolcanoes, countryNameLoopup) {
            var colourScale;

            if (measure !== "aep" && measure !== "ari") {
                throw new Error("The measure must be AEP or ARI");
            }

            // Not ideal keeping one copy of map, but trouble removing
            // previous Leaflet map (Leaflet decorates html element)
            if (map) {
                console.log("Removing map");
                map.remove();
            } else {
                console.log("Not removing map");
            }

            map = L.map(mapId);
            addTileLayer(map);

            // Add scale bar (to show distance)
            L.control.scale().addTo(map);

            // Use promises to load country data in parallel
            var countryPromises = [];
            $.each(countries, function (i, country) {
                var deferred = $.Deferred(),
                    imageUrl = 'raster/' + country + '_threshold_' + threshold.toFixed(1) + '_' + colourScheme + '_' + measure + '.png',
                    jsonUrl = 'raster/' + country + '.json';

                $.getJSON(jsonUrl)
                    .then(function (data) {
                        // Get map image bounds
                        var southWestLat = data.bounds.south_west_lat,
                            southWestLong = data.bounds.south_west_long,
                            northEastLat = data.bounds.north_east_lat,
                            northEastLong = data.bounds.north_east_long,
                            imageBounds = [[southWestLat, southWestLong], [northEastLat, northEastLong]],
                            countOfPoints = data.threshold_info[threshold.toFixed(1)].count_of_points;

                        deferred.resolve({
                            "country": country, 
                            "imageUrl": imageUrl, 
                            "imageBounds": imageBounds,
                            "countOfPoints": countOfPoints});
                    })
                    .fail (function (error) {
                        deferred.reject(error);
                    });

                countryPromises.push(deferred.promise());
            });

            // When all country info is loaded, draw the map
            $.when.apply($, countryPromises)
                .then(function (data) {
                    var mapLayers = {},
                        mapBounds = null,
                        dataDetails = "",
                        numArgs = arguments.length;
                     console.log(arguments);

                    // Build layer for map
                    $.each(arguments, function (i, countryData) {
                        var country = countryData.country,
                            imageUrl = countryData.imageUrl,
                            imageBounds = countryData.imageBounds,
                            imageOptions = {"opacity": opacity},
                            mapLayer = L.imageOverlay(imageUrl, imageBounds, imageOptions),
                            countOfPoints = countryData.countOfPoints,
                            countryFriendlyName = countryNameLoopup[country] || country;

                        // Show layer on map
                        if (countOfPoints) {
                            mapLayer.addTo(map);
                            mapLayers[countryFriendlyName] = mapLayer;
                        }

                        // Remember max bounds
                        if (i === 0) {
                            mapBounds = L.latLngBounds(imageBounds);
                        } else {
                            mapBounds.extend(imageBounds);
                        }

                        // Remember number of points for each country
                        dataDetails += countryFriendlyName + ": " + countOfPoints + " points";
                        console.log(i + 1, arguments.length, numArgs);
                        if (i + 1 < numArgs) {
                            dataDetails += ", ";
                        }
                    });

                    // Draw the volcano icons
                    if (showVolcanoes) {
                        mapLayers["Volcanoes"] = createVolcanoIconsLayer(map);
                        mapLayers["Volcanoes"].addTo(map);
                    }

                    // Draw the map layers
                    var mapLayersCtrl = L.control.layers(null, mapLayers).addTo(map);
                    $(mapLayersCtrl.getContainer()).prepend("&nbsp;AEP/ARI&nbsp;");
                    // console.log("Put fit bounds back in");
                    if (mapBounds) {
                        map.fitBounds(mapBounds);
                    }

                    // Draw the colour scale
                    // drawColourLegend(colourScaleId, colourScale, valueScale);

                    // Add some text details about data
                    $("#" + dataDetailsId).html(dataDetails);
                    // drawDataInfo(dataDetailsId, countOfPoints, threshold);
                    // drawDataDetails(dataDetailsId, filteredData, threshold);

                    // DEBUG
                    // drawPoints(map, colourScaleId, dataDetailsId, countries, measure, 
                    //     threshold, colourScheme, opacity, showVolcanoes, countryNameLoopup);
                    debugDrawSimData(map, colourScaleId, dataDetailsId, countries, measure, 
                        threshold, colourScheme, opacity, showVolcanoes, countryNameLoopup);
                    debugDrawCumulateSnapData(map, colourScaleId, dataDetailsId, countries, measure, 
                        threshold, colourScheme, opacity, showVolcanoes, countryNameLoopup);
                });

        };
    return {
        drawMap: drawMap
    }
}($, L, d3, omnivore));