import React, { useState } from 'react';
import styled from 'styled-components';

const India = (props) => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedCardIndex(index === expandedCardIndex ? null : index);
  };

  const cardData = [
    {
        title: 'ADAMAN AND NICOBAR ISLANDS',
        description:
          "Andaman and Nicobar Islands, a union territory in the Bay of Bengal, boast a unique culture blending indigenous tribes, settlers, and visitors, fostering peaceful coexistence.",
        imageUrl: 'https://st5.depositphotos.com/6318296/67334/v/450/depositphotos_673345656-stock-illustration-gili-islands-indonesia-colorful-vector.jpg',
        foodImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpNz-RgofgTzMOPfz5f8R_f4Y40--4U0jMGcngZ1bCw&s',
        foodTitle1: 'Fish Curry',
        foodImage2: 'https://www.seriouseats.com/thmb/3dFjzacZ0gSdlibO6UpuBwBeSaw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__03__25.03.201420Spicy-Indian-Crab-Masala-Fry-cd7dc3ba0d8b4f3489c13c4989ddeb4c.jpg',
        foodTitle2: 'Crab Masala',
        touristPlacesImage1: 'https://www.trawell.in/admin/images/upload/171363660Andaman_Cellular_Jail_Main.jpg',
        touristTitle1: 'Cellular Jail',
        touristPlacesImage2: 'https://andamantourism.org.in/images/places-to-visit/header/ross-island-andaman-tourism-entry-fee-timings-holidays-reviews-header.jpg',
        touristTitle2: 'Ross Island',
      },
    {
      title: 'ANDHRA PRADESH',
      description:
        "The state is also recognized for its contribution to classical dance forms like Kuchipudi.",
      imageUrl: 'https://cdn.dribbble.com/users/1207323/screenshots/4646181/media/8a0b4e399f0bebc6bec0dc275b8b081f.jpg?resize=800x600&vertical=center',
      foodImage1: 'https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_720,h_480,al_c,q_80,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg',
      foodTitle1: 'Rice',
      foodImage2: 'https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_600874184-1-750x750.jpg',
      foodTitle2: 'Gongura Chicken',
      touristPlacesImage1: 'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_11162494701_20200130180527_20200130180558.png',
      touristTitle1: 'Araku Valley',
      touristPlacesImage2: 'https://static.toiimg.com/img/97972409/Master.jpg',
      touristTitle2: 'Tirumala Venkateswara Temple',
    },
    {
        title: 'ARUNACHAL PRADESH',
        description:
          "This northeastern state is not only known for its breathtaking natural beauty but also for its efforts to preserve indigenous cultures and traditions.",
        imageUrl: 'https://cdn.dribbble.com/users/4112114/screenshots/11213291/media/5c4f29bb6812c98523d1e23ef2a535e3.jpg?resize=800x600&vertical=center', 
        foodImage1: 'https://images.herzindagi.info/image/2022/Nov/2.-Bamboo-Shoots.jpg',
        foodTitle1: 'Pika Pila',
        foodImage2: 'https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/11/Bamboo_Shoot_Stir_Fry.jpg',
        foodTitle2: 'Bamboo Shoot',
        touristPlacesImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfr-VuVrT5GIEjQtEv_lMBVixRiz__Uo5wpHv8ItpdgEaCQen4j6NePPYM5DwejfuAveA&usqp=CAU',
        touristTitle1: 'Tawang Monastery',
        touristPlacesImage2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtiGeHulL7MIFS-PmixtzwfoC1agysc12qpFVgpTHJduwIZLa6WN-t4bmO_Y6rCp-wMhc&usqp=CAU',
        touristTitle2: 'Ziro Valley',
      },
      {
        title: 'ASSAM',
        description:
          "Assam, renowned for its tea and silk, boasts vibrant festivals and rich biodiversity, home to the one-horned rhinoceros and vibrant cultural expressions.",
        imageUrl: 'https://cdn.dribbble.com/users/5200116/screenshots/14945489/media/cd9743eee2e891ad8cc2360fa5fabf83.jpg?resize=1000x750&vertical=center',
        foodImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXK0R5PDz2N33_m0AerbKeZ43xiByaG-XZ6PdLcwaKbYqXk7tdc1HfuBp8N3Ja3ElREE0&usqp=CAU',
        foodTitle1: 'Jolpan',
        foodImage2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tBgMz9fqA4FkesZ1hDXTb1XXoRFoV7c0nhe1nR_bRWU9pclQArh0qrPdVke_cyH6sbc&usqp=CAU',
        foodTitle2: 'Khar',
        touristPlacesImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGpdKOvZpLBD0ZhTWkLQzCKAmkkFqyOuEAd_ZlAUcGJM1DFD1lsaUQThZMYO_WIYOOQY&usqp=CAU',
        touristTitle1: 'Kaziranga National Park',
        touristPlacesImage2: 'https://static.toiimg.com/photo/64012913.cms',
        touristTitle2: 'Majuli Island',
      },
      {
        title: 'BIHAR',
        description:
          "Bihar, birthplace of Lord Buddha, houses ancient centers of learning like Nalanda and Vikramshila universities. Renowned for Madhubani art and Bihari cuisine.",
        imageUrl: 'https://cdn.dribbble.com/userupload/11469918/file/original-203227504d1398c738a1f1574e5205b2.png?resize=1200x900',
        foodImage1: 'https://www.secondrecipe.com/wp-content/uploads/2019/11/litti-chokha-1.jpg',
        foodTitle1: 'Litti Chokha',
        foodImage2: 'https://www.chefkunalkapur.com/wp-content/uploads/2021/12/OZZ_9225-scaled.jpg?v=1639763212',
        foodTitle2: 'Sattu Paratha',
        touristPlacesImage1: 'https://media-cdn.tripadvisor.com/media/photo-c/1280x250/11/39/d8/f6/20171109-125300-largejpg.jpg',
        touristTitle1: 'Bodh Gaya',
        touristPlacesImage2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA3YRTlN1Z3PuGe_A4oAIK0h-vT1EE2_WDdOBhEA6AVhQeA4f7kxTxkuSlvkmKEWQWXOc&usqp=CAU',
        touristTitle2: 'Vaishali',
      },
      {
        title: 'CHANDIGARH',
        description:
          "Chandigarh, capital of Punjab and a union territory, is a cosmopolitan hub embodying diverse cultures, reflecting a harmonious blend of cultural influences from across India.",
        imageUrl: 'https://cdn.dribbble.com/users/1125116/screenshots/4629253/media/39d9d03901e4c5048074814729b5463a.jpg?resize=800x600&vertical=center',
        foodImage1: 'https://myfoodstory.com/wp-content/uploads/2022/01/Sarson-ka-Saag-3.jpg',
        foodTitle1: 'Sarson ka Saag',
        foodImage2: 'https://zatpatrecipeingujarati.com/wp-content/uploads/2023/02/chole-bhature-banavani-rit-.jpg',
        foodTitle2: 'Chhole Bhature',
        touristPlacesImage1: 'https://img.veenaworld.com/wp-content/uploads/2021/03/Rock-Garden-Chandigarh-scaled.jpg',
        touristTitle1: 'Rock Garden',
        touristPlacesImage2: 'https://map.sahapedia.org/admin/assets/images/2022051914272928Copy_of_Copy_of_IMG_1912_Edited.jpg?__imr__=bannerArticle',
        touristTitle2: 'Sukhna Lake',
      },
      {
        title: 'CHHATTISGARH',
        description:
          "Chhattisgarh, India's 'Rice Bowl', boasts a vibrant cultural tapestry with Bastar's tribal art and craft traditions. Its lush forests and waterfalls allure both nature enthusiasts and adventurers.",
        imageUrl: 'https://images.assetsdelivery.com/compings_v2/premiumstock/premiumstock1801/premiumstock180100036.jpg',
        foodImage1: 'https://media.springernature.com/lw685/springer-static/image/art%3A10.1186%2Fs42779-021-00103-6/MediaObjects/42779_2021_103_Fig1_HTML.jpg',
        foodTitle1: 'Bhakri',
        foodImage2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfLr32rz4UiCosYkn2HNDvanPBP2Mm0K8AcACoNxToy3lZOZaX7RN1Un0agObqjN5Fb80&usqp=CAU',
        foodTitle2: 'Muthiya',
        touristPlacesImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKBm8gtWKtZi9Ny15ZmAhmJVVmm5_in-EHpOGDV3MI0cckI6w-fo72Lia9c9-Ht71kJM&usqp=CAU',
        touristTitle1: 'Kanger Valley National Park',
        touristPlacesImage2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/44/c5/49/chitrakoot-falls.jpg?w=1200&h=1200&s=1',
        touristTitle2: 'Chitrakoot Falls',
      },
      {
        title: 'DADRA & NAGAR HAVELI AND DAMAN & DIU',
        description:
          "Dadra and Nagar Haveli and Daman & Diu, a union territory in Western India, comprises Dadra, Nagar Haveli, Daman, and Diu.",
        imageUrl: 'https://thumbs.dreamstime.com/b/vector-diu-india-illustration-beautiful-portuguese-church-postcard-hand-drawn-cityscape-sketch-travel-art-vintage-artistic-234580688.jpg',
        foodImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73SYbitRMasoAPPNg_RXUMvBijX1orfE0AZmMsUUHNw&s',
        foodTitle1: 'Daman Fish Fry',
        foodImage2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzm9buXZTJ898AgCZwhfiQQsSycVOJnHBUYZ9rlc8UTQ&s',
        foodTitle2: 'Chicken Xacuti',
        touristPlacesImage1: 'https://cdn.britannica.com/27/1627-050-6E7FEBFB/fort-Portuguese-coast-Diu.jpg',
        touristTitle1: 'Daman Fort',
        touristPlacesImage2: 'https://clubmahindra.gumlet.io/blog/media/section_images/bannerdesk-239e5b22c851bd7.webp?w=376&dpr=2.6',
        touristTitle2: 'Nagar Haveli Waterfalls',
      },
      {
        title: 'DELHI',
        description:
            'The Government of the National Capital Territory of Delhi (NCT) is the governing body of Delhi, the capital city of India. Delhi is a federal territory and not a union territory.',
        imageUrl: 'https://cdn.dribbble.com/userupload/6550854/file/original-22bca533108ed135096a81c5acd84ddb.jpg?resize=1200x1200',
        foodImage1: 'https://masalaandchai.com/wp-content/uploads/2022/03/Butter-Chicken.jpg',
        foodTitle1: 'Butter Chicken',
        foodImage2: 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/11/22120901/best-paratha-in-Delhi-1.jpg',
        touristPlacesImage1: 'https://static.toiimg.com/photo/65666850.cms',
        touristTitle1: 'Red Fort',
        touristPlacesImage2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b7/1f/31/qutab-minar.jpg?w=1200&h=1200&s=1',
        touristTitle2: 'Qutub Minar',
    },
      {
        title: 'GOA',
        description:
          "Goa's colonial legacy and picturesque beaches attract tourists, complemented by a vibrant nightlife. Its cuisine, a blend of Portuguese and Konkani.",
        imageUrl: 'https://cdn.dribbble.com/users/6808378/screenshots/15354630/media/fce51dcfa286f06cb718e006640f47a3.jpeg?resize=1000x750&vertical=center',
        foodImage1: 'https://www.spiceandlife.com/wp-content/uploads/2023/02/Kerala-Beef-Fry.jpg',
        foodTitle1: 'Beef Fry',
        foodImage2: 'https://www.recipetineats.com/wp-content/uploads/2020/10/Goan-Fish-Curry_6-SQ.jpg',
        foodTitle2: 'Fish Curry',
        touristPlacesImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDw7altS78fOuw6AIcW8ulOkgnq_58xY0BEdJUukmzQAa1eRSeut28PipS04YIX5_vNQ&usqp=CAU',
        touristTitle1: 'Basilica of Bom Jesus',
        touristPlacesImage2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT306WyJqMsVtXH_v6rt5ZHxBOwZTwzskjlftEc66mQO2agE7GEZw9-7I_yUwx_u_qznDc&usqp=CAU',
        touristTitle2: 'Palolem Beach',
      },
      {
        title: 'GUJARAT',
        description:
          "Gujarat offers rich heritage and attractions like Kutch desert and Gir National Park, complemented by architectural marvels and the vibrant Rann Utsav, promising travelers an unforgettable cultural experience.",
        imageUrl: 'https://cdn.dribbble.com/users/3421954/screenshots/6276701/gujarat_final_4x.jpg?resize=1000x750&vertical=center',
        foodImage1: 'https://i0.wp.com/aartimadan.com/wp-content/uploads/2023/02/Corn-Dhokla.jpg?fit=800%2C449&ssl=1',
        foodTitle1: 'Dhokla',
        foodImage2: 'https://i0.wp.com/myvegetarianroots.com/wp-content/uploads/2019/12/DSC_0024-2.jpeg?fit=1920%2C1335&ssl=1',
        foodTitle2: 'Thepla',
        touristPlacesImage1: 'https://miro.medium.com/v2/resize:fit:840/1*f9tAxE83-Fnc_U2QsWFYgQ.jpeg',
        touristTitle1: 'Gir National Park',
        touristPlacesImage2: 'https://www.tripsavvy.com/thmb/Yh7C0nh6CKbB5BmhRz3il-V8sm8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-537000923-541774dbe2d44759815fdf0719b04685.jpg',
        touristTitle2: 'Rann of Kutch',
      },
      {
        title: 'HARYANA',
        description:
          "Haryana's agrarian economy and Kurukshetra's historical sites underscore its rich cultural heritage, with folk music echoing rural traditions and modern cities driving industrial growth.",
        imageUrl: 'https://cdn.dribbble.com/users/1197681/screenshots/4729204/media/9fcddaae94df9a363cb4dd5510131646.png?resize=800x600&vertical=center',
        foodImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rNkBmngdcv-BLZN8BSquSQZm_mHkOxhzco7hZrXb4EIn507PjgLTeh_32mHCE2nkvhI&usqp=CAU',
        foodTitle1: 'Parathas',
        foodImage2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGrzSt9MRTWdbMEqWMnCeoVsD7z3UCl7W9OD85GAt3wpMmfCDXb85T5TESY_rfygZad1U&usqp=CAU',
        foodTitle2: 'Kadhi',
        touristPlacesImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjZLTu-hmUjytgwgnJ6SPGZzqC5XtyICGuS3Ew4z_ZzYCjvP8yo_PK_Eh6XfUBp25e3o&usqp=CAU',
        touristTitle1: 'Taj Mahal',
        touristPlacesImage2: 'https://static.toiimg.com/thumb/50481522/Main-Image-Kurukshetra_compressed.jpg?width=1200&height=900',
        touristTitle2: 'Kurukshetra',
      },
      {
        title: 'HIMACHAL PRADESH',
        description:
          "Himachal Pradesh's scenic allure and adventure sports draw global tourists, while Tibetan influence in Dharamshala and McLeodGanj enriches its cultural tapestry.",
        imageUrl: 'https://cdn.dribbble.com/users/11987547/screenshots/18406630/media/913f45cd103355f8093fa5e94d0f0c3b.jpg?resize=1000x750&vertical=center',
        foodImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSy7WOHrwscM_EVHKxcGzDSMgBnV6uoN2LPcjmKBNes5yZhPDzKi-DhObejty6jLv6gCg&usqp=CAU',
        foodTitle1: 'Dhaam',
        foodImage2: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Pooja_Thakur/Himachali_Chana_MadraChickpeas_in_yogurt_based_gravy.jpg',
        foodTitle2: 'Madra',
        touristPlacesImage1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Manali_City.jpg/1200px-Manali_City.jpg',
        touristTitle1: 'Manali',
        touristPlacesImage2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUV4kip7vpQdfkdRzXSE4VinCv-TuRR3XioGRLEX4rt-Fd9TQKe4p9qOYn5PyXeSwF9s&usqp=CAU',
        touristTitle2: 'Dharamsala',
      },
      {
        title: 'JAMMU & KASHMIR',
        description:
          "Jammu & Kashmir, the 'Paradise on Earth', captivates with breathtaking landscapes, serene lakes, and snow-capped peaks, offering an enchanting escape into nature's embrace.",
        imageUrl: 'https://cdn.dribbble.com/users/5536680/screenshots/12125582/media/f0ef7d2522f615a3dcdf6209ed9cd159.jpg?resize=1000x750&vertical=center',
        foodImage1: 'https://www.whiskaffair.com/wp-content/uploads/2019/02/Mutton-Rogan-Josh-2-3.jpg',
        foodTitle1: 'Rogan Josh',
        foodImage2: 'https://i.ytimg.com/vi/QVNtL1bmkcA/maxresdefault.jpg',
        foodTitle2: 'Rajma Kulcha',
        touristPlacesImage1: 'https://static.wanderon.in/wp-content/uploads/2023/11/gondola-ride-in-autumn-in-kashmir-2023-11-03t164430.753-min.png',
        touristTitle1: 'Dal Lake',
        touristPlacesImage2: 'https://www.hindustantimes.com/ht-img/img/2023/05/19/1600x900/Gulmarg_Kashmir_Valley_1684489094985_1684489103602.jpg',
        touristTitle2: 'Gulmarg',
      },
      {
        title: 'JHARKHAND',
        description:
          "Jharkhand's mineral wealth fuels India's industry, complemented by vibrant tribal festivals and natural beauty comprising lush forests and wildlife sanctuaries.",
        imageUrl: 'https://cdn.dribbble.com/users/2420199/screenshots/7475401/media/5c0feeba282dbeb6b7bc5c095b7b3de1.jpg?resize=1000x750&vertical=center',
        foodImage1: 'https://www.spicingyourlife.com/wp-content/uploads/2014/04/Jharkhand-Daal-Pitha-Tomata-Chutney.jpg',
        foodTitle1: 'Pitha',
        foodImage2: 'https://i.ytimg.com/vi/FDAKn1v3q-w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC7jCdkFgLuQ1adY9VkNAKy6YETlg',
        foodTitle2: 'Kadhi',
        touristPlacesImage1: 'https://1.bp.blogspot.com/-uSijFIYUips/XefqYGO7k8I/AAAAAAAAKe4/whQiKqH1jjgZvoGMS1M6Gim1BoJcMCV_gCLcBGAsYHQ/s1600/IMG-20191203-WA0077.jpg',
        touristTitle1: 'Rajrappa Waterfalls',
        touristPlacesImage2: 'https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/08/9b09e4f561e8dd2954b42774ecb0bae8_1000x1000.jpg',
        touristTitle2: 'Parasnath Hill',
      },
      {
        title: 'KARNATAKA',
        description:
          "Karnataka's architectural marvels and cultural richness, from Mysore Palace to Bharatanatyam, highlight its heritage amidst IT prowess.",
        imageUrl: 'https://cdn.dribbble.com/users/1118956/screenshots/7163830/media/3ad88d65c05f9631f22125fa9bc7584f.jpg?resize=1000x750&vertical=center',
        foodImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8CgrvC5qnaBel-n1BxlYG_Sw2S6t3i3236w2jxSX7bg&s',
        foodTitle1: 'Dosa',
        foodImage2: 'https://www.karnataka.com/wp-content/uploads/2018/04/breakfast-2408818_640.jpg',
        foodTitle2: 'Idli',
        touristPlacesImage1: 'https://www.holidify.com/images/cmsuploads/compressed/attr_1568_20191102174918.jpg',
        touristTitle1: 'Mysore Palace',
        touristPlacesImage2: 'https://karnatakatourism.org/wp-content/uploads/2020/05/Hampi.jpg',
        touristTitle2: 'Hampi',
      },
      {
        title: 'KERALA',
        description:
          "Kerala's serene backwaters and Ayurvedic retreats, coupled with Kathakali performances and flavorful cuisine, define its tourist allure and cultural essence.",
        imageUrl: 'https://cdn.dribbble.com/users/11987547/screenshots/18395225/media/9706e97377905aeb371837a62f7339e1.jpg?resize=1000x750&vertical=center',
        foodImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBrwQv8i7uZdeaWW5uHk_AXchAQxNAdl3_oADNMg1ZjQ&s',
        foodTitle1: 'Sadya',
        foodImage2: 'https://i0.wp.com/foodiesroof.com/wp-content/uploads/2023/04/InShot_20230313_144544740.jpg?w=1170&ssl=1',
        foodTitle2: 'Appam',
        touristPlacesImage1: 'https://www.tripsavvy.com/thmb/UoylMLyzOBPdDp34ForEiJd9m3s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-522478216-5ab12c4e3de4230036949cee.jpg',
        touristTitle1: 'Backwaters',
        touristPlacesImage2: 'https://deih43ym53wif.cloudfront.net/munnar-kerala-india-shutterstock_108346949_1f8da1cae0.jpeg',
        touristTitle2: 'Munnar',
      },
      {
        title: 'LADAKH',
        description:
          "Ladakh, 'The Land of High Passes', famed for dramatic landscapes and vibrant culture, hosts pristine lakes and ancient monasteries, inviting a mesmerizing Himalayan journey.",
        imageUrl: 'https://cdn.dribbble.com/userupload/12721306/file/original-d61de42a547200caf6729bdcc135c9a9.jpg?resize=1024x1024',
        foodImage1: 'https://images.slurrp.com/prodarticles/jqfj17e4go.webp',
        foodTitle1: 'Skyu',
        foodImage2: 'https://www.lehladakhindia.com/blog/wp-content/uploads/2013/10/Tigmo_in_Leh-Ladakh.jpg',
        foodTitle2: 'Tingmo',
        touristPlacesImage1: 'https://www.kashmirtourmart.com/wp-content/uploads/2020/07/pangong-tso-lake-15.jpeg',
        touristTitle1: 'Pangong Lake',
        touristPlacesImage2: 'https://static.toiimg.com/photo/msid-98905858,width-96,height-65.cms',
        touristTitle2: 'Nubra Valley',
      },
      {
        title: 'LAKSHADWEEP',
        description:
          "Lakshadweep, a tropical paradise in the Arabian Sea, boasts stunning coral islands with pristine beaches and vibrant marine life, offering an idyllic escape into nature's lap.",
        imageUrl: 'https://cdn.dribbble.com/userupload/5055022/file/original-f4855e61ff101c6f77afbd87aef95811.jpg?resize=1024x699&vertical=center',
        foodImage1: 'https://clubmahindra.gumlet.io/blog/images/Kulukki-Sarbath-resized.jpg?w=800&dpr=1.3',
        foodTitle1: 'Kulukki Sarbath',
        foodImage2: 'https://clubmahindra.gumlet.io/blog/images/Mus-Kavaab-resized.jpg?w=800&dpr=1.3',
        foodTitle2: 'Mus Kavaab',
        touristPlacesImage1: 'https://media2.thrillophilia.com/images/photos/000/359/275/original/1603547546_lakshadweep-tour.jpg?width=1600&height=775',
        touristTitle1: 'Agatti Island',
        touristPlacesImage2: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/06/view-of-the-gorgeous-Kadmat-Island-OG-ss11052018.jpg',
        touristTitle2: 'Kadmat Island',
      },
      {
        title: 'MADHYA PRADESH',
        description:
          "Madhya Pradesh, the 'Heart of India', boasts historical sites and wildlife sanctuaries, offering safari adventures and diverse cuisine experiences.",
        imageUrl: 'https://cdn.dribbble.com/users/1024227/screenshots/3463801/media/263a950168422979bbf550c4cd8ba4d9.png?resize=800x600&vertical=center',
        foodImage1: 'https://www.chefkunalkapur.com/wp-content/uploads/2022/02/indori-poha-1300x926.jpg?v=1643978014',
        foodTitle1: 'Poha',
        foodImage2: 'https://www.secondrecipe.com/wp-content/uploads/2020/11/dal-bati-churma.jpg',
        foodTitle2: 'Dal Baati Churma',
        touristPlacesImage1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Khajuraho_Group_of_Monuments_4.jpg/1200px-Khajuraho_Group_of_Monuments_4.jpg',
        touristTitle1: 'Khajuraho Group of Monuments',
        touristPlacesImage2: 'https://www.mptourism.com/images/point-of-interest/The%20Great%20Stupa.jpg',
        touristTitle2: 'Sanchi Stupa',
      },
      {
        title: 'MAHARASHTRA',
        description:
          "Maharashtra's Mumbai shines as India's financial and entertainment hub, Pune as an educational center, while festivals and culinary delights enrich its cultural mosaic.",
        imageUrl: 'https://cdn.dribbble.com/users/605926/screenshots/4375841/media/b328e8c2fd61ab37e7569e66be0ed585.png?resize=800x600&vertical=center',
        foodImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMniisAGfoYXttFWRWlYMJQc3_FsE5MreOQvXoB2N0Q&s',
        foodTitle1: 'Vada Pav',
        foodImage2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy43WNvlqdmzV9hoA4YBnSaP3FpzKlP-4SsOUrcAKUKg&s',
        foodTitle2: 'Misal Pav',
        touristPlacesImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavdLzJRKy3T-JNbsu1m_Vmo7KEQSibYkMANssHS5PHg&s',
        touristTitle1: 'Ajanta and Ellora Caves',
        touristPlacesImage2: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Pratapgarh-Fort.jpg',
        touristTitle2: 'Mahabaleshwar',
      },
      {
        title: 'MANIPUR',
        description:
            'Manipur, nestled in Indias northeast, dazzles with its natural beauty and vibrant cultural heritage, including traditional dances like Manipuri dance.',
        imageUrl: 'https://cdn.dribbble.com/users/2484450/screenshots/13973391/media/f6877bbef244a801efb307b04587268b.jpg?resize=800x600&vertical=center',
        foodImage1: 'https://www.shutterstock.com/image-photo/chamthong-manipur-delicious-vegetable-stew-600nw-1367390480.jpg',
        foodTitle1: 'Chamthong ',
        foodImage2: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Ngari-fish.png',
        foodTitle2: 'Ngari',
        touristPlacesImage1: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/a8/08/e3/dzuko-valley-trip-2019.jpg?w=1200&h=-1&s=1',
        touristTitle1: 'Dzukou Valley',
        touristPlacesImage2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/4e/f8/23/war-cemetery.jpg?w=1200&h=-1&s=1',
        touristTitle2: 'Imphal War Cemetery',
    },
    {
        title: 'MEGHALAYA',
        description:
            'Meghalaya, draped in misty landscapes and lush greenery, enthralls visitors with its breathtaking natural beauty and cascading waterfalls.',
        imageUrl: 'https://cdn.dribbble.com/users/2531449/screenshots/14263748/media/3639a7eb64df03a2b48bf55462c48a74.jpg?resize=1000x750&vertical=center',
        foodImage1: 'https://img.onmanorama.com/content/dam/mm/en/food/around-the-world/images/2018/9/16/jadoh.jpg',
        foodTitle1: 'Jadoh',
        foodImage2: 'https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/03/Sakin-Gata-Meghalaya.jpg?resize=1200%2C628&ssl=1',
        foodTitle2: 'Sakin Gata',
        touristPlacesImage1: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/b3/91/22/amazing-umium-lake.jpg?w=1200&h=-1&s=1',
        touristTitle1: 'Umiam Lake',
        touristPlacesImage2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/1d/8a/ce/memories-for-life.jpg?w=1200&h=-1&s=1',
        touristTitle2: 'Elephant Falls',
    },
    {
        title: 'MIZORAM',
        description:
            'Nestled amidst rolling hills and verdant forests, Mizoram beckons with its pristine landscapes and vibrant culture.',
        imageUrl: 'https://images.meesho.com/images/products/197374465/6vkvg_512.webp',
        foodImage1: 'https://rootsandleisure.com/wp-content/uploads/2019/07/1-2.jpg',
        foodTitle1: 'Bai',
        foodImage2: 'https://untolddelicacy.com/wp-content/uploads/2021/08/misa-mach-poora-grilled-shrimp-mizoram.jpg',
        foodTitle2: 'Misa Mach Poora',
        touristPlacesImage1: 'https://bharatkasafar.files.wordpress.com/2014/03/vantawng-falls-mizoram.jpeg',
        touristTitle1: 'Vantawng Falls',
        touristPlacesImage2: 'https://ogapis.ourguest.in/storage/uploads/tours/81/itinerary/7Yhbx29x9BUcAPg6N724WCaUtrJOm4D8FE3XVGKO.jpg',
        touristTitle2: 'Rejek Tlang',
    },
    {
        title: 'NAGALAND',
        description:
            'Nagaland, nestled in the rugged hills of Northeast India, entices travelers with its rich tribal culture and stunning landscapes.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-OmIsaU61UsRJt478awxjdSTZ94I5Qx4TICCqaFblg&s',
        foodImage1: 'https://1.bp.blogspot.com/-vY4XPulbVlI/VmJziZ2yBlI/AAAAAAAABTk/yko1RPSCHEg/s1600/DSC_0452.JPG',
        foodTitle1: 'Smoked Pork and Bamboo Shoot',
        foodImage2: 'https://images.indianexpress.com/2019/08/axone_759.jpg',
        foodTitle2: 'Axone',
        touristPlacesImage1: 'https://tourism.nagaland.gov.in/wp-content/uploads/2022/06/khonoma-960x600-1.jpg',
        touristTitle1: 'Khonoma Village',
        touristPlacesImage2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/18/de/d6/kohima-war-cemetery.jpg?w=1200&h=-1&s=1',
        touristTitle2: 'Kohima War Cemetery',
    },
    {
        title: 'ODISHA',
        description:
            'Odisha, nestled along the eastern coast of India, captivates travelers with its rich history, vibrant culture, and diverse landscapes.',
        imageUrl: 'https://cdn.dribbble.com/users/10077658/screenshots/17501379/media/a547f5361a0a1e19148a89ca642d8825.jpg?resize=800x600&vertical=center',
        foodImage1: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Shaheen_Ali/Oriya_Special_Dalma_Recipe_Oriya_Dal_and_Tarkari-1.jpg',
        foodTitle1: 'Dalma',
        foodImage2: 'https://gayathriscookspot.com/wp-content/uploads/2012/04/Chenna-Poda-6-500x500.jpg',
        foodTitle2: 'Chhena Poda',
        touristPlacesImage1: 'https://vajiram-prod.s3.ap-south-1.amazonaws.com/Konark_Sun_Temple_13e71cbb6e.jpg',
        touristTitle1: 'Konark Sun Temple',
        touristPlacesImage2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Birds_eyeview_of_Chilika_Lake.jpg/800px-Birds_eyeview_of_Chilika_Lake.jpg',
        touristTitle2: 'Chilika Lake',
    },
    {
        title: 'PUDUCHERRY',
        description:
            'Puducherry, also known as Pondicherry, is a charming coastal union territory on the southeastern coast of India, renowned for its French colonial architecture, tranquil beaches, and spiritual ambience.',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/008/134/259/non_2x/bangkok-thailand-attraction-landmarks-free-vector.jpg',
        foodImage1: 'https://resortinpondicherry.in/wp-content/uploads/2023/03/crab-masala-fry-food.jpg',
        foodTitle1: 'Crab Masala Fry',
        foodImage2: 'https://resortinpondicherry.in/wp-content/uploads/2023/03/ratatouille-food.jpg',
        foodTitle2: 'Ratatouille',
        touristPlacesImage1: 'https://cdnuploads.aa.com.tr/uploads/Contents/2019/02/20/thumbs_b_c_399ee10abc873367a4fe9fe6c1627b3e.jpg?v=123056',
        touristTitle1: 'Auroville',
        touristPlacesImage2: 'https://www.luxurytrailsofindia.com/wp-content/uploads/2016/11/Paradise-Beach-Pondicherry-Tamil-nadu-India.jpg',
        touristTitle2: 'Paradise Beach',
    },
    {
        title: 'PUNJAB',
        description:
            'Punjab, known as the "Land of Five Rivers," beckons with its rich cultural heritage, vibrant festivals, and warm hospitality.',
        imageUrl: 'https://cdn.dribbble.com/users/12757429/screenshots/19060448/media/560f13bf889277154f751bf7824a5012.jpg?resize=1000x750&vertical=center',
        foodImage1: 'https://www.bigbasket.com/media/uploads/recipe/w-l/1826_1_1.jpg',
        foodTitle1: 'Sarson ka Saag and Makki Di Roti',
        foodImage2: 'https://niksharmacooks.com/wp-content/uploads/2022/11/ButterChickenDSC_5616.jpg',
        foodTitle2: 'Butter Chicken',
        touristPlacesImage1: 'https://images.thequint.com/thequint%2F2023-06%2F15654156-c8c8-4337-ba19-2e413700c445%2FFyRA7fhaYAIbnGc.jfif?auto=format%2Ccompress&fmt=webp&width=120&w=1200',
        touristTitle1: 'Golden Temple',
        touristPlacesImage2: 'https://amritsartourism.org.in/images/places-to-visit/headers/wagah-border-amritsar-tourism-entry-fee-timings-holidays-reviews-header.jpg',
        touristTitle2: 'Wagah Border',
    },
    {
        title: 'RAJASTHAN',
        description:
            'Rajasthan, the epitome of royal grandeur and vibrant culture, enthralls visitors with its majestic forts, opulent palaces, and colorful traditions.',
        imageUrl: 'https://cdn.dribbble.com/userupload/9322633/file/original-176a4a48688691aab32ec89dd09771b4.jpg?resize=1200x800',
        foodImage1: 'https://www.sharmispassions.com/wp-content/uploads/2015/07/19729847952_b5cc81291a_o.jpg',
        foodTitle1: 'Dal Baati Churma',
        foodImage2: 'https://manjulaskitchen.com/wp-content/uploads/gatte_ki_sabji.jpg',
        foodTitle2: 'Gatte ki Sabji',
        touristPlacesImage1: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/99/ae/7f/images-14-largejpg.jpg?w=700&h=-1&s=1',
        touristTitle1: 'Meherangarh Fort',
        touristPlacesImage2: 'https://s3.india.com/travel/wp-content/uploads/Rajasthan_Pushkar_Pushkar-in-Rajasthan.jpg',
        touristTitle2: 'Pushkar',
    },
    {
        title: 'SIKKIM',
        description:
            'Sikkim, nestled in the lap of the Himalayas, is a land of breathtaking landscapes, vibrant culture, and spiritual sanctuaries.',
        imageUrl: 'https://cdn.dribbble.com/users/975367/screenshots/3628503/media/d8088d761e0facc23de7fe9c5fbfe454.jpg?resize=800x600&vertical=center',
        foodImage1: 'https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg',
        foodTitle1: 'Momos',
        foodImage2: 'https://www.mapsofindia.com/ci-moi-images/my-india/2014/09/Thupka.jpg',
        foodTitle2: 'Thukpa',
        touristPlacesImage1: 'https://pyt-blogs.imgix.net/2020/05/kinshuk-bose-oXHCpSjWSqs-unsplash-1-scaled.jpg?auto=format&ixlib=php-3.3.0',
        touristTitle1: 'Rumtek Monastery',
        touristPlacesImage2: 'https://static2.tripoto.com/media/filter/tst/img/1241614/TripDocument/1671365719_1671271742381_1_01.jpeg',
        touristTitle2: 'Gurudongmar Lake',
    },
    {
        title: 'TAMIL NADU',
        description:
            'Tamil Nadu, a land of ancient temples, rich history, and vibrant culture, beckons with its diverse landscapes and culinary delights.',
        imageUrl: 'https://cdn.dribbble.com/users/5118725/screenshots/16752916/media/e495530c08d0c59ad4a601965ced0fe1.jpg?resize=1000x750&vertical=center',
        foodImage1: 'https://inemai.com/wp-content/uploads/2019/02/Dosai.png',
        foodTitle1: 'Dosai',
        foodImage2: 'https://sidapur.com/cdn/shop/products/Edit_DSC_0033_88b88cbb-06c3-4526-a888-0f441dbcb37d_1100x.jpg?v=1636284130',
        foodTitle2: 'Filter Coffee',
        touristPlacesImage1: 'https://www.savaari.com/blog/wp-content/uploads/2023/11/image-52.png',
        touristTitle1: 'Meenakshi Amman Temple',
        touristPlacesImage2: 'https://c.ndtvimg.com/gws/832/assets/1.jpeg?1597911947',
        touristTitle2: 'Mahabalipuram',
    },
    {
        title: 'TELANGANA',
        description:
            'Telangana, a land steeped in history and culture, offers a blend of ancient heritage and modern innovation.',
        imageUrl: 'https://cdn.dribbble.com/users/1531199/screenshots/11446888/media/6489273115ce23db4e39ec9473b4f861.jpg?resize=1000x750&vertical=center',
        foodImage1: 'https://images.firstpost.com/wp-content/uploads/2017/04/chicken-biryani_final1.jpg?im=FitAndFill=(596,336)',
        foodTitle1: 'Hyderabadi Biryani',
        foodImage2: 'https://www.vegrecipesofindia.com/wp-content/uploads/2018/02/mirchi-bajji-recipe-1a.jpg',
        foodTitle2: 'Mirchi Bajji',
        touristPlacesImage1: 'https://www.savaari.com/blog/wp-content/uploads/2022/10/Golkonda-fort.jpg',
        touristTitle1: 'Golconda Fort',
        touristPlacesImage2: 'https://media.istockphoto.com/id/1215274990/photo/high-wide-angle-view-of-charminar-in-the-night.jpg?s=612x612&w=0&k=20&c=byyIjqgbslf-L191n6SJu0s35fvNoVeWsxV5rIPK7Sk=',
        touristTitle2: 'Charminar',
    },
    {
        title: 'TRIPURA',
        description:
            'Tripura, nestled in the northeastern corner of India, is a land of stunning landscapes, rich cultural heritage, and ancient traditions.',
        imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e47755c7-fc58-4164-a94e-805bbb3d7c3b/dd2z9y3-6caf1084-5061-4f9a-9f64-957adec5b232.jpg/v1/fill/w_1024,h_1001,q_75,strp/tripura_skyline_silhouette_by_dipanjan16_dd2z9y3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMSIsInBhdGgiOiJcL2ZcL2U0Nzc1NWM3LWZjNTgtNDE2NC1hOTRlLTgwNWJiYjNkN2MzYlwvZGQyejl5My02Y2FmMTA4NC01MDYxLTRmOWEtOWY2NC05NTdhZGVjNWIyMzIuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5eG6PpITidV1kklcur4nhzM4eoBaP3sShGgaaWAHAuo',
        foodImage1: 'https://i.ytimg.com/vi/muXGooBLOkU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBvbn_z-oW3EKeQP946Seym-LLgeQ',
        foodTitle1: 'Muya Awandru',
        foodImage2: 'https://images.slurrp.com/prod/articles/wo5wpphuyik.webp',
        foodTitle2: 'Chakhwi',
        touristPlacesImage1: 'https://static.india.com/wp-content/uploads/2019/01/Neermahal.png?impolicy=Medium_Resize&w=1200&h=800',
        touristTitle1: 'Neermahal',
        touristPlacesImage2: 'https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/18/cd178d6d1f96d5530b2e85c45dd3e6a9_1000x1000.jpg',
        touristTitle2: 'Unakoti',
    },
    {
        title: 'UTTARAKHAND',
        description:
            'Uttarakhand, nestled in the lap of the Himalayas, is a land of spiritual sanctuaries, pristine landscapes, and adventurous pursuits.',
        imageUrl: 'https://cdn.dribbble.com/users/366745/screenshots/4662356/kedarnath.png?resize=800x600&vertical=center',
        foodImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKRXk6uWIPFtgI9_3US_tIWtkshTg3tPtnKZOlbop6w&s',
        foodTitle1: 'Garhwali Cuisine',
        foodImage2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Bal_mithai.jpg/300px-Bal_mithai.jpg',
        foodTitle2: 'Bal Mithai',
        touristPlacesImage1: 'https://static.india.com/wp-content/uploads/2018/08/Valley-of-flowers.jpg?impolicy=Medium_Resize&w=1200&h=800',
        touristTitle1: 'Valley of Flowers',
        touristPlacesImage2: 'https://www.hellocorbett.in/wp-content/uploads/2017/12/corbett-national-park.jpg',
        touristTitle2: 'Jim Corbett National Park',
    },
    {
        title: 'UTTAR PRADESH',
        description:
            'Uttar Pradesh, the heartland of India, is a land of vibrant culture, ancient heritage, and religious fervor.',
        imageUrl: 'https://cdn.dribbble.com/users/5107096/screenshots/11442403/media/be3e22d61bb6789de3987031f68d763f.jpg?resize=1000x750&vertical=center',
        foodImage1: 'https://i.ndtvimg.com/i/2017-09/kebab_625x350_71504248496.jpg',
        foodTitle1: 'Tunday Kababi',
        foodImage2: 'https://im.hunt.in/cg/Agra/City-Guide/petha.jpg',
        foodTitle2: 'Petha',
        touristPlacesImage1: 'https://www.travelandleisure.com/thmb/wdUcyBQyQ0wUVs4wLahp0iWgZhc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taj-mahal-agra-india-TAJ0217-9eab8f20d11d4391901867ed1ce222b8.jpg',
        touristTitle1: 'Taj Mahal',
        touristPlacesImage2: 'https://storage.googleapis.com/prune/blog_image/Varansi-2.jpg',
        touristTitle2: 'Varanasi',
    },
    {
        title: 'WEST BENGAL',
        description:
            'West Bengal, known as the "Cultural Capital of India," is a vibrant and diverse state steeped in history, art, and literature.',
        imageUrl: 'https://cdn.dribbble.com/users/1363686/screenshots/14072016/media/255fed9f7b0f10bfa62c7ee9381116a9.jpg?resize=1000x750&vertical=center',
        foodImage1: 'https://bisarga.com/wp-content/uploads/2021/07/Bengali-Rosogolla-Bisarga-Food-Takeways-Food-Takeway-Kolkata-Howrah-Mumbai-Pune.jpg',
        foodTitle1: 'Rosogolla',
        foodImage2: 'https://somethingiscooking.com/wp-content/uploads/2017/01/BengaliFishCurry2.jpg',
        foodTitle2: 'Fish Curry',
        touristPlacesImage1: 'https://www.savaari.com/blog/wp-content/uploads/2023/07/Kolkata-India-Victoria-Memorial1.webp',
        touristTitle1: 'Victoria Memorial',
        touristPlacesImage2: 'https://www.thestatesman.com/wp-content/uploads/2020/07/SUNDERBAN-1.jpg',
        touristTitle2: 'Sunderbans',
    },
  ];

  const isCardExpanded = (index) => index === expandedCardIndex;

  return (
    <>
      <Grid>
        <Bg >
          <Card>
            {cardData.map((card, index) => (
              <React.Fragment key={index}>
                <Wrap onClick={() => toggleExpand(index)} blurBackground={expandedCardIndex !== null}>
                  <img src={card.imageUrl} alt={card.title} />
                  <h2>{card.title}</h2>
                </Wrap>
                <ExpandedContent expanded={isCardExpanded(index)}>
                  
                  <FoodContainer>
                    <h2>Food</h2>
                    <a href='https://tinyurl.com/4patudss'><FoodImage src={card.foodImage1} alt="Food 1" /></a>
                    <FoodTitle>{card.foodTitle1}</FoodTitle>
                    <FoodImage src={card.foodImage2} alt="Food 2" />
                    <FoodTitle>{card.foodTitle2}</FoodTitle>
                  </FoodContainer>
                  
                  <TouristContainer>
                    <h2>Tourist Places</h2>
                    <TouristImage src={card.touristPlacesImage1} alt="Tourist Place 1" />
                    <TouristTitle>{card.touristTitle1}</TouristTitle>
                    <TouristImage src={card.touristPlacesImage2} alt="Tourist Place 2" />
                    <TouristTitle>{card.touristTitle2}</TouristTitle>
                  </TouristContainer>
                </ExpandedContent>
                <ExpandedWrittenContent expanded={isCardExpanded(index)}>
                
                  <p>{card.description}</p>
                </ExpandedWrittenContent>
              </React.Fragment>
            ))}
          </Card>
        </Bg>
      </Grid>
      <Footer />
    </>
  );
};

