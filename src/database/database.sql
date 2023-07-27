CREATE DATABASE IF NOT EXISTS `db_store`;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  userName VARCHAR(64) NOT NULL UNIQUE,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  address VARCHAR(255) NOT NULL
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  userId INT NOT NULL REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  description VARCHAR(3000) NOT NULL,
  price NUMERIC(10) NOT NULL,
  category VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  stock INT NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  userId INT NOT NULL REFERENCES users(id),
  productId INT NOT NULL REFERENCES products(id),
  quantity INT NOT NULL
);

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  userId INT NOT NULL REFERENCES users(id),
  productId INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  rating INT NOT NULL,
  comment VARCHAR(300) NOT NULL,
  username VARCHAR(64) NOT NULL
);


-- TABLA JOSE

INSERT INTO users (userName, firstName, lastName, password, email, address) VALUES
('admin', 'admin', 'admin', '123123123', 'admin@admin.com', 'admin'),
('user1', 'Juan', 'Pérez', '$2a$12$nxW/bdIxZ6hWbYAHXoiD2e/JIGUkJ1s5VUsThyJeFToa4J/EX0WZy', 'juan@example.com', 'Calle Principal 123'),
('user2', 'María', 'González', '$2a$12$ro0.u31.Cz/vR4wN75sV9O9Vt9ncFuB2gvLFpnfhmILRb5/U2GjCC', 'maria@example.com', 'Avenida Central 456'),
('user3', 'Pedro', 'Sánchez', '$2a$12$z68mpfeqyH.G2Vm3W8N79OIeg2.XWNdEPt4L0ObTNBqF7i3AGOwqm', 'pedro@example.com', 'Plaza Mayor 789'),
('user4', 'Ana', 'López', '$2a$12$tw14gvPNXkv8ZQg/eAZG2u3W./mCMnzbigPLk3xGeSj6Cg3vFkJxm', 'ana@example.com', 'Calle Secundaria 10'),
('user5', 'Carlos', 'Ramírez', '$2a$12$u.GWdpMB5G5XzVMOIAaRzOUY6eJg5xxKOWZLMx19vuFF54HRSuUIe', 'carlos@example.com', 'Avenida Norte 23');
-- insert values of videogames into products table
INSERT INTO products (userId, name, description, price, category, image, stock) VALUES 
(1, 'The Last of Us Part II', 'The Last of Us Part II is a 2020 action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4. Set five years after The Last of Us (2013), players control 19-year-old Ellie, who comes into conflict with a mysterious cult in a post-apocalyptic United States. The game contains survival horror elements and is played from the third-person perspective. Players can use firearms, improvised weapons, and stealth to defend against hostile humans and cannibalistic creatures infected by a mutated strain of the Cordyceps fungus.', 59990, 'Acción', 'https://i.ytimg.com/vi/eOiUtRF8k28/maxresdefault.jpg', 100),
(1, 'The Legend of Zelda: Breath of the Wild', 'The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. Breath of the Wild is part of the Legend of Zelda franchise and is set at the end of the series timeline; the player controls Link, who awakens from a hundred-year slumber to defeat Calamity Ganon before it can destroy the kingdom of Hyrule.', 39990, 'videogames', 'https://juegosdigitaleschile.com/files/images/productos/1637859721-the-legend-of-zelda-breath-of-the-wild-nintendo-switch.jpg', 100),
(1, 'Super Mario Odyssey', 'Super Mario Odyssey is a 2017 platform game developed and published by Nintendo for the Nintendo Switch. An entry in the Super Mario series, it follows Mario and Cappy, a sentient hat that allows Mario to control other characters and objects, as they journey across various worlds to save Princess Peach from his nemesis Bowser, who plans to forcibly marry her.', 69990, 'Aventura', 'https://yoshigame.cl/105/super-mario-odyssey.jpg', 100),
(1, 'God of War', 'God of War is a 2018 action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment (SIE). It is the eighth installment in the God of War series, the eighth chronologically, and the sequel to 2010s God of War III. Unlike previous games, which were loosely based on Greek mythology, this installment is loosely based on Norse mythology, with the majority of it set in ancient Norway in the realm of Midgard. For the first time in the series, there are two main protagonists: Kratos, the former Greek God of War who remains as the only playable character, and his young son Atreus; at times, the player may passively control him.', 49990, 'RPG', 'https://www.imperiogamers.cl/wp-content/uploads/2021/02/god_of_war_hits.jpg', 100),
(1, 'Red Dead Redemption 2', 'Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and is a prequel to the 2010 game Red Dead Redemption. The story is set in 1899 in a fictionalized representation of the Western, Midwestern, and Southern United States and follows outlaw Arthur Morgan, a member of the Van der Linde gang. Arthur must deal with the decline of the Wild West whilst attempting to survive against government forces, rival gangs, and other adversaries. The story also follows fellow gang member John Marston, the protagonist of Red Dead Redemption.', 24590, 'Mundo Abierto', 'https://falabella.scene7.com/is/image/Falabella/gsc_114127330_891920_1?wid=800&hei=800&qlt=70', 100),
(1, 'The Witcher 3: Wild Hunt', 'The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by Polish developer CD Projekt Red and is based on The Witcher series of fantasy novels written by Andrzej Sapkowski. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings and the third main installment in The Witcher video game series, played in an open world with a third-person perspective. Players control protagonist Geralt of Rivia, a monster slayer (known as a Witcher) who is looking for his missing adopted daughter on the run from the Wild Hunt, an otherworldly force determined to capture her and use her powers.', 59990, 'Aventura', 'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png', 100),
(1, 'Grand Theft Auto V', 'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008s Grand Theft Auto IV. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and arms smuggler Trevor Philips—and their efforts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas open countryside and the fictional city of Los Santos, based on Los Angeles.', 49990, 'Acción', 'https://cdn-products.eneba.com/resized-products/t0zqmqhdcxppyol3mtlg_350x200_2x-0.jpg', 100);

