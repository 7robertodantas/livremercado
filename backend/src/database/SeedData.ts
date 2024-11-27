import db from "./index";

export const seedDatabase = async () => {
  try {
    // Limpar tabelas antes de inserir novos dados
    await new Promise((resolve, reject) => {
      db.run(`DELETE FROM cart_item`, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log("Tabela `cart_item` limpa com sucesso.");
          resolve(null);
        }
      });
    });

    await new Promise((resolve, reject) => {
      db.run(`DELETE FROM product`, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log("Tabela `product` limpa com sucesso.");
          resolve(null);
        }
      });
    });

    await new Promise((resolve, reject) => {
      db.run(`DELETE FROM seller`, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log("Tabela `seller` limpa com sucesso.");
          resolve(null);
        }
      });
    });

    // Inserindo vendedores
    await new Promise((resolve, reject) => {
      db.run(`
        INSERT INTO seller (id, name, location, sales_last_months, good_support, on_time_delivery)
        VALUES
          ('seller1', 'Seller One', 'São Paulo, SP', 561, true, true),
          ('seller2', 'Seller Two', 'Rio de Janeiro, RJ', 432, false, true),
          ('seller3', 'Seller Three', 'Belo Horizonte, MG', 210, true, false),
          ('seller4', 'Seller Four', 'Curitiba, PR', 123, false, false),
          ('seller5', 'Seller Five', 'Porto Alegre, RS', 345, true, true)
      `, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log("Vendedores inseridos com sucesso.");
          resolve(null);
        }
      });
    });

    // Inserindo produtos
    await new Promise((resolve, reject) => {
      db.run(`
        INSERT INTO product (id, title, description, price, category, image_url, seller_id, is_favorite)
        VALUES
          ('prod1', 'Product 1', 'Description for Product 1', 29.99, 'Category 1', 'https://example.com/image1.jpg', 'seller1', false),
          ('prod2', 'Product 2', 'Description for Product 2', 49.99, 'Category 2', 'https://example.com/image2.jpg', 'seller2', true),
          ('prod3', 'Product 3', 'Description for Product 3', 19.99, 'Category 3', 'https://example.com/image3.jpg', 'seller1', false),
          ('prod4', 'Product 4', 'Description for Product 4', 39.99, 'Category 1', 'https://example.com/image4.jpg', 'seller3', true),
          ('prod5', 'Product 5', 'Description for Product 5', 59.99, 'Category 2', 'https://example.com/image5.jpg', 'seller4', false),
          ('prod6', 'Product 6', 'Description for Product 6', 99.99, 'Category 4', 'https://example.com/image6.jpg', 'seller5', true)
      `, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log("Produtos inseridos com sucesso.");
          resolve(null);
        }
      });
    });

    // Inserindo itens no carrinho
    await new Promise((resolve, reject) => {
      db.run(`
        INSERT INTO cart_item (product_id, quantity)
        VALUES
          ('prod1', 2),
          ('prod2', 1),
          ('prod4', 5),
          ('prod6', 3)
      `, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log("Itens do carrinho inseridos com sucesso.");
          resolve(null);
        }
      });
    });

    // Verificar se os dados foram inseridos corretamente
    db.all(`SELECT * FROM seller`, (err, rows) => {
      if (err) {
        console.error("Erro ao verificar os vendedores:", err);
      } else {
        console.log("Vendedores no banco de dados:", rows);
      }
    });

    db.all(`SELECT * FROM product`, (err, rows) => {
      if (err) {
        console.error("Erro ao verificar os produtos:", err);
      } else {
        console.log("Produtos no banco de dados:", rows);
      }
    });

    db.all(`SELECT * FROM cart_item`, (err, rows) => {
      if (err) {
        console.error("Erro ao verificar os itens do carrinho:", err);
      } else {
        console.log("Itens do carrinho no banco de dados:", rows);
      }
    });

    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};
