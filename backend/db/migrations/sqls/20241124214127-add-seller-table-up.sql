CREATE TABLE seller (
    id TEXT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    sales_last_months INTEGER NOT NULL,
    good_support BOOLEAN NOT NULL DEFAULT false,
    on_time_delivery BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE product ADD COLUMN seller_id TEXT;