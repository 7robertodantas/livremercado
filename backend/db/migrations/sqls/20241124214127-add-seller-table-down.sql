ALTER TABLE product DROP CONSTRAINT fk_seller;
ALTER TABLE product DROP COLUMN seller_id;

DROP TABLE seller;
