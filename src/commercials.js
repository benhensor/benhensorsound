const commercials = [
  {
  id: 1,
  title: "Jaguar - Alive",
  image: "../thumbnails/commercials/jaguar-alive.png",
  embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/316880296?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Jaguar - Alive"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
  },
  {
    id: 2,
    title: "Brompton Bike",
    image: "../thumbnails/commercials/brompton.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/316877674?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Brompton Bike - Light Up"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
  },
  {
    id: 3,
    title: "Midleton - Very Rare",
    image: "../thumbnails/commercials/midleton-veryrare.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/317562274?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Midleton - Very Rare"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
  },

  {
    id: 4,
    title: "Enter the World of Miro",
    image: "../thumbnails/commercials/miro.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/316878835?badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>'
  },
  {
    id: 5,
    title: "The Regal",
    image: "../thumbnails/commercials/the-regal.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/350996219?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="The Regal - Queen of the Court"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
  },
  {
    id: 6,
    title: "Olympus TG4",
    image: "../thumbnails/commercials/olympus.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/316878489?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Ed Farrelly - OLYMPUS TG-4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
  },
  {
    id: 7,
    title: "Revival - Rugs",
    image: "../thumbnails/commercials/revival-rugs.png",
    embedVideo: '<div style="padding:52.84% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/388887682?badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>'
  },
  {
    id: 8,
    title: "Midleton - Very Rare",
    image: "../thumbnails/commercials/midleton-veryrare2.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/387314057?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Midleton - Very Rare - Directors Cut 90"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
  },
  {
    id: 9,
    title: "Vogue - Primark",
    image: "../thumbnails/commercials/vogue-primark.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/316877351?badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>'
  },
  {
    id: 10,
    title: "Hypebeast - pureBOOST London",
    image: "../thumbnails/commercials/hypebeast-pure-london.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/316879706?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Hypebeast x Adidas - PureBOOST DPR - London"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
  },
  {
    id: 11,
    title: "Ullac",
    image: "../thumbnails/commercials/ullac.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/387314119?badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>'
  },
  {
    id: 12,
    title: "Young Minds - The Parent's Helpline",
    image: "../thumbnails/commercials/youngminds.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/319561339?badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>'
  },
  {
    id: 13,
    title: "Hypebeast - Prophere Paris",
    image: "../thumbnails/commercials/hypebeast-paris.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/319559623?badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>'
  },
  {
    id: 14,
    title: "Adidas Originals - Home of Classics - Sistren",
    image: "../thumbnails/commercials/sistren.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/389094311?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Adidas - Home of Classics - Sistren"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
  },
  {
    id: 15,
    title: "Stand Up To Cancer - David Haye",
    image: "../thumbnails/commercials/sutc-davidhaye.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/316878417?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Stand Up To Cancer - David Haye"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
  },
  {
    id: 16,
    title: "Adidas Originals - Home of Classics - IZCO",
    image: "../thumbnails/commercials/izco.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/389088750?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Adidas - Home of Classics - IZCO"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
  },
  {
    id: 17,
    title: "Dorothy Perkins - Destination Summer",
    image: "../thumbnails/commercials/dorothy-perkins.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/388693907?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="DOROTHY PERKINS - DESTINATION SUMMER"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
  },
  {
    id: 18,
    title: "Jameson Craft Series - DeBruir",
    image: "../thumbnails/commercials/debruir.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/317554674?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Jameson Craft Series - DeBruir"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
  },
  {
    id: 19,
    title: "Hypebeast - Prophere London",
    image: "../thumbnails/commercials/hypebeast-london.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/389323999?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Hypebeast - Prophere - London"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
  },
  {
    id: 20,
    title: "Adidas Originals - Home of Classics - Jourdan Dunn",
    image: "../thumbnails/commercials/jourdan-dunn.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/389086926?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Adidas - Home of Classics - Jourdan Dunn"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
  },
  {
    id: 21,
    title: "Adidas Originals - Home of Classics - Savannah Keenan",
    image: "../thumbnails/commercials/savannah-keenan.png",
    embedVideo: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/389093254?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Adidas Originals - Home of Classics - Savannah Keenan"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
  },
]

export default commercials;