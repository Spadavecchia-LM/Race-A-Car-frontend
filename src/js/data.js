const marcas = [
    {
        marca:"Toyota",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708310342/marcas/Vector_3_ipyf6k.png"
    },
    {
        marca:"Ford",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708310342/marcas/layer1_nzwcu0.png"
    },
    {
        marca:"Tesla",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708310342/marcas/Tesla_svg_fpdowy.png"
    },
    {
        marca:"Volkswagen",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708310344/marcas/Volkswagen_USA_svg_p5bjis.png"
    },
    {
        marca:"Honda",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708310343/marcas/Honda_svg_sfchjj.png"
    },
    {
        marca:"Nissan",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708310343/marcas/Nissan_USA_svg_jfxnga.png"
    },
    {
        marca:"Chevrolet",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708310342/marcas/Chevrolet_-_png_lqwfxw.png"
    },
    {
        marca:"BMW",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708310343/marcas/bmw_logo_icon_145840_1_ukh4ig.png"
    },
    {
        marca:"Mercedes-Benz",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708310343/marcas/mercedes_benz_logo_icon_145798_1_p1uibe.png"
    },
    {
        marca:"Hyundai",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708310343/marcas/Hyundai_svg_tyz6r4.png"
    },
    {
        marca:"KIA",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708310343/marcas/Kia_svg_b2gz5c.png"
    },
    {
        marca:"AUDI",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708310342/marcas/Audi_svg_kotuqc.png"
    },
]

const categorias = [
    {
        nombre:"SUV",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708360550/tipos/crossover-red_1_jebqnk.png"
    },
    {
        nombre:"Wagon",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708360550/tipos/wagon-red_1_1_xidk8l.png"
    },
    {
        nombre:"Sport Coupe",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708360549/tipos/sport-coupe-red_1_razy1f.png"
    },
    {
        nombre:"Sedan",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708360549/tipos/sedan-red_1_b06k6d.png"
    },
    {
        nombre:"Hatchback",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708360549/tipos/suv-red_1_grmgt1.png"
    },
    {
        nombre:"Compact",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708360549/tipos/compact-red_1_aejt0n.png"
    },
    {
        nombre:"Limousine",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708360550/tipos/wagon-red_1_1_xidk8l.png"
    },
    {
        nombre:"Convertible",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708360550/tipos/convertible-red_1_eke61j.png"
    },
    {
        nombre:"Pick up",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708360549/tipos/pickup-red_1_y8sucs.png"
    },
    {
        nombre:"GT",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708360549/tipos/sport-coupe-red_1_razy1f.png"
    },
    {
        nombre:"Electrico",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708360549/tipos/sedan-red_1_b06k6d.png"
    },
    {
        nombre:"Híbrido",
        imagen:"https://res.cloudinary.com/leoms96/image/upload/v1708360549/tipos/sedan-red_1_b06k6d.png"
    }
]

const publicaciones = [
    {
        id:1,
        marca: "BMW",
        modelo: "X7 M50i",
        anio: 2022,
        precio: 87,
        capacidad: 5,
        categoria: "SUV",
        hp:350,
        transmision:"manual",
        imagenes: [
            "https://www.wsupercars.com/wallpapers-regular/BMW/2019-BMW-X7-006-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/BMW/2019-BMW-X7-004-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/BMW/2019-BMW-X7-001-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/BMW/2019-BMW-X7-005-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/BMW/2019-BMW-X7-007-1600.jpg",
        ]

    },
    {
        id:2,
        marca: "Porsche",
        modelo: "Cayenne GTS",
        anio: 2022,
        precio: 70,
        capacidad: 4,
        categoria: "Sedan",
        hp:350,
        transmision:"manual",
        imagenes: [
            "https://www.wsupercars.com/wallpapers-regular/Porsche/2020-Porsche-Cayenne-GTS-004-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Porsche/2020-Porsche-Cayenne-GTS-003-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Porsche/2015-Porsche-Cayenne-GTS-005-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Porsche/2020-Porsche-Cayenne-GTS-007-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Porsche/2020-Porsche-Cayenne-GTS-005-1600.jpg",

        ]

    },
    {
        id:3,
        marca: "Mc Laren",
        modelo: "750s",
        anio: 2024,
        precio: 90,
        capacidad: 2,
        categoria: "GT",
        hp:350,
        transmision:"automatica",
        imagenes: [
            "https://www.wsupercars.com/wallpapers-regular/McLaren/2024-McLaren-750S-002-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/McLaren/2024-McLaren-750S-001-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/McLaren/2024-McLaren-750S-003-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/McLaren/2024-McLaren-750S-005-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/McLaren/2024-McLaren-750S-004-1600.jpg",

        ]

    },
    {
        id:4,
        marca: "BMW",
        modelo: "M5 Competition",
        anio: 2021,
        precio: 120,
        capacidad: 4,
        categoria: "Sport Coupe",
        hp:720,
        transmision:"automatica",
        imagenes: [
            "https://www.wsupercars.com/wallpapers-regular/BMW/2021-BMW-M5-Competition-002-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/BMW/2021-BMW-M5-Competition-006-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/BMW/2021-BMW-M5-Competition-005-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/BMW/2021-BMW-M5-Competition-007-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/BMW/2021-BMW-M5-Competition-012-1600.jpg",

        ]

    },
    {
        id:5,
        marca: "Acura",
        modelo: "NSX Type S",
        anio: 2022,
        precio: 80,
        capacidad: 2,
        categoria: "Sport Coupe",
        hp:550,
        transmision:"automatica",
        imagenes: [
            "https://www.wsupercars.com/wallpapers-regular/Acura/2022-Acura-NSX-Type-S-001-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Acura/2022-Acura-NSX-Type-S-003-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Acura/2022-Acura-NSX-Type-S-002-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Acura/2022-Acura-NSX-Type-S-005-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Acura/2022-Acura-NSX-Type-S-006-1600.jpg",

        ]

    },
    {
        id:6,
        marca: "Bugatti",
        modelo: "Chiron SS",
        anio: 2022,
        precio: 1250,
        capacidad: 2,
        categoria: "GT",
        hp:1160,
        transmision:"manual",
        imagenes: [
            "https://www.wsupercars.com/wallpapers-regular/Bugatti/2022-Bugatti-Chiron-Super-Sport-002-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Bugatti/2022-Bugatti-Chiron-Super-Sport-001-1600.jpg ",
            "https://www.wsupercars.com/wallpapers-regular/Bugatti/2022-Bugatti-Chiron-Super-Sport-005-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Bugatti/2022-Bugatti-Chiron-Super-Sport-006-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Bugatti/2022-Bugatti-Chiron-Super-Sport-007-1600.jpg",

        ]

    },
    {
        id:7,
        marca: "Koenigsegg",
        modelo: "Agera RS",
        anio: 2015,
        precio: 2500,
        capacidad: 2,
        categoria: "GT",
        hp:850,
        transmision:"automatica",
        imagenes: [
            "https://www.wsupercars.com/wallpapers-regular/Koenigsegg/2015-Koenigsegg-Agera-RS-001-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Koenigsegg/2015-Koenigsegg-Agera-RS-003-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Koenigsegg/2015-Koenigsegg-Agera-RS-002-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Koenigsegg/2015-Koenigsegg-Agera-RS-004-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Koenigsegg/2015-Koenigsegg-Agera-RS-006-1600.jpg",

        ]

    },
    {
        id:8,
        marca: "Lamborghini",
        modelo: "Huracan Serato",
        anio: 2024,
        precio: 1800,
        capacidad: 2,
        categoria: "Sport Coupe",
        hp:760,
        transmision:"automatica",
        imagenes: [
            "https://www.wsupercars.com/wallpapers-regular/Lamborghini/2024-Lamborghini-Huracan-Sterrato-005-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Lamborghini/2024-Lamborghini-Huracan-Sterrato-006-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Lamborghini/2024-Lamborghini-Huracan-Sterrato-001-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Lamborghini/2024-Lamborghini-Huracan-Sterrato-009-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Lamborghini/2024-Lamborghini-Huracan-Sterrato-010-1600.jpg",

        ]

    },
    {
        id:9,
        marca: "Audi",
        modelo: "S5 Coupe",
        anio: 2017,
        precio: 250,
        capacidad: 4,
        categoria: "Sport Coupe",
        hp:430,
        transmision:"automatica",
        imagenes: [
            "https://www.wsupercars.com/wallpapers-regular/Audi/2017-Audi-S5-Coupe-001-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Audi/2017-Audi-S5-Coupe-002-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Audi/2017-Audi-S5-Coupe-003-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Audi/2017-Audi-S5-Coupe-004-1600.jpg",
            "https://www.wsupercars.com/wallpapers-regular/Audi/2017-Audi-S5-Coupe-005-1600.jpg",

        ]

    },
    {
        id:10,
        marca: "Ford",
        modelo: "F-150 Raptor R",
        anio: 2023,
        precio: 550,
        capacidad: 5,
        categoria: "Pick Up",
        hp:600,
        transmision:"automatica",
        imagenes: [
            "https://www.wsupertrucks.com/wallpapers-regular/Ford/2023-Ford-F-150-Raptor-R-001-1600.jpg",
            "https://www.wsupertrucks.com/wallpapers-regular/Ford/2023-Ford-F-150-Raptor-R-002-1600.jpg",
            "https://www.wsupertrucks.com/wallpapers-regular/Ford/2023-Ford-F-150-Raptor-R-004-1600.jpg",
            "https://www.wsupertrucks.com/wallpapers-regular/Ford/2023-Ford-F-150-Raptor-R-003-1600.jpg",
            "https://www.wsupertrucks.com/wallpapers-regular/Ford/2023-Ford-F-150-Raptor-R-005-1600.jpg",

        ]

    },
  
    
]

export {marcas, categorias, publicaciones}