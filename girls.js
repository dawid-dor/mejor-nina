// Website password: s8e4MQ7A*BXDsr@ejFae

class Girl{
  constructor(database, index){
    this.database = database;
    this.index = index;
  }

  async getImages(){
    // let response = await fetch(`http://localhost:9000/public/v3/character/${this.database[this.index].id}/pictures`); //localhost API
    let response = await fetch(`https://api.jikan.moe/v3/character/${this.database[this.index].id}/pictures`); //public API
    let promisedData = await response.json();
    return promisedData
  }

  setGirlCard = (imageID, textID) => {
    let avatar;
    this.getImages()
    .then(images => {avatar = images.pictures[1].large
    document.getElementById(`${imageID}`).setAttribute('src', avatar)
    document.getElementById(`${textID}`).textContent = `${this.database[this.index].name}`});
  }

  getScore = () => this.database[this.index].score;

}

const girlsDatabase = [

    // Random girls
      {
        id: 87277,
        name: "Touka Kirishima",
        score: 68.9
      },
  
      {
        id: 55133,
        name: "Eru Chitanda",
        score: 57
      },
  
      {
        id: 141354,
        name: "Violet Evergarden",
        score: 98
      },
  
      {
        id: 40197,
        name: "Inaba Himeko",
        score: 96
      },
  
      {
        id: 18323,
        name: "Shirayuki",
        score: 86.4
      },
  
      {
        id: 458,
        name: "Revy",
        score: 87.5
      },
  
      {
        id: 1111,
        name: "C.C.",
        score: 65.6
      },
  
      {
        id: 558,
        name: "Kallen Stadtfeld",
        score: 67
      },
  
      {
        id: 155679,
        name: "Zero Two",
        score: 90.7
      },
  
      {
        id: 155684,
        name: "Kokoro",
        score: 15
      },
  
      {
        id: 63,
        name: "Winry Rockbell",
        score: 86.5
      },
  
      {
        id: 70,
        name: "Riza Hawkeye",
        score: 80.7
      },
  
      {
        id: 87271,
        name: "Chiyo Sakura",
        score: 78
      },
  
      {
        id: 3105,
        name: "Shiki Ryougi",
        score: 62.7
      },
  
      {
        id: 137467,
        name: "Mitsuha Miyamizu",
        score: 60.7
      },
  
      {
        id: 80243,
        name: "Shouko Nishimiya",
        score: 93.5
      },
  
      {
        id: 97583,
        name: "Naoka Ueno",
        score: 4
      },
  
      {
        id: 81645,
        name: "Akko",
        score: 16
      },
  
      {
        id: 43121,
        name: "Morgiana",
        score: 52.9
      },
  
      {
        id: 49699,
        name: "Maou",
        score: 70.8
      },
  
      {
        id: 76364,
        name: "Aki Adaki",
        score: 21
      },
  
      {
        id: 7373,
        name: "Holo",
        score: 97.5
      },
  
      {
        id: 68583,
        name: "Akane Tsunemori",
        score: 83.5
      },
  
      {
        id: 105289,
        name: "Stella Vermillion",
        score: 19
      },
  
      {
        id: 112365,
        name: "Shizuku Kurogane",
        score: 5
      },
  
      {
        id: 127643,
        name: "Chizuru Hishiro",
        score: 71.6
      },
  
      {
        id: 106145,
        name: "Kokomi Teruhashi",
        score: 88.3
      },
  
      {
        id: 69409,
        name: "Tsubaki Sawabe",
        score: 3
      },
  
      {
        id: 69411,
        name: "Kaori Miyazono",
        score: 80.6
      },
  
      {
        id: 111907,
        name: "Aoi Miyamori",
        score: 70.9
      },
  
      {
        id: 112893,
        name: "Raphtalia",
        score: 50
      },
  
      {
        id: 112909,
        name: "Filo",
        score: 6
      },
  
    // Railgun
  
      {
        id: 113701,
        name: "Misaka Mikoto",
        score: 89.9
      },
  
      {
        id: 17017,
        name: "Kuroko Shirai",
        score: 71.5
      },
  
      {
        id: 20626,
        name: "Ruiko Saten",
        score: 30
      },
  
      {
        id: 20622,
        name: "Kazari Uiharu",
        score: 10
      },
  
    // Toradora
  
      {
        id: 12064,
        name: "Taiga Aisaka",
        score: 70.7
      },
  
      {
        id: 12305,
        name: "Minori Kushieda",
        score: 65.7
      },
  
      {
        id: 13725,
        name: "Ami Kawashima",
        score: 76.9
      },
  
      {
        id: 12307,
        name: "Yasuko Takasu",
        score: 60.8
      },
  
    // Shokugeki no Soma
  
      {
        id: 75284,
        name: "Erina Nakiri",
        score: 43
      },
  
      {
        id: 76026,
        name: "Megumi Tadokoro",
        score: 48.9
      },
  
      {
        id: 89339,
        name: "Alice Nakiri",
        score: 91.8
      },
  
      {
        id: 78935,
        name: "Ikumi Mito",
        score: 39
      },
  
    // Sora yori
  
      {
        id: 157148,
        name: "Shirase Kobuchizawa",
        score: 71.7
      },
  
      {
        id: 157170,
        name: "Hinata Miyake",
        score: 88.9
      },
  
      {
        id: 157171,
        name: "Yuzuki Shiraishi",
        score: 60.9
      },
  
      {
        id: 157147,
        name: "Mari Tamaki",
        score: 43.9
      },
  
    // Bunny girl
  
      {
        id: 118739,
        name: "Mai Sakurajima",
        score: 86.6
      },
  
      {
        id: 163451,
        name: "Tomoe Koga",
        score: 68.7
      },
  
      {
        id: 151021,
        name: "Kaede Azusagawa",
        score: 51
      },
  
      {
        id: 163452,
        name: "Rio Futaba",
        score: 61.6
      },
  
      {
        id: 149616,
        name: "Shouko Makinohara",
        score: 37
      },
  
      {
        id: 163452,
        name: "Nodoka Toyohama",
        score: 45
      },
  
    // Re:zero
  
      {
        id: 118737,
        name: "Emilia",
        score: 78.5
      },
  
      {
        id: 118763,
        name: "Rem",
        score: 76.7
      },
  
      {
        id: 118765,
        name: "Ram",
        score: 45.9
      },
  
  
    // Kobayashi
  
      {
        id: 136728,
        name: "Kanna Kamui",
        score: 80.8
      },
  
      {
        id: 136727,
        name: "Tooru",
        score: 58.9
      },
  
      {
        id: 136726,
        name: "Kobayashi",
        score: 61.7
      },
  
      {
        id: 136731,
        name: "Quetzalcoatl",
        score: 55
      },
  
      {
        id: 136734,
        name: "Elma",
        score: 63.9
      },
  
    // No game no life
  
      {
        id: 82525,
        name: "Shiro",
        score: 39.8
      },
  
      {
        id: 82527,
        name: "Stephanie Dola",
        score: 71.9
      },
  
      {
        id: 97761,
        name: "Jibril",
        score: 86.7
      },
  
    // Noragami
  
      {
        id: 84679,
        name: "Hiyori Iki",
        score: 62.5
      },
  
      {
        id: 93711,
        name: "Bishamon",
        score: 78.6
      },
  
  
  
  
  
    // Kill la Kill
      {
        id: 83797,
        name: "Ryuuko Matoi",
        score: 89.4
      },
  
      {
        id: 83799,
        name: "Satsuki Kiryuuin",
        score: 85
      },
  
      {
        id: 83799,
        name: "Mako Mankanshoku",
        score: 59
      },
  
      {
        id: 96719,
        name: "Nui Harime",
        score: 14
      },
  
  
  
    // Kimetsu no Yaiba
  
      {
        id: 146157,
        name: "Nezuko Kamado",
        score: 75
      },
  
      {
        id: 146736,
        name: "Shinobu Kochou",
        score: 97
      },
  
      {
        id: 151142,
        name: "Kanao Tsuyuri",
        score: 65.2
      },
  
      
  
    // Hinamatsuri
      {
        id: 100043,
        name: "Hina",
        score: 73.6
      },
  
      {
        id: 111045,
        name: "Anzu",
        score: 95
      },
  
      {
        id: 100421,
        name: "Hitomi",
        score: 95.5
      },
  
  
  
      
  
  
    // DxD
  
      {
        id: 50389,
        name: "Rias Gremory",
        score: 90.8
      },
  
      {
        id: 51347,
        name: "Akeno Himejima",
        score: 91.9
      },
  
      {
        id: 51335,
        name: "Asia Argento",
        score: 1
      },
  
      {
        id: 51343,
        name: "Koneko",
        score: 55.9
      },
  
      {
        id: 51339,
        name: "Irina Shidou",
        score: 23
      },
  
      {
        id: 51337,
        name: "Xenovia",
        score: 56
      },
  
  
  
    // Goblin slayer
      {
        id: 148623,
        name: "Priest",
        score: 7
      },
  
      {
        id: 148956,
        name: "Elf Archer",
        score: 48
      },
      
  
    // Gabriel Dropout
  
      {
        id: 143075,
        name: "Vignette",
        score: 85.8
      },
  
      {
        id: 143074,
        name: "Gabriel",
        score: 84
      },
  
      {
        id: 143076,
        name: "Satania",
        score: 9
      },
  
      {
        id: 143077,
        name: "Raphiel",
        score: 40
      },
  
      {
        id: 148397,
        name: "Tapris",
        score: 62.6
      },
  
  
  
    // DomeKano
  
      {
        id: 122365,
        name: "Rui Tachibana",
        score: 71.3
      },
  
      {
        id: 122367,
        name: "Hina Tachibana",
        score: 89.2
      },
  
      {
        id: 122371,
        name: "Momo Kashiwabara",
        score: 70.6
      },
  
    // DanMachi
  
      {
        id: 93273,
        name: "Hestia",
        score: 80.9
      },
  
      {
        id: 92227,
        name: "Ais Wallenstein",
        score: 41
      },
  
      {
        id: 116183,
        name: "Lion Ryuu",
        score: 65.9
      },
  
      {
        id: 116169,
        name: "Liliruca Arde",
        score: 49
      },
  
    // NGE
  
      {
        id: 86,
        name: "Rei Ayanami",
        score: 60.6
      },
  
      {
        id: 94,
        name: "Asuka Langley Soryu",
        score: 86.9
      },
  
      {
        id: 1259,
        name: "Misato Katsuragi",
        score: 90.5
      },
  
      {
        id: 1251,
        name: "Ritsuko Akagi",
        score: 62.8
      },
  
    //Fates
  
      {
        id: 498,
        name: "Rin Tousaka",
        score: 98.5
      },
  
      {
        id: 497,
        name: "Arturia Pendragon",
        score: 90.6
      },
  
      {
        id: 503,
        name: "Illyasviel von Einzbern",
        score: 74
      },
  
      {
        id: 21636,
        name: "Luviagelita Edelfelt",
        score: 22
      },
  
      {
        id: 15164,
        name: "Irisviel von Einzbern",
        score: 78.4
      },
  
    // Akame ga KILL!
  
      {
        id: 63351,
        name: "Akame",
        score: 81
      },
  
      {
        id: 65229,
        name: "Mine",
        score: 36
      },
  
      {
        id: 65227,
        name: "Leone",
        score: 68.8
      },
  
      {
        id: 65239,
        name: "Esdeth",
        score: 63.8
      },
  
      {
        id: 65237,
        name: "Chelsea",
        score: 65.8
      },
  
      {
        id: 65297,
        name: "Kurome",
        score: 68.6
      },
  
      {
        id: 65233,
        name: "Sheele",
        score: 52
      },
  
      
  
  
    // Shingeki no Kyojin
      {
        id: 40881,
        name: "Mikasa Ackerman",
        score: 77.9
      },
  
      {
        id: 46490,
        name: "Annie Leonhart",
        score: 76.6
      },
  
      {
        id: 71121,
        name: "Hange Zoe",
        score: 66
      },
  
      {
        id: 45887,
        name: "Sasha Blouse",
        score: 20
      },
  
      {
        id: 62481,
        name: "Historia",
        score: 78.7
      },
  
    // Katanagatari
  
      {
        id: 28523,
        name: "Togame",
        score: 88.8
      },
  
      {
        id: 33208,
        name: "Hitei",
        score: 63.7
      },
  
      {
        id: 28556,
        name: "Nanami Yasuri",
        score: 75.5
      },
  
  
  
  
  
    // Steins;gate
      {
        id: 43370,
        name: "Kurisu Makise",
        score: 100
      },
  
      {
        id: 35253,
        name: "Mayuri Shiina",
        score: 73.9
      },
  
      {
        id: 35255,
        name: "Suzuha Amane",
        score: 78.8
      },
  
    // SAO
  
      {
        id: 36828,
        name: "Asuna Yuuki",
        score: 83.9
      },
  
      {
        id: 36831,
        name: "Suguha Kirigaya",
        score: 32
      },
  
      {
        id: 43892,
        name: "Yui",
        score: 2
      },
  
      {
        id: 37681,
        name: "Keiko Ayano",
        score: 12
      },
  
      {
        id: 43906,
        name: "Rika Shinozaki",
        score: 18
      },
  
      {
        id: 55147,
        name: "Shino Asada",
        score: 62.9
      },
  
      {
        id: 75450,
        name: "Alice Zuberg",
        score: 81.9
      },
  
  
  
  
  
    // Monogatari
      {
        id: 22037,
        name: "Hitagi Senjougahara",
        score: 99
      },
  
      {
        id: 22055,
        name: "Tsubasa Hanekawa",
        score: 94
      },
  
      {
        id: 23602,
        name: "Shinobu Oshino",
        score: 92.5
      },
  
      {
        id: 24194,
        name: "Karen Araragi",
        score: 85.9
      },
  
      {
        id: 24195,
        name: "Tsukihi Araragi",
        score: 84.9
      },
  
      {
        id: 22052,
        name: "Mayoi Hachikuji",
        score: 71.4
      },
  
      {
        id: 22054,
        name: "Suruga Kanbaru",
        score: 73.8
      },
  
      {
        id: 22050,
        name: "Nadeko Sengoku",
        score: 46
      },
  
      {
        id: 130739,
        name: "Sodachi Oikura",
        score: 93
      },
      
      {
        id: 57499,
        name: "Yotsugi Ononoki",
        score: 82
      },
  
    // Overlord
  
      {
        id: 116275,
        name: "Albedo",
        score: 86.8
      },
  
      {
        id: 116319,
        name: "Shalltear Bloodfallen",
        score: 61.9
      },
  
    // Madoka Magica
      {
        id: 38005,
        name: "Akemi Homura",
        score: 91
      },
  
      {
        id: 37832,
        name: "Madoka Kaname",
        score: 72
      },
  
      {
        id: 40006,
        name: "Kyouko Sakura",
        score: 64
      },
  
      {
        id: 38194,
        name: "Mami Tomoe",
        score: 66.5
      },
  
      {
        id: 38395,
        name: "Sayaka Miki",
        score: 38
      },
  
    // Yahari ore
      {
        id: 67067,
        name: "Yukino Yukinoshita",
        score: 71.8
      },
  
      {
        id: 67069,
        name: "Yui Yuigahama",
        score: 90.9
      },
  
      {
        id: 110743,
        name: "Iroha Isshiki",
        score: 89.8
      },
  
      {
        id: 67075,
        name: "Komachi Hikigaya",
        score: 76.8
      },
  
      {
        id: 67077,
        name: "Shizuka Hiratsuka",
        score: 53
      },
  
    // Saekano
  
      {
        id: 90181,
        name: "Megumi Katou",
        score: 87
      },
  
      {
        id: 90177,
        name: "Utaha Kasumigaoka",
        score: 79
      },
  
      {
        id: 90179,
        name: "Eriri Sawamura",
        score: 54
      },
  
      {
        id: 106915,
        name: "Michiru Hyoudou",
        score: 25
      },
  
    // Clannad
  
      {
        id: 4604,
        name: "Nagisa Furukawa",
        score: 92
      },
  
      {
        id: 4603,
        name: "Tomoyo Sakagami",
        score: 71.2
      },
  
      {
        id: 4605,
        name: "Kyou Fujibayashi",
        score: 61.8
      },
  
      {
        id: 4601,
        name: "Fuuko Ibuki",
        score: 8
      },
  
      {
        id: 4602,
        name: "Kotomi Ichinose",
        score: 58
      },
  
      {
        id: 6831,
        name: "Sanae Furukawa",
        score: 83.6
      },
  
    // Konosuba
      {
        id: 117225,
        name: "Megumin",
        score: 89.7
      },
  
      {
        id: 117223,
        name: "Aqua",
        score: 78.9
      },
  
      {
        id: 117285,
        name: "Darkness",
        score: 69
      },
  
      {
        id: 123868,
        name: "Wiz",
        score: 73.7
      },
  ]