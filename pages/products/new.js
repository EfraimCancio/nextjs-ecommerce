import { useState } from "react";

import Layout from "@/components/Layout";

import axios from "axios";
import { useRouter } from "next/router";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  async function createProduct(ev) {
    ev.preventDefault();
    const data = { title, description, price };
    await axios.post("/api/products", data);
    setGoToProducts(true);
  }

  if (goToProducts) {
    return router.push("/products");
  }

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>Novo Produto</h1>
        <label>Novo Produto</label>
        <input
          type="text"
          placeholder="Nome do produto"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <label>Descrição do produto</label>
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <label>Preço (em Reais)</label>
        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        />
        <button type="submit" className="btn-primary">
          Salvar
        </button>
      </form>
    </Layout>
  );
}
