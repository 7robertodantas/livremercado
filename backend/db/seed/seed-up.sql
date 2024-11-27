INSERT INTO product (id, title, description, price, category, image_url, seller_id, is_favorite) VALUES
('df0c11a4-a7fc-4531-86a4-b0181ba5cdd6', 'Fone de Ouvido JBL Tune 510BT', 'Fone de ouvido on-ear sem fio com áudio Pure Bass, bateria de longa duração e conectividade Bluetooth 5.0.', 179.10, 'Eletrônicos', 'https://negoautosom.cdn.magazord.com.br/img/2022/02/produto/2129/jbl-tune-510bt-product-image-hero-black.png?ims=fit-in/800x800/filters:fill(white)', '21525bfa-3933-4c98-8579-5bd4657549b6', true),
('a5f14cdf-37e4-41d7-9e93-f42f346869f5', 'Playstation 5 PS5 Slim 1TB', 'Console Playstation 5 PS5 Slim de 1TB com design compacto, ideal para jogos de última geração.', 3299.99, 'Eletrônicos', 'https://http2.mlstatic.com/D_NQ_NP_2X_948815-MLU76516576246_052024-F.webp', 'd20eb744-c8fb-49b6-9cfb-cdaec5d619f2', false),
('e036a66f-5e2e-45de-a063-bc7a7150382f', 'Smartphone Xiaomi Redmi Note 11', 'Smartphone com tela AMOLED de 6.43", 4GB de RAM e 128GB de armazenamento.', 1299.00, 'Celulares', 'https://http2.mlstatic.com/D_NQ_NP_879126-MLU48233735961_112021-O.webp', '23ccaf58-696f-4956-b21f-a12004acd9dc', false),
('a7c9b55b-4293-4827-9ff1-3a123f9e927a', 'Notebook Dell Inspiron 15', 'Notebook com processador Intel i5, 8GB de RAM e 512GB SSD, ideal para uso profissional.', 2899.00, 'Informática', 'https://http2.mlstatic.com/D_NQ_NP_2X_931036-MLB49048265723_022022-F.webp', '38bebd53-8c21-4406-8a29-bd7033cc8681', false),
('1f2144df-c3ea-4b5f-b1de-2f57791e89e2', 'Cafeteira Expresso Nescafé Dolce Gusto', 'Máquina de café expresso com 15 bar de pressão e mais de 30 cápsulas disponíveis.', 399.00, 'Eletrodomésticos', 'https://http2.mlstatic.com/D_NQ_NP_2X_873649-MLB42015415372_062020-F.webp', 'e28e12dd-a33b-47c6-bf8f-90fecf1bf42c', false),
('11d2043b-c01e-4c91-947d-5a3927a4332d', 'Smartwatch Samsung Galaxy Watch 5', 'Relógio inteligente com monitoramento de saúde e fitness, compatível com Android e iOS.', 1299.00, 'Acessórios', 'https://http2.mlstatic.com/D_NQ_NP_2X_990017-MLA49393873988_032022-F.webp', '23ccaf58-696f-4956-b21f-a12004acd9dc', false),
('6cc4a95a-8474-4872-8c6d-6e19c5b4627e', 'Fone de Ouvido Sony WH-1000XM5', 'Fone de ouvido com cancelamento de ruído ativo e qualidade de som superior.', 2999.00, 'Eletrônicos', 'https://http2.mlstatic.com/D_NQ_NP_2X_991519-MLB49734268144_042022-F.webp', '21525bfa-3933-4c98-8579-5bd4657549b6', false),
('299adf42-9f61-4f7a-b346-3f25b97e44fe', 'Câmera Digital Canon EOS Rebel T7', 'Câmera DSLR de 24.1 MP com lente 18-55mm, ideal para iniciantes e fotógrafos amadores.', 2399.00, 'Fotografia', 'https://http2.mlstatic.com/D_NQ_NP_2X_980118-MLB47386277858_092021-F.webp', '21525bfa-3933-4c98-8579-5bd4657549b6', false),
('7cde9f3a-20d3-4de7-bfd0-2d3e78e4dcae', 'Kindle Paperwhite 10ª Geração', 'Leitor de livros digitais com tela de 6", iluminação embutida e resistência à água.', 529.00, 'Livros e eReaders', 'https://http2.mlstatic.com/D_NQ_NP_2X_797549-MLB49036220973_022022-F.webp', '21525bfa-3933-4c98-8579-5bd4657549b6', false);

INSERT INTO seller (id, name, location, sales_last_months, good_support, on_time_delivery) VALUES
('21525bfa-3933-4c98-8579-5bd4657549b6', 'Tech Store', 'São Paulo, SP', 561, true, true),
('d20eb744-c8fb-49b6-9cfb-cdaec5d619f2', 'Gamer World', 'Rio de Janeiro, RJ', 432, false, true),
('23ccaf58-696f-4956-b21f-a12004acd9dc', 'Mobile Hub', 'Belo Horizonte, MG', 210, true, false),
('38bebd53-8c21-4406-8a29-bd7033cc8681', 'Laptop Center', 'Curitiba, PR', 123, false, false),
('e28e12dd-a33b-47c6-bf8f-90fecf1bf42c', 'Coffee Lovers', 'Porto Alegre, RS', 345, true, true);

INSERT INTO cart_item (product_id, quantity) VALUES
('df0c11a4-a7fc-4531-86a4-b0181ba5cdd6', 2),
('a5f14cdf-37e4-41d7-9e93-f42f346869f5', 1);