const Grid = styled.div`
  display: grid;
  gap: 90px;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  height: 100vh;
  justify-content: center;
  padding-top: 100px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 120vw;
`;

const Bg = styled.div`
  height: 580vh;
  width: 100%;
  padding-top: 20px;
  margin-left: 0px;
  background-color: rgb(194, 51, 115);
  border-radius: 10px;
  margin-bottom: 10vw;
`;

const Card = styled.div`
  display: grid;
  gap: 80px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin-left: 50px;
  margin-right: 100px;
  
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  border-radius: 10px;
  background-color:  rgb(255, 186, 134);
  cursor: pointer;
  width: 20vw;
  filter: ${({ blurBackground }) => (blurBackground ? 'blur(4px)' : 'none')};
  transition: filter 0.5s ease-in-out; /* Smooth transition */
  &:hover {
    transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 5px solid #79155B;
  }

  p{
    text-align: justify;
    margin: 10px;
    color: #79155B;
    font-weight: bold;
  }

  img {
    margin-top: 10px;
    border-radius: 5px;
    width: 95%;
  }

  h2 {
    color: #79155B;
    text-align: center;
  }
`;

const ExpandedContent = styled.div`
  display: ${({ expanded }) => (expanded ? 'flex' : 'none')};
  
  transition: height 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smooth transition for height */

  /* Set height based on expansion state */
  height: ${({ expanded }) => (expanded ? 'auto' : '0')};
  overflow: hidden; /* Hide overflow when content is collapsed */
  align-items: center;
  padding-top: 0;
  margin-right: 300px;
  border-radius: 10px;
  background-color: rgb(121, 21, 91, 0.5);
  cursor: pointer;
  width: 30vw;
  
  border: 5px solid rgb(214, 205, 164, 1);
  z-index: 1;

  h2 {
    color: rgb(214, 205, 164, 1);
    text-align: center;
  }

  p {
    color: rgb(214, 205, 164, 1);
    text-align: center;
  }
`;

const ExpandedWrittenContent = styled.div`
  display: ${({ expanded }) => (expanded ? 'flex' : 'none')};
  
  transition: height 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smooth transition for height */

  /* Set height based on expansion state */
  /* height: ${({ expanded }) => (expanded ? 'auto' : '0')}; */
  overflow: hidden; /* Hide overflow when content is collapsed */
  align-items: center;
  padding-top: 0;
  /* margin-right: 300px; */
  border-radius: 10px;
  background-color: rgb(121, 21, 91);
  cursor: pointer;
  width: 20vw;
  height: 15vw;
  margin-left: 10vw;
  border: 5px solid rgb(214, 205, 164, 1);
  z-index: 1;
  margin-top: 50%;
  

  h2 {
    color: rgb(214, 205, 164, 1);
    text-align: center;
  }

  p {
    color: rgb(214, 205, 164, 1);
    text-align: center;
  }
`

const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

const FoodImage = styled.img`
  width: 200px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
`;

const FoodTitle = styled.h3`
  color: rgb(214, 205, 164, 1);
  text-align: center;
`;

const TouristContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TouristImage = styled.img`
  
  width: 200px;
  margin-left: 10px;
  
  border-radius: 10px;
`;

const TouristTitle = styled.h3`

  color: rgb(214, 205, 164, 1);
  text-align: center;
`;

const Footer = styled.footer`
  background-color: #FFBA86; 
  /* background-color: #EEF2E6; */
  /* background-color: #FFEBAD; */
  /* background-color: #056676; */
  /* background-color: #EF5A5A; */
  color: white;
  padding: 20px;
  border-radius: 20px 20px 0 0; /* Top-left and top-right curved edges */
  text-align: center;
  margin-top: 560vh;
`;

export default India;
