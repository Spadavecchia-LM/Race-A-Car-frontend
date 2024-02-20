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
            "https://res.cloudinary.com/leoms96/image/upload/v1708363566/autos/bmw%20suv/jan-kopriva-blaEhjcCyV8-unsplash_zdkjak.jpg",
            "https://res.cloudinary.com/leoms96/image/upload/v1708363564/autos/bmw%20suv/timur-khabibulin-WueuHR_O_rM-unsplash_dmrg1t.jpg",
            "https://res.cloudinary.com/leoms96/image/upload/v1708363566/autos/bmw%20suv/jan-kopriva-blaEhjcCyV8-unsplash_zdkjak.jpg",
            "https://res.cloudinary.com/leoms96/image/upload/v1708363566/autos/bmw%20suv/jan-kopriva-blaEhjcCyV8-unsplash_zdkjak.jpg",
            "https://res.cloudinary.com/leoms96/image/upload/v1708363566/autos/bmw%20suv/jan-kopriva-blaEhjcCyV8-unsplash_zdkjak.jpg",
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
            "https://res.cloudinary.com/leoms96/image/upload/v1708363711/autos/cayennes%20gts/lalithmalhaar-gudi-ed0ic2syz0o-unsplash_uktcxl.jpg",
            "https://res.cloudinary.com/leoms96/image/upload/v1708363711/autos/cayennes%20gts/lalithmalhaar-gudi-ed0ic2syz0o-unsplash_uktcxl.jpg",
            "https://res.cloudinary.com/leoms96/image/upload/v1708363711/autos/cayennes%20gts/lalithmalhaar-gudi-ed0ic2syz0o-unsplash_uktcxl.jpg",
            "https://res.cloudinary.com/leoms96/image/upload/v1708363711/autos/cayennes%20gts/lalithmalhaar-gudi-ed0ic2syz0o-unsplash_uktcxl.jpg",
            "https://res.cloudinary.com/leoms96/image/upload/v1708363711/autos/cayennes%20gts/lalithmalhaar-gudi-ed0ic2syz0o-unsplash_uktcxl.jpg",

        ]

    },
    {
        id:3,
        marca: "Mc Laren",
        modelo: "750s",
        anio: 2022,
        precio: 90,
        capacidad: 2,
        categoria: "GT",
        hp:350,
        transmision:"automatica",
        imagenes: [
            "https://res.cloudinary.com/leoms96/image/upload/v1708363803/autos/mc%20laren/claudio-schwarz-Zv8GOTkNEXM-unsplash_lm0l1o.jpg",
            "https://res.cloudinary.com/leoms96/image/upload/v1708363803/autos/mc%20laren/claudio-schwarz-Zv8GOTkNEXM-unsplash_lm0l1o.jpg",
            "https://res.cloudinary.com/leoms96/image/upload/v1708363803/autos/mc%20laren/claudio-schwarz-Zv8GOTkNEXM-unsplash_lm0l1o.jpg",
            "https://res.cloudinary.com/leoms96/image/upload/v1708363803/autos/mc%20laren/claudio-schwarz-Zv8GOTkNEXM-unsplash_lm0l1o.jpg",
            "https://res.cloudinary.com/leoms96/image/upload/v1708363803/autos/mc%20laren/claudio-schwarz-Zv8GOTkNEXM-unsplash_lm0l1o.jpg",

        ]

    },
    {
        id:4,
        marca: "BMW",
        modelo: "M5 Competition",
        anio: 2023,
        precio: 120,
        capacidad: 4,
        categoria: "Sport Coupe",
        hp:720,
        transmision:"automatica",
        imagenes: [
            "https://res.cloudinary.com/leoms96/image/upload/v1708363956/autos/bmw%20m5/serjan-midili-B8pmrv_WkYU-unsplash_bszv8r.jpg",
            "https://res.cloudinary.com/leoms96/image/upload/v1708363956/autos/bmw%20m5/serjan-midili-B8pmrv_WkYU-unsplash_bszv8r.jpg",
            "https://res.cloudinary.com/leoms96/image/upload/v1708363956/autos/bmw%20m5/serjan-midili-B8pmrv_WkYU-unsplash_bszv8r.jpg",
            "https://res.cloudinary.com/leoms96/image/upload/v1708363956/autos/bmw%20m5/serjan-midili-B8pmrv_WkYU-unsplash_bszv8r.jpg",
            "https://res.cloudinary.com/leoms96/image/upload/v1708363956/autos/bmw%20m5/serjan-midili-B8pmrv_WkYU-unsplash_bszv8r.jpg",

        ]

    },
    
]

export {marcas, categorias, publicaciones}