INSERT INTO ratings (userid, productid, rating, comment, username) VALUES
(1,1,5,'¡The Last of Us Part II superó todas mis expectativas! La historia épica y la jugabilidad intensa me cautivaron por completo.', 'user 1'),
(2,2,4,'The Legend of Zelda: Breath of the Wild es una joya de la versatilidad y la diversión, perfecta tanto en casa como en movimiento.', 'user 2'),
(3,3,5,'¡Super Mario Odyssey es simplemente increíble! Los gráficos impresionantes y la velocidad de carga me dejaron maravillado.', 'user 3'),
(4,4,1,'God of War me decepcionó, los problemas de rendimiento y falta de juegos exclusivos me frustraron.', 'user4'),
(5,5,4,'Red Dead Redemption 2 es divertido, pero la falta de apoyo de terceros y la escasez de juegos me decepcionaron.', 'user 5'),
(6,6,1,'The Witcher 3: Wild Hunt me decepcionó, los problemas de rendimiento y falta de juegos exclusivos me frustraron.', 'user 6'),
(1,7,4,'Grand Theft Auto V es una experiencia de plataformas épica y colorida. Únete a Rayman y sus amigos en una aventura llena de diversión y desafíos.', 'user 7'),
(2,5,4,'Grand Theft Auto V es una experiencia de plataformas épica y colorida. Únete a Rayman y sus amigos en una aventura llena de diversión y desafíos.', 'user 8');
-- TABLA JOHHAN

INSERT INTO users (username, firstname, lastname, password, email, address)
VALUES
('admin', 'admin', 'admin', '123123123', 'admin@admin.com', 'admin'),
('user1', 'Juan', 'Pérez', '$2a$12$nxW/bdIxZ6hWbYAHXoiD2e/JIGUkJ1s5VUsThyJeFToa4J/EX0WZy', 'juan@example.com', 'Calle Principal 123'),
('user2', 'María', 'González', '$2a$12$ro0.u31.Cz/vR4wN75sV9O9Vt9ncFuB2gvLFpnfhmILRb5/U2GjCC', 'maria@example.com', 'Avenida Central 456'),
('user3', 'Pedro', 'Sánchez', '$2a$12$z68mpfeqyH.G2Vm3W8N79OIeg2.XWNdEPt4L0ObTNBqF7i3AGOwqm', 'pedro@example.com', 'Plaza Mayor 789'),
('user4', 'Ana', 'López', '$2a$12$tw14gvPNXkv8ZQg/eAZG2u3W./mCMnzbigPLk3xGeSj6Cg3vFkJxm', 'ana@example.com', 'Calle Secundaria 10'),
('user5', 'Carlos', 'Ramírez', '$2a$12$u.GWdpMB5G5XzVMOIAaRzOUY6eJg5xxKOWZLMx19vuFF54HRSuUIe', 'carlos@example.com', 'Avenida Norte 23');

INSERT INTO products (userid, name, description, price, category, image, stock)
VALUES
('1', 'PlayStation 5', 'La PlayStation 5 (PS5) es una consola de videojuegos de última generación que ofrece una experiencia de juego inmersiva y de alta calidad.', 559990, 'consolas', 'https://i.ibb.co/B4Q58k2/1.jpg', 200),
('1', 'Nintendo Switch', 'La Nintendo Switch es una consola híbrida que combina la portabilidad de una consola portátil con la versatilidad de una consola de sobremesa.', 349990, 'consolas', 'https://i.ibb.co/ZmkWSdK/2.jpg', 100),
('1', 'XBOX Series X', 'La Xbox One es una consola de videojuegos de alto rendimiento que ofrece una experiencia de juego excepcional.', 499990, 'consolas', 'https://i.ibb.co/fMJtm6w/3.jpg', 50),
('1', 'Nintendo Wii U', 'La Nintendo Wii U es una consola revolucionaria que combina la diversión tradicional de Nintendo con nuevas experiencias de juego.', 149990, 'consolas', 'https://i.ibb.co/Ky7cYcm/4.jpg', 100),
('2', 'Super Mario Odyssey', 'Super Mario Odyssey es un juego de plataformas lleno de diversión y aventuras.', 39990, 'Aventuras', 'https://i.ibb.co/Z6BDzwL/5.jpg', 20),
('2', 'Splatoon 3', 'Splatoon 3 es un juego de disparos en tercera persona lleno de acción y colorido.', 44990, 'Multijugador', 'https://i.ibb.co/y0tpRxZ/6.jpg', 50),
('2', 'Mario Kart 8', 'Mario Kart 8 Deluxe es un juego de carreras divertido y emocionante.', 59990, 'Carreras', 'https://i.ibb.co/ZN323Kb/7.jpg', 30),
('2', 'Sonic Frontiers', 'Embárcate en una aventura épica en un vasto mundo abierto lleno de velocidad y acción.', 44990, 'Arcade', 'https://i.ibb.co/pdJzQN1/8.jpg', 10),
('3', 'God Of War: Ragnarok', 'Únete a Kratos en su peligrosa misión para enfrentarse a los dioses nórdicos y prevenir el cataclismo del Ragnarok.', 69990, 'Acción', 'https://i.ibb.co/QkNLftz/9.jpg', 45),
('3', 'Howgarts Legacy', 'Hogwarts Legacy es un juego de rol ambientado en el mundo mágico de Harry Potter.', 79990, 'Multijugador', 'https://i.ibb.co/sCJfX8q/10.jpg', 35),
('3', 'Spider-Man: Miles Morales', 'Spider-Man: Miles Morales es un electrizante juego de acción y aventuras que te sumerge en el mundo del trepamuros de Marvel.', 69990, 'Acción', 'https://i.ibb.co/DQLysQx/11.jpg', 15),
('3', 'Sackboy: A Big Adventure', 'Sackboy: A Big Adventure es un encantador juego de plataformas que te lleva a un mundo de fantasía y diversión.', 49990, 'Aventuras', 'https://i.ibb.co/cJbML2g/12.jpg', 40),
('4', 'Halo Infinite', 'Halo Infinite es el próximo capítulo épico de la aclamada franquicia de shooter.', 39990, 'Estrategia', 'https://i.ibb.co/dcP8sjp/13.jpg', 30),
('4', 'FIFA 23', 'FIFA 23 es el simulador de fútbol más realista hasta la fecha. Disfruta de una experiencia auténtica con gráficos mejorados, jugabilidad fluida y una amplia selección de equipos y ligas.', 49990, 'Deportes', 'https://i.ibb.co/rfRyzZP/14.jpg', 20),
('4', 'Guardians Of The Galaxy', 'Guardians of the Galaxy es un juego de acción y aventuras épico basado en los famosos personajes de Marvel.', 39990, 'Aventuras', 'https://i.ibb.co/K6XgBvZ/15.jpg', 10),
('4', 'Diablo IV', 'Diablo IV es el regreso de la icónica serie de juegos de rol y acción. Adéntrate en un oscuro y siniestro mundo de demonios y criaturas malignas.', 32990, 'RPG', 'https://i.ibb.co/MPP14P6/16.jpg', 40),
('5', 'Super Mario: 3D World', 'Super Mario 3D World es una aventura divertida y colorida que te transporta a un mundo de fantasía.', 29990, 'Aventuras', 'https://i.ibb.co/hs7nY31/17.jpg', 5),
('5', 'Donkey Kong: Country Tropical Freeze', 'Donkey Kong: Country Tropical Freeze es una emocionante aventura plataformera que te lleva a un mundo exuberante y lleno de desafíos.', 39990, 'Aventuras', 'https://i.ibb.co/PxqtL67/18.jpg', 30),
('5', 'Super Mario Maker', 'Super Mario Maker te permite crear y jugar tus propios niveles de Mario en un emocionante y creativo juego.', 39990, 'Arcade', 'https://i.ibb.co/KzGD8Sm/19.jpg', 25),
('5', 'Rayman Legends', 'Rayman Legends es una experiencia de plataformas épica y colorida. Únete a Rayman y sus amigos en una aventura llena de diversión y desafíos.', 25990, 'Aventuras', 'https://i.ibb.co/5WQbN6g/20.jpg', 45);

INSERT INTO orders (userid, productid, quantity)
VALUES
(1,9,2),
(2,2,1),
(3,1,3),
(4,3,1),
(5,4,2);

INSERT INTO ratings (userid, productid, rating, comment, username)
VALUES
(1,5,5,'¡God of War superó todas mis expectativas! La historia épica y la jugabilidad intensa me cautivaron por completo.', 'user 1'),
(2,2,4,'La Nintendo Switch es una joya de la versatilidad y la diversión, perfecta tanto en casa como en movimiento.', 'user 2'),
(3,1,5,'¡La PS5 es simplemente increíble! Los gráficos impresionantes y la velocidad de carga me dejaron maravillado.', 'user 3'),
(4,3,1,'La Xbox Series X me decepcionó, los problemas de rendimiento y falta de juegos exclusivos me frustraron.', 'user4'),
(5,4,4,'La Wii U es divertida, pero la falta de apoyo de terceros y la escasez de juegos me decepcionaron.', 'user 5'),
(4,2,1,'La Xbox Series X me decepcionó, los problemas de rendimiento y falta de juegos exclusivos me frustraron.', 'user 6'),
(5,4,4,'La Wii U es divertida, pero la falta de apoyo de terceros y la escasez de juegos me decepcionaron.', 'user 7');



