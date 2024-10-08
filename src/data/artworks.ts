// data/artworks.ts

export interface Artworks {
  id: string;
  title: string;
  src?: string; // Torne opcional
  additionalImage?: string; // Torne opcional
  width: number;
  height: number;
  author: string;
  description: string;
  curatorialComment?: string;
  price: number;
  medium?: string;
  dateCreated?: string;
}

export const artworksData: Artworks[] = [

  {
    "id": "1",
    "src": "/gallery/meninaSemBrinco.webp",
    "title": "Absence of the Essential",
    "author": "Elena Maris",
    "description": "Absence of the Essential is a compelling reinterpretation of the iconic Girl with a Pearl Earring, famously attributed to Johannes Vermeer. In this striking piece, Elena Maris removes the central element of the original work—the pearl earring—creating a profound commentary on the nature of identity and value. By stripping away the defining accessory, Maris challenges viewers to reflect on what remains when the most recognizable feature is absent. The painting retains the same captivating gaze and composition, yet the missing earring transforms the work into a powerful exploration of absence and significance. The artist employs the same nuanced brushwork and rich texture characteristic of oil painting, enhancing the visual and emotional impact.",
    "width": 800,
    "height": 600,
    "price": 540,
    "dateCreated": "2022",
    "medium": "Digital Art, created using Artificial Intelligence",
    "curatorialComment": "Elena Maris's Absence of the Essential offers a thought-provoking twist on a classical masterpiece. By omitting the pearl earring, Maris invites the audience to reconsider the role of iconic symbols in defining art and personal identity. This work not only pays homage to Vermeer’s technique and aesthetic but also challenges the viewer to engage with the concept of what constitutes the essence of an artwork.",
    "additionalImage": "/spotlight/meninaSemBrinco_detail.jpeg"
  },
  {
    "id": "2",
    "src": "/gallery/atemporal.webp",
    "title": "Atemporal",
    "author": "Theo Blackwood",
    "description": "Atemporal is a captivating piece of realistic German painting that combines serene nostalgia with a hint of surrealism. The artwork depicts a young girl dressed in mid-20th century attire, standing alone in a dark forest. The dense forest serves as a dramatic backdrop, with a chain of snow-capped mountains partially veiled by clouds in the distance. Adding an element of modernity, a 21st-century airplane can be seen soaring through the sky, contrasting sharply with the otherwise timeless setting. The painting's serene and slightly surreal atmosphere invites viewers to reflect on the juxtaposition of past and present, as well as the interplay between nature and human innovation.",
    "width": 750,
    "height": 550,
    "price": 250,
    "dateCreated": "2020",
    "medium": "Digital Art, created using Artificial Intelligence",
    "curatorialComment": "Aiden Frost's Atemporal skillfully blends realistic depiction with subtle surrealist elements to create a hauntingly beautiful scene. The juxtaposition of the vintage-inspired girl against the backdrop of a dark forest and modern airplane evokes a sense of timelessness and intrigue. The painting's serene quality and nostalgic undertones are enriched by the modern detail, encouraging viewers to contemplate the evolving relationship between humanity and its environment across different eras.",
    "additionalImage": "/gallery/atemporal_detail.png"
  },
  {
    "id": "3",
    "src": "/gallery/retratoModernoSerie2.webp",
    "title": "Retrato Moderno: série 2",
    "author": "B. Motta",
    "description": "Retrato Moderno: The Merchant's Heir is a contemporary reinterpretation of Renaissance portraiture, capturing a young Black boy in profile against a vibrant backdrop. The boy, with dark skin and wearing a shirt over his head, holds a cane and gazes directly at the viewer with an expression of resolve and strength. The composition meticulously follows the traditional style of a noble merchant portrait from the Renaissance period, yet incorporates elements of modernity and the diverse realities of the 21st century. The background features a bustling scene of a Rio de Janeiro favela, with colorful walls and individuals engaged in their daily routines, juxtaposing the classical portrait style with the dynamic, contemporary environment. This striking contrast underscores the intersection of historical and modern perspectives, highlighting both the timeless dignity and current socio-economic realities of the subject.",
    "width": 900,
    "height": 700,
    "price": 840,
    "dateCreated": "2024",
    "medium": "Digital Art, created using Artificial Intelligence",
    "curatorialComment": "Theo Blackwood's Modern Renaissance: The Merchant's Heir masterfully blends classical portrait techniques with modern societal elements. The painting's adherence to Renaissance portraiture conventions emphasizes the timeless dignity of the young boy, while the vivid favela scene in the background provides a powerful commentary on contemporary socio-economic conditions. This work serves as a profound exploration of how historical artistic traditions can be recontextualized to reflect the complexities and diversity of the present day.",
    "additionalImage": "/gallery/retratoModernoSerie2_detail.png"
  },
  {
    "id": "4",
    "src": "/gallery/quandoOpovo.webp",
    "title": "Quando o Povo",
    "author": "Celeste Silva",
    "description": "Is summer at Maracanã, and is a vibrant pointillist painting that captures the electrifying atmosphere of a summer football match at the iconic Maracanã Stadium in Rio de Janeiro. The artwork vividly depicts a dynamic scene filled with enthusiastic fans dressed in black and red, fervently cheering for their team. The crowd is the focal point of the painting, with each individual portrayed with meticulous detail and vibrant color. The football field is subtly positioned in the background, emphasizing the intensity and excitement of the spectators rather than the game itself. The use of pointillism creates a rich texture and a lively interplay of colors, enhancing the festive mood and the sense of unity and camaraderie among the fans. The overall composition reflects the joy and energy of the event, celebrating the communal spirit and passion that characterize football matches at one of the world’s most renowned stadiums.",
    "width": 900,
    "height": 700,
    "price": 560,
    "dateCreated": "2021",
    "medium": "Digital Art, created using Artificial Intelligence",
    "curatorialComment": "Julian Cruz's painting offers a captivating portrayal of the communal exuberance and passion associated with football culture. Through the technique of pointillism, the painting conveys the dynamic and vibrant energy of the crowd, drawing viewers into the heart of the celebration. The contrast between the vivid portrayal of the fans and the subtle representation of the football field highlights the significance of the supporters' role in the sporting experience, celebrating their collective enthusiasm and unity.",
    "additionalImage": "/gallery/Quando_o_Povo_detail.png"
  },
  {
    "id": "5",
    "src": "/gallery/sad.webp",
    "title": "Sadness",
    "author": "Sebastian Crowe",
    "description": "Fragmented Reflections is a representative piece of Cubism, one of the most innovative contributions of Pablo Picasso to the art world. This work, created using oil on canvas, delves into profound and emotional themes of solitude, deceit, and disillusionment—intrinsic elements of Cubist expression. The painting’s composition is characterized by geometric fragmentation and the overlapping of forms, fundamental elements of Cubism. The artist employs expressive brushstrokes and a dense texture to create a tactile sensation typical of oil paintings. The canvas is dominated by a sober and contrasting color palette that amplifies the emotional impact of the work. Human figures are presented in multiple angles and distorted perspectives, reflecting the complexity and internal confusion associated with solitude and disillusionment. The use of angular shapes and broken lines symbolizes the fragmentation of truth and the disintegration of personal illusions. Each fragment of the painting seems to capture a different facet of the represented emotions, contributing to a visual narrative of introspection and desolation. The scene's environment is equally disorienting, with abstract elements reinforcing a sense of alienation and deception. The combination of rich textures and loose brushwork intensifies the emotional effect, immersing the viewer in a visual and sensory experience that reflects internal turmoil and the complexity of the human condition.",
    "width": 900,
    "height": 700,
    "price": 1050,
    "dateCreated": "2023",
    "medium": "Digital Art, created using Artificial Intelligence",
    "curatorialComment": "Fragmented Reflections is a powerful demonstration of Picasso's ability to convey deep emotional truths through the Cubist lens. The painting’s fragmented forms and expressive use of color and texture engage the viewer in a profound exploration of human vulnerability. Picasso's innovative approach not only challenges traditional perspectives but also invites introspection on the nature of reality and personal perception. This work is a testament to the artist’s mastery in using Cubism to express complex emotional landscapes and existential themes.",
    "additionalImage": "/gallery/sad_detail.png"
  },
  {
    "id": "6",
    "src": "/spotlight/2.webp",
    "title": "Into the Wood",
    "author": "Aiden Frost",
    "description": "Is a striking example of constructivist realism, blending precise geometric forms with realistic portrayal to capture a unique narrative. The painting features a young girl dressed in mid-20th century attire, standing amidst a dense and somber forest. The contrast between the girl’s outfit—comprising a dress with a wide belt and a hat—and the dark, brooding background creates a dramatic effect. The use of bold lines and geometric shapes in the composition not only adds depth but also imparts a sense of movement within the still scene. This juxtaposition of the human figure and the enveloping forest results in an enchanting yet slightly eerie atmosphere, emphasizing the complex relationship between nature and human presence.",
    "width": 900,
    "height": 700,
    "price": 185,
    "dateCreated": "2023",
    "medium": "Digital Art",
    "curatorialComment": "Aiden Frost’s Into the Wood masterfully integrates constructivist principles with realistic depiction to evoke a profound sense of place and time. The painting’s geometric precision and the contrasting elements create a visually compelling narrative, capturing the interplay between the human figure and its natural surroundings. The piece invites viewers to reflect on the delicate balance between the timeless and the contemporary, and the ways in which human presence is both integral to and distinct from the natural world.",
    "additionalImage": "/spotlight/2_detail.jpeg"
  },
  {
    "id": "7",
    "src": "/gallery/latinos.webp",
    "title": "Latinxs",
    "author": "Julian Cruz",
    "description": "is a mesmerizing masterpiece inspired by Renaissance art, capturing a fiery shootout in a 21st-century favela in Rio de Janeiro. The scene is vibrant and dynamic, showcasing characters dressed in rich, colorful attire engaged in intense gunfights along the narrow, winding streets. The background features the architecture of a Brazilian favela, while the painting adheres to the brushstrokes and stylistic elements of a Renaissance-era Italian master. The juxtaposition of the chaotic modern-day setting with the elegant and timeless artistry of the Renaissance creates a captivating visual experience. This painting contrasts the traditional grandeur of Renaissance art with the gritty reality of contemporary urban conflict, emphasizing the clash between past and present, and the dissonance between social classes.",
    "width": 900,
    "height": 700,
    "price": 370,
    "dateCreated": "2024",
    "medium": "Digital Art, created using Artificial Intelligence",
    "curatorialComment": "Latinxs skillfully juxtaposes the opulent and detailed style of Renaissance painting with a stark portrayal of contemporary urban conflict. The artist's use of traditional brushstrokes to depict a modern scene highlights the contrast between historical artistry and current social realities. This work invites viewers to reflect on the intersection of historical elegance with the harshness of modern life, revealing the enduring nature of artistic techniques and their relevance to contemporary issues.",
    "additionalImage": "/gallery/latinos_detail.png"
  },
  {
    "id": "8",
    "src": "/gallery/midsummer.webp",
    "title": "Mid Summer",
    "author": "Sebastian Crowe",
    "description": "Mid Summer is a vibrant Impressionist painting that captures the essence of a summer celebration in the Swedish countryside during the mid-1940s. The scene is filled with life, depicting a group of people joyfully gathered around a long wooden table brimming with food and drinks. Traditional Swedish cottages with red roofs and green shutters form the backdrop, surrounded by lush greenery and colorful flowers. The brilliant blue sky, dotted with fluffy white clouds, and the warm glow of the sun enhance the festive atmosphere. The painting employs bold brushstrokes and a vivid color palette, reminiscent of Claude Monet’s Impressionist style, emphasizing the interplay of light and color.",
    "width": 900,
    "height": 700,
    "price": 660,
    "dateCreated": "2024",
    "medium": "Digital Art, created using Artificial Intelligence",
    "curatorialComment": "A summer scene captured with dynamic brushwork and rich textures, beautifully captures the nostalgic charm of mid-20th century Swedish rural life. The artist’s Impressionist approach brings a sense of immediacy and vibrancy to the scene, while the use of bold brushstrokes and vivid colors evokes the warmth and joy of a summer celebration. By drawing inspiration from Claude Monet, the painting highlights the artist’s ability to convey the ephemeral beauty of light and atmosphere, offering viewers a glimpse into a serene and idyllic moment in history.",
    "additionalImage": "/gallery/midsummer_detail.png"
  },
  {
    "id": "9",
    "src": "/gallery/silencio.webp",
    "title": "Silence",
    "author": "Lila Rivers",
    "description": "Silence is a striking example of minimalistic art that captures a moment of animated discussion among a group of individuals about art. Set against a stark white background, the composition is simplified to focus solely on the participants and their lively interaction. The scene features a group of people seated on white chairs, engaged in an animated conversation, with only a simple table and two additional chairs adding to the sparse setting. The minimalist approach directs attention to the characters and their passionate dialogue, creating a contemplative space free from external distractions.",
    "width": 900,
    "height": 700,
    "price": 290,
    "dateCreated": "2020",
    "medium": "Digital Art, created using Artificial Intelligence",
    "curatorialComment": "Silence exemplifies the power of minimalism in highlighting human interaction. By stripping away extraneous elements and focusing on the participants, the artwork emphasizes the depth of conversation and the dynamics of artistic discourse. The use of a stark, white environment reinforces the idea that the true essence of the scene lies in the engagement and exchange of ideas among the individuals. This piece invites viewers to reflect on the nature of artistic dialogue and the importance of focused, meaningful conversations in the art world.",
    "additionalImage": "/gallery/silencio_detail.png"
  },
  {
    "id": "10",
    "src": "/gallery/psico.webp",
    "title": "New Renascence",
    "author": "Adriana Monti",
    "description": "New Renascente is a captivating painting that seamlessly merges Renaissance Italian art with vibrant psychedelic elements. This imaginative piece features iconic Renaissance figures, such as angels and saints, set against a swirling, colorful backdrop that creates a dreamlike atmosphere. The painting juxtaposes the classical beauty of the Renaissance with modern, psychedelic influences, resulting in a visually striking composition that celebrates both historical grandeur and contemporary vibrancy. The fusion of these contrasting styles creates a unique artistic narrative that transcends traditional boundaries of time and style.",
    "width": 900,
    "height": 700,
    "price": 310,
    "dateCreated": "2024",
    "medium": "Digital Art, created using Artificial Intelligence",
    "curatorialComment": "A remarkable example of how classical art forms can be reimagined through contemporary lenses. The artist’s fusion of Renaissance iconography with psychedelic elements not only bridges historical and modern artistic expressions but also invites viewers to explore the dynamic interplay between tradition and innovation. This piece challenges conventional perceptions, encouraging a fresh perspective on the evolution of artistic styles and the continuous dialogue between the past and present",
    "additionalImage": "/gallery/psico_detail.png"
  },
  {
    "id": "11",
    "src": "/gallery/barcelona.webp",
    "title": "Barcelona",
    "author": "Cassandra Reed",
    "description": "A thought-provoking painting executed in a Cubist style reminiscent of Picasso. The artwork portrays a solitary figure seated on a bench in a park, surrounded by distorted trees and buildings. The figure's face is obscured, suggesting anonymity and detachment, while the park environment appears desolate and lifeless, with dead leaves scattered about. The painting is characterized by bold, expressive brushstrokes that evoke the texture of traditional oil painting. The muted and somber color palette enhances the emotional depth of the scene, capturing themes of solitude, deception, and disillusionment.",
    "width": 900,
    "height": 700,
    "price": 235,
    "dateCreated": "2021",
    "medium": "Digital Art, created using Artificial Intelligence",
    "curatorialComment": "Barcelona is a poignant exploration of isolation and emotional disillusionment through the lens of Cubism. The artist's use of distorted forms and muted colors effectively conveys the sense of detachment and loneliness. The composition, with its fragmented imagery and desolate setting, invites viewers to reflect on the complexities of the human experience and the often-hidden emotions that accompany solitude. This piece stands as a powerful example of how Cubist techniques can be employed to explore profound psychological themes.",
    "additionalImage": "/gallery/barcelona_detail.png"
  },
  {
    "id": "12",
    "src": "/gallery/renascence.webp",
    "title": "Presence",
    "author": "Iris Novak",
    "description": "This striking piece exemplifies the German Constructivist-Realist movement, capturing the essence of mid-20th century aesthetics with a modern twist. The painting features a young girl dressed in period attire, including a fitted dress with a wide belt and a hat, standing in a dark, dense forest. The contrast between her attire and the somber background highlights the painting’s thematic tension between innocence and the encroaching darkness of the forest.The composition is characterized by a meticulous arrangement of geometric shapes and bold lines, typical of the Constructivist approach, which creates a sense of depth and movement within the scene. The dark, moody background, rendered with rich, deep colors, contrasts sharply with the girl’s clothing, emphasizing her isolation in the vast, shadowy landscape.The painter’s use of light and shadow accentuates the girl’s figure, making her the focal point amidst the abstracted forms of the forest. This technique not only draws attention to the central figure but also evokes a sense of solitude and introspection.The painting embodies a harmonious balance between detailed realism and abstract constructivist elements, creating a captivating visual experience that reflects both the historical context and the artist’s innovative vision.",
    "width": 900,
    "height": 700,
    "price": 330,
    "dateCreated": "2024",
    "medium": "Digital Art, created using Artificial Intelligence",
    "curatorialComment": "This work stands out as a profound exploration of the intersection between historical realism and abstract constructivist forms. The artist’s ability to blend the detailed representation of the girl's attire with the abstract and geometric elements of the forest environment highlights a unique narrative of isolation and introspection. The use of contrasting colors and geometric composition serves to enhance the emotional depth of the piece, inviting viewers to ponder the underlying themes of solitude and the human experience within the natural world.",
    "additionalImage": "/gallery/renascence_detail.png"
  },
  {
    "id": "13",
    "src": "/gallery/retratoModerno.webp",
    "title": "Retrato Moderno: série 1",
    "author": "B. Motta",
    "description": "Retrato Moderno: The Merchant's Heir is a contemporary reinterpretation of Renaissance portraiture, capturing a young Black boy in profile against a vibrant backdrop. The boy, with dark skin and wearing a shirt over his head, holds a cane and gazes directly at the viewer with an expression of resolve and strength. The composition meticulously follows the traditional style of a noble merchant portrait from the Renaissance period, yet incorporates elements of modernity and the diverse realities of the 21st century. The background features a bustling scene of a Rio de Janeiro favela, with colorful walls and individuals engaged in their daily routines, juxtaposing the classical portrait style with the dynamic, contemporary environment. This striking contrast underscores the intersection of historical and modern perspectives, highlighting both the timeless dignity and current socio-economic realities of the subject.",
    "width": 900,
    "height": 700,
    "price": 300,
    "medium": "Digital Art, created using Artificial Intelligence",
    "curatorialComment": "Theo Blackwood's Modern Renaissance: The Merchant's Heir masterfully blends classical portrait techniques with modern societal elements. The painting's adherence to Renaissance portraiture conventions emphasizes the timeless dignity of the young boy, while the vivid favela scene in the background provides a powerful commentary on contemporary socio-economic conditions. This work serves as a profound exploration of how historical artistic traditions can be recontextualized to reflect the complexities and diversity of the present day.",
    "additionalImage": "/gallery/retratoModerno_detail.png"
  },
  {
    "id": "14",
    "src": "/spotlight/tessla.webp",
    "title": "Tessla",
    "author": "Johannes Vermmer",
    "description": "This vivid painting, inspired by the bold, expressive style of Vincent van Gogh, captures a dynamic and exuberant field of flowers that radiates vitality and movement. The canvas is awash with a riot of colors—red, yellow, blue, and pink—each stroke meticulously rendered to evoke the lively essence of the natural world. The artist employs Van Gogh’s signature thick, swirling brushstrokes to imbue the floral scene with a sense of energy and fluidity.In the distant background, the Tesla factory looms as a stark, modern contrast to the vibrant floral landscape. This industrial element introduces a layer of complexity to the scene, juxtaposing the timeless beauty of nature with the forward-looking presence of contemporary technology. The factory's angular, metallic forms create a striking visual counterpoint to the organic, fluid shapes of the flowers.The painting's surreal and evocative quality reflects a transitional era, where the harmony of nature intersects with the rapid advancements of technology. This combination creates a powerful visual dialogue between the natural world and human innovation, capturing the tension and synergy between the two.",
    "width": 900,
    "height": 700,
    "price": 350,
    "dateCreated": "2023",
    "medium": "Digital Art, created using Artificial Intelligence",
    "curatorialComment": "This painting masterfully bridges the gap between the natural and industrial realms, creating a unique and thought-provoking composition. The use of Van Gogh-inspired brushwork brings a dynamic, almost hypnotic quality to the floral field, while the inclusion of the Tesla factory introduces a contemporary element that grounds the work in the present. The contrast between the exuberant flowers and the modern factory underscores a broader commentary on the evolving relationship between nature and technology, making this piece both visually captivating and intellectually stimulating.",
    "additionalImage": "/spotlight/tessla_detail.png"
  }
  
];
