const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: "Not Your Business Part.2",
        artist: 'Emperor/塞壬唱片-MSR',
        url: 'http://music.163.com/song/media/outer/url?id=1396557518.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    {
        name: "画",
        artist: '赵雷',
        url: 'http://music.163.com/song/media/outer/url?id=202369.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    {
        name: "杜王町Radio",
        artist: 'ハセガワダイスケ,菅野祐悟',
        url: 'http://music.163.com/song/media/outer/url?id=423118362.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    {
        name: "Befall",
        artist: '尚雯婕',
        url: 'http://music.163.com/song/media/outer/url?id=569212270.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    
    {
        name: "“沙漠”",
        artist: '耀司匹林',
        url: 'http://music.163.com/song/media/outer/url?id=1470509378.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    {
        name: "Ready?",
        artist: 'D.D.D./塞壬唱片-MSR',
        url: 'http://music.163.com/song/media/outer/url?id=1396561141.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/9837e74acb0fd9a9ecfc485717176b3a-2022-12-411:49:20.jpg',
    },
    {
        name: "La gloire à mes genoux",
        artist: 'Côme',
        url: 'http://music.163.com/song/media/outer/url?id=428649319.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    {
        name: "Tipsy",
        artist: '塞壬唱片-MSR',
        url: 'http://music.163.com/song/media/outer/url?id=1804654314.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    {
        name: "Moon Halo",
        artist: '茶理理,TetraCalyx,Hanser,HOYO-MiX',
        url: 'http://music.163.com/song/media/outer/url?id=1859652717.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    {
        name: "Y1K",
        artist: '塞壬唱片-MSR',
        url: 'http://music.163.com/song/media/outer/url?id=1865105781.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    {
        name: "多索雷斯假日",
        artist: '塞壬唱片-MSR,David Westbom',
        url: 'http://music.163.com/song/media/outer/url?id=1967065667.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    {
        name: "沙滩小憩",
        artist: '塞壬唱片-MSR,PMP',
        url: 'http://music.163.com/song/media/outer/url?id=1973112976.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    
    {
        name: "Edamame (ft. Rich Brian)",
        artist: 'bbno$,Rich Brian',
        url: 'http://music.163.com/song/media/outer/url?id=1861126812.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    {
        name: "毒场",
        artist: 'Jvlin',
        url: 'http://music.163.com/song/media/outer/url?id=1852599940.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    
    {
        name: "KICK BACK",
        artist: '米津玄師',
        url: 'http://music.163.com/song/media/outer/url?id=1986803568.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    {
        name: "il vento d'oro",
        artist: '菅野祐悟',
        url: 'http://music.163.com/song/media/outer/url?id=1334780738.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    {
        name: "再飞行",
        artist: '逃跑计划',
        url: 'http://music.163.com/song/media/outer/url?id=28267530.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    {
        name: "王妃",
        artist: '萧敬腾',
        url: 'http://music.163.com/song/media/outer/url?id=167942.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    //aaa
    {
        name: "君以外害（翻自 泣き虫）",
        artist: '电鸟个灯泡',
        url: 'http://music.163.com/song/media/outer/url?id=567544544.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    },
    
    
    
    {
        name: "Operation Deepness",
        artist: '塞壬唱片-MSR,VAS ANGELOV,Bailey Jehl',
        url: 'http://music.163.com/song/media/outer/url?id=1948689820.mp3',
        cover: 'https://gitee.com/Agares1024/img/raw/master/img/ba59cf8d39d198f5c1b0def2b9076b1c-2022-12-411:51:01.jpg',
    }
    ]

    

